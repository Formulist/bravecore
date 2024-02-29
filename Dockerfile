FROM node:19-slim AS deps

ARG GITHUB_TOKEN
ARG NODE_ENV 'production'
ENV S3_SECRET_ACCESS_KEY $S3_SECRET_ACCESS_KEY
ENV S3_ACCESS_KEY $S3_ACCESS_KEY
ENV NEXT_PUBLIC_URL $NEXT_PUBLIC_URL
ENV NEXT_PUBLIC_GATEWAY_URL $NEXT_PUBLIC_GATEWAY_URL
ENV GITHUB_TOKEN $GITHUB_TOKEN
ENV NODE_ENV 'production'

RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get install -y libc6
WORKDIR /app
COPY package.json yarn.lock ./
RUN echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}\n@formulist:registry=https://npm.pkg.github.com" > /app/.npmrc
RUN yarn install
RUN rm /app/.npmrc

# Rebuild the source code only when needed
FROM node:19-slim AS builder
ENV NODE_ENV production
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM node:19-slim AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
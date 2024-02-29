import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import client from "graphql-request";
const isProd = !!process.env?.NODE_ENV?.includes("prod");
export const gqlClient = <R = any, V = any>(
  document: TypedDocumentNode<R, V>,
  variables: Record<string, any>
) =>
  client({
    document,
    url: isProd
      ? process.env.NEXT_PUBLIC_GATEWAY_URL ?? ""
      : "http://localhost:8080/graphql",
    variables,
  });

import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:8080/schema.gql",
  documents: "./src/**/*.graphql",
  generates: {
    "src/types.ts": {
      plugins: ["typescript"],
      presetConfig: {
        baseTypesPath: "types.ts",
        extension: ".ts",
      },
    },
    "packages/": {
      preset: "near-operation-file",
      plugins: ["typescript-operations", "typed-document-node"],
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "src/types.ts",
      },
    },
  },
};
export default config;

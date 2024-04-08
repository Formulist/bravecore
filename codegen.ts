import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:8080/graphql",
  documents: "./src/**/*.graphql",
  generates: {
    "src/types.ts": {
      plugins: ["typescript"],
      presetConfig: {
        baseTypesPath: "/src/types.ts",
        extension: ".ts",
      },
    },
    src: {
      preset: "near-operation-file",
      plugins: ["typescript-operations", "typed-document-node"],
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "/types.ts",
      },
    },
  },
};
export default config;

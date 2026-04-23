import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      "better-tailwindcss": eslintPluginBetterTailwindcss,
      "simple-import-sort": simpleImportSort,
      import: importPlugin,
    },
    rules: {
      "better-tailwindcss/enforce-canonical-classes": ["warn", { rootFontSize: 16 }],
      "better-tailwindcss/enforce-consistent-class-order": "warn",
      "better-tailwindcss/no-conflicting-classes": "error",
      "better-tailwindcss/no-deprecated-classes": "warn",
      "better-tailwindcss/no-duplicate-classes": "error",
      "better-tailwindcss/no-restricted-classes": "error",
      "better-tailwindcss/no-unnecessary-whitespace": "warn",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [["^\\u0000"], ["^react", "^next"], ["^@?\\w"], ["^@/"], ["^\\."]],
        },
      ],
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
    },
    settings: {
      react: {
        version: "19",
      },
      "better-tailwindcss": {
        entryPoint: "app/globals.css",
      },
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "*/dist/**", "next-env.d.ts"]),
]);

export default eslintConfig;

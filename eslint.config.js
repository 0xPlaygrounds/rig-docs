// eslint.config.js
import parser from "@typescript-eslint/parser";
import plugin from "@typescript-eslint/eslint-plugin";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "public/**",
      ".github/**",
    ],
    languageOptions: {
      parser: parser,
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        // Optional: required only for type-aware rules like no-floating-promises
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": plugin,
    },
    rules: {
      // Add any custom rules here
    },
  },
  {
    files: ["**/*.mdx"],
    ignores: ["**/*.mdx"],
  },
];

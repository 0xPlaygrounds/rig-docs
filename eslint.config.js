/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // JavaScript/TypeScript files
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'public/**',
      '.github/**'
    ],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      // Add any custom rules here
    }
  },
  // MDX files - excluding them from linting for now
  {
    files: ["**/*.mdx"],
    ignores: ["**/*.mdx"]
  }
]; 
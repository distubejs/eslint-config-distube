module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "deprecation"],
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    "@typescript-eslint/require-await": "error",
    "arrow-parens": ["error", "as-needed"],
    curly: ["error", "multi-line", "consistent"],
    "deprecation/deprecation": "warn",
    "eol-last": "error",
    "linebreak-style": "error",
    "max-len": [
      "error",
      {
        code: 120,
        ignoreRegExpLiterals: true,
        ignoreUrls: true,
      },
    ],
    "no-console": "error",
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 0 }],
    "prefer-template": "error",
    "sort-imports": [
      "warn",
      {
        ignoreDeclarationSort: true,
      },
    ],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        asyncArrow: "always",
        named: "never",
      },
    ],
  },
};

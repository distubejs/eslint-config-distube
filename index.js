module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jsdoc"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    "no-console": "error",
    "sort-imports": [
      "warn",
      {
        ignoreDeclarationSort: true,
      },
    ],
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-unused-vars": "error",
    "prefer-template": "error",
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "jsdoc/check-tag-names": "warn",
    "jsdoc/check-types": "warn",
    "valid-jsdoc": [
      "warn",
      {
        requireReturn: false,
        requireReturnDescription: false,
        prefer: {
          return: "returns",
          arg: "param",
        },
        preferType: {
          String: "string",
          Number: "number",
          Boolean: "boolean",
          Symbol: "symbol",
          object: "Object",
          function: "Function",
          array: "Array",
          date: "Date",
          error: "Error",
          null: "void",
        },
      },
    ],
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
    "no-multi-spaces": "error",
    "arrow-parens": ["error", "as-needed"],
    curly: ["error", "multi-line", "consistent"],
    quotes: ["error", "double"],
  },
  settings: {
    jsdoc: {
      tagNamePreference: {
        property: "prop",
        augments: "extends",
        function: "method",
      },
      preferredTypes: {
        object: "Object",
      },
    },
  },
};

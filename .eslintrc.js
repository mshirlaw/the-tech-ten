module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  ignorePatterns: ["**/__mocks__/gatsby.js"],
  overrides: [
    {
      files: ["jest-preprocess.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
      },
    },
    {
      files: ["*.tsx", "*.ts"],
      rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier", "jest"],
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "jsx-a11y/no-redundant-roles": "off",
    "linebreak-style": ["error", "unix"],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/prop-types": "off",
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: false,
        printWidth: 120,
      },
    ],
  },
  settings: {
    react: {
      pragma: "React",
      fragment: "Fragment",
      version: "detect",
    },
    linkComponents: ["Hyperlink", { name: "Link", linkAttribute: "to" }],
  },
};

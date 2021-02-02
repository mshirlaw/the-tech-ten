module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "plugin:jsx-a11y/recommended"
    "plugin:react/recommended", 
  ],
  plugins: [
    "react-hooks"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "jsx-a11y/no-redundant-roles": "off",
    "react-hooks/exhaustive-deps": "warn',
    "react-hooks/rules-of-hooks": "error",
    "react/prop-types": "off",
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
      },
    },
    {
      files: ['*.tsx', '*.ts'],
      rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
      },
    },
  ],
settings: {
        react: {
            version: 'detect', 
        },
        linkComponents: [
            { name: 'Link', linkAttribute: 'to' },
        ],
    },
};

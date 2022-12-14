module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    curly: 2,
    "default-case": 2,
    eqeqeq: 2,
    "max-classes-per-file": 2,
    "no-caller": 2,
    "no-empty-function": 2,
    "no-eval": 2,
    "no-extra-bind": 2,
    "no-lone-blocks": 2,
    "no-return-await": 2,
    "vars-on-top": 2,
    "no-var": 2,
    "prefer-const": 2,
    camelcase: 1,
    "@typescript-eslint/interface-name-prefix": 0,
    "no-case-declarations": 0,
    "react-native/no-inline-styles": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "react-hooks/exhaustive-deps": 0,
    "@typescript-eslint/camelcase": 0,
    "react/display-name": "off",
  },
};

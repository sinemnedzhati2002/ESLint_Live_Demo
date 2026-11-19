import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: { console: "readonly" }
    },
    rules: {
      "prefer-const": "warn",
      "eqeqeq": "error",
      "curly": "off",
      "no-console": "off"
    }
  }
];

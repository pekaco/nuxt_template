module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
  ],
  plugins: ["css-reorder"],
  // add your custom rules here
  rules: {
    "prettier/prettier": [
      "error",
      {
        htmlWhitespaceSensitivity: "strict",
      },
    ],
    "vue/multi-word-component-names": "off",
    "css-reorder/property-reorder": "error",
  },
};

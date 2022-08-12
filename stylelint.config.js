const { recess } = require("css-property-orders");
module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-config-recommended-vue",
  ],
  plugins: ["stylelint-order"],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "rule-empty-line-before": "always",
    "alpha-value-notation": null,
    "order/properties-order": recess,
    "value-keyword-case": null,
  },
};

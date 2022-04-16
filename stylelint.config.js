module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
    'stylelint-config-rational-order',
  ],
  plugins: ['stylelint-order', 'stylelint-config-rational-order/plugin'],
  rules: {
    'block-no-empty': null,
    'no-missing-end-of-source-newline': null,
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': false,
      },
    ],
    'font-family-no-missing-generic-family-keyword': null,
    'selector-class-pattern': null,
  },
}

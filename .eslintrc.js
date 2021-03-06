const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'never'],
    'indent': [2, 2, { SwitchCase: 1 }],
    'max-statements-per-line': ['warn', { max: 1 }],
    'no-unused-vars': isProd ? 2 : 1,
    'no-console': 'warn',
    'camelcase': 'warn',
    'import/order': 0,
    'require-await': 0,
    'vue/require-component-is': 0,
    'vue/no-v-html': 0,
    'generator-star-spacing': 0,
    'max-len': [
      2,
      140,
      4,
      { ignoreUrls: true, ignoreTemplateLiterals: true, ignoreStrings: true },
    ],
    'no-debugger': isProd ? 2 : 0,
    'no-return-assign': 0,
    'no-mixed-spaces-and-tabs': 2,
    'object-curly-spacing': [2, 'always'],
    'max-statements': [2, 24],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'fetch',
          'asyncData',
          'data',
          'computed',
          'watch',
          'LIFECYCLE_HOOKS',
          'methods',
          'head',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'CONTENT',
          'EVENTS',
        ],
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: 1,
      },
    ],
  },
}

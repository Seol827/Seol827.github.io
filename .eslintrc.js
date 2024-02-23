module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
  },

  extends: [
    // Base ESLint recommended rules
    'eslint:recommended',

    // Typescript ESLint recommended rules
    'plugin:@typescript-eslint/recommended',

    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    // 'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
    // 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    // https://github.com/prettier/eslint-config-prettier#installation
    // usage with Prettier, provided by 'eslint-config-prettier'.
    'prettier',
  ],

  plugins: [
    // required to lint *.ts files
    '@typescript-eslint',

    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
    // required to lint *.vue files
    'vue',

    // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
    // Prettier has not been included as plugin to avoid performance impact
    // add it as an extension for your IDE
  ],

  globals: {
    ga: 'readonly', // Google Analytics
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly',
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  // add your custom rules here
  rules: {
    'prefer-promise-reject-errors': 'off',

    'no-undef': 'off',

    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 'no-unused-vars':
    //   process.env.NODE_ENV === 'production'
    //     ? 'error'
    //     : [
    //         'warn',
    //         {
    //           argsIgnorePattern: '^_',
    //           varsIgnorePattern: '^_',
    //           caughtErrorsIgnorePattern: '^_',
    //           destructuredArrayIgnorePattern: '^_',
    //         },
    //       ],

    '@typescript-eslint/no-unused-vars':
      process.env.NODE_ENV === 'production'
        ? 'error'
        : [
            'warn',
            {
              argsIgnorePattern: '^_',
              varsIgnorePattern: '^_',
              caughtErrorsIgnorePattern: '^_',
              destructuredArrayIgnorePattern: '^_',
            },
          ],

    'vue/multi-word-component-names': 'off',

    'vue/require-default-prop': 'off',
  },
};

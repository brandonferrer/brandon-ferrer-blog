module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: [
          '**/__tests__/**/*',
          '**/*.{test,spec}.{js,jsx}',
          '**/test-utils.{js,jsx}',
          '**/setupTests.{js,jsx}',
        ],
      },
    ],
    'import/no-named-as-default': 'warn',
    'no-use-before-define': ['warn', { variables: false }],
    camelcase: 'off', // should disable only for destructuring.
    'react/no-unescaped-entities': 'off',
    'react/state-in-constructor': 'off',
    'object-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-console': 'off',
    'array-callback-return': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'arrow-parens': 'off',
    'operator-linebreak': 'off',
    'react/jsx-curly-brace-presence': 'warn',
    'jsx-a11y/no-autofocus': 'warn',
    // 'jsx-a11y/href-no-hash': [0],
    'import/no-unresolved': ['off'],
    // 'import/extensions': ['warn', 'never', { packages: 'always' }],
    // 'react/no-unused-state': 'warn',
    // 'no-undef': 'warn',
    // 'no-param-reassign': 'warn',
    // 'no-plusplus': 'warn',
    // 'react/require-default-props': 'warn',
    // 'react/default-props-match-prop-types': 'warn',
    'react/jsx-filename-extension': 'off',
    // 'consistent-return': 'warn',
    // 'react/no-unused-prop-types': 'warn',
    // 'react/forbid-prop-types': 'warn',
    // 'prefer-destructuring': 'warn',
    // 'default-case': 'warn',
    // 'class-methods-use-this': 'warn',
    // 'jsx-a11y/click-events-have-key-events': 'warn',
    // 'jsx-a11y/no-static-element-interactions': 'warn',
    // 'jsx-a11y/anchor-is-valid': 'warn',
    // 'jsx-a11y/anchor-has-content': 'warn',
    // 'jsx-a11y/heading-has-content': 'warn',
    // 'jsx-a11y/label-has-for': 'warn',
    // 'import/prefer-default-export': 'warn',
    // 'react/no-did-mount-set-state': 'warn',
    // 'no-unused-vars': 'warn',
    // 'react/prefer-stateless-function': 'warn',
    // 'import/first': 'warn',
    // 'no-shadow': 'warn',
    // 'no-class-assign': 'warn',
    // 'react/sort-comp': 'warn',
    // 'react/jsx-key': 'warn',
    // 'no-lone-blocks': 'warn',
    // 'react/style-prop-object': 'warn',
    // 'no-return-assign': 'warn',
    // 'global-require': 'warn',
    // 'no-unused-expressions': 'warn',
    // 'react/jsx-no-bind': 'warn',
    // 'no-underscore-dangle': 'warn',
    // 'react/jsx-pascal-case': 'warn',
    // 'react/no-unescaped-entities': 'warn',
    // 'react/jsx-boolean-value': 'warn',
    // 'arrow-body-style': 'warn',
    // 'react/no-array-index-key': 'warn',
    // 'no-restricted-globals': 'warn',
    // 'react/jsx-no-undef': 'warn',
    // 'no-empty-function': 'warn',
    // 'prefer-template': 'warn',
    // 'react/react-in-jsx-scope': 'warn', // lol
    'react/display-name': 'off', // https://github.com/yannickcr/eslint-plugin-react/issues/2105
    // 'jsx-a11y/aria-role': 'warn',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {},
    },
  ],
};

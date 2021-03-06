module.exports = {
  'env': {
    'mocha': true,
    'jest': true,
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2019,
    'sourceType': 'module',
    'ecmaFeatures': {
      'legacyDecorators': true,
    },
  },
  'extends': ['plugin:@typescript-eslint/recommended', 'airbnb'],
  'plugins': ['mocha', 'detox'],
  'globals': {
    '__DEV__': false,
    'babelHelpers': false,
  },
  'settings': {
    'import/resolver': {
      'react-native': { 'platform': 'both' },
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  'rules': {
    'no-underscore-dangle': 0,
    'no-return-assign': 0,
    'max-len': 0,
    'no-shadow': 0,
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'no-use-before-define': 0,
    'no-unused-vars': 0,
    'eqeqeq': 1,
    'global-require': 0,
    'class-methods-use-this': 0,
    'react/sort-comp': 0,
    'react/require-default-props': 0,
    'react/prop-types': [
      'warn',
      {
        'skipUndeclared': true,
      },
    ],
    'react/jsx-tag-spacing': [
      'warn',
      {
        'closingSlash': 'never',
        'beforeSelfClosing': 'always',
        'afterOpening': 'never',
        'beforeClosing': 'allow'
      },
    ],
    'radix': 0,
    'react/prefer-stateless-function': 0,
    'no-plusplus': 0,
    'no-console': 0,
    'no-restricted-syntax': 0,
    'no-continue': 0,
    'guard-for-in': 0,
    'no-debugger': 0,
    'prefer-destructuring': 0,
    'react/destructuring-assignment': 1,
    'object-curly-newline': [
      'warn',
      {
        'consistent': true,
        'multiline': true,
      },
    ],
    'no-param-reassign': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { 'accessibility': 'no-public' },
    ],
    'import/order': [
      'warn',
      {
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        'allowExpressions': true,
        'allowTypedFunctionExpressions': true,
        'allowHigherOrderFunctions': true,
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
  }
}
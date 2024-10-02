const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'es2020',
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jest',
    'jest-dom',
    'prettier',
    'simple-import-sort',
    'redux-saga',
    'unused-imports',
    'cypress',
    'mui-path-imports',
    '@tanstack/query'
  ],
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:react-hooks/recommended',
    'plugin:redux-saga/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'react-app'
  ],
  rules: {
    // To fix and apply
    "@tanstack/query/exhaustive-deps": "error",
    "@tanstack/query/no-rest-destructuring": "warn",
    "@tanstack/query/stable-query-client": "error",
    "mui-path-imports/mui-path-imports": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    'unused-imports/no-unused-imports-ts': 'error',
    'import/no-cycle': 0,
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': 0, // allow to declare unused vars with _ prefix
    'jest/no-disabled-tests': 0,
    'redux-saga/yield-effects': 0,
    'jest/no-done-callback': 0,
    'no-param-reassign': 0,
    'react/no-array-index-key': 0,
    'redux-saga/no-unhandled-errors': 0,
    'no-plusplus': 0,
    'react/static-property-placement': 0,
    'react/state-in-constructor': 0,
    'react-hooks/rules-of-hooks': 0,
    'func-names': 0,
    'no-underscore-dangle': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/no-children-prop': 0,
    'no-restricted-globals': 0,

    // Disabled as they take a long time to complete
    'prettier/prettier': process.env.NODE_ENV === 'test' ? 0 : 2,
    '@typescript-eslint/no-implied-eval': 0,

    // Currently applied
    'no-console': 0,
    complexity: ["error", 18], // prevent from writing too complex functions
    'sort-imports': 0, // turned of as we're using simple-import-sort for sorting
    'spaced-comment': [2, 'always', { markers: ['/'] }], // modified to allow TS references with triple brackets
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-non-null-asserted-optional-chain': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0, // in many cases TS knows return type of the function so don't require to always specify it explicitly
    '@typescript-eslint/array-type': 2, // each array type should be written as type[]
    '@typescript-eslint/consistent-type-imports': [2, { prefer: 'no-type-imports' }], // import types along with the normal imports
    '@typescript-eslint/prefer-enum-initializers': 2, // enum values should be always specified explicitly
    'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.jsx'] }], // reduce allowed extensions to typescript ones
    'react/destructuring-assignment': 0, // allow to destructure only a part of the props
    'react-hooks/exhaustive-deps': "error", // allow to relate useEffect invocation only to a few of variables used inside
    'react/require-default-props': 0,
    'react/default-props-match-prop-types': 0,
    'import/order': 0, // turned of as we're using simple-import-sort for sorting
    'import/prefer-default-export': 0, // we're using default exports only for pages
    'import/no-useless-path-segments': 0,
    'import/no-extraneous-dependencies': [
      2,
      { devDependencies: ['**/*.test.*', '**/*.stories.tsx', 'craco.config.js', 'src/e2e/**/*.*', '**/*.mock.*'] },
    ],
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          ['^\\u0000'], // side effect imports.
          ['^react', '^@?\\w'], // packages from node_modules. `react` related packages come first.
          ['^@(components|modules|routes|store|translations|utils)'], // absolute imports.
          ['^\\.'], // relative imports. Anything that starts with a dot.
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/jsx-props-no-spreading': 0,
        'react/prop-types': 0,
      },
    },
    {
      files: ['*.stories.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
      },
    },
    {
      files: ['*/store/**/*'],
      rules: {
        'no-param-reassign': 0,
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      },
    },
  ],
  settings: {
    react: { version: 'detect' },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.json'],
    },
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, 'src')],
        extensions: ['.js', '.ts', '.tsx'],
      },
      typescript: {
        project: path.resolve(__dirname, 'tsconfig.json'),
      },
    },
    jest: { version: 26 },
  },
};

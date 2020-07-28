module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'import/prefer-default-export': 'off',
    'react/jsx-wrap-multilines': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': [
          '.storybook/**',
          'src/**/*.stories.tsx',
        ]
      }
    ],
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
    extraFileExtensions: ['ts', 'tsx'],
  },
};

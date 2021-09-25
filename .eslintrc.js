module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-html',
  ],
  rules: {
    'import/extensions': ['error', 'always'],
    'max-len': ['error', {code: 120}],
    'no-unused-vars': ['warn'],
    'object-curly-spacing': ['error', 'never'],
  },
};

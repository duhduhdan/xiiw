module.exports = {
  extends: 'standard',
  plugins: ['react'],
  parser: 'babel-eslint',
  rules: {
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: 'React',
      },
    ],
    'react/jsx-uses-vars': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': 0
  },
}

module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  plugins: [
    'prettier',
  ],
  env: {
    browser: true,
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': [2, 'as-needed'],
    'react/jsx-filename-extension': 0,
    'implicit-arrow-linebreak': 0,
    'prettier/prettier': "error",
    'react/require-default-props': 0,
  },
};

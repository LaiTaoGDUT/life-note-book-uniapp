module.exports = {
  rules: {
    "vue/singleline-html-element-content-newline": "off",
    "vue/multi-word-component-names":"off",
    semi: [2, 'always'],
    'no-param-reassign': 0,
    'import/no-extraneous-dependencies': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 0,
    'no-alert': 0,
    'linebreak-style': 0,
    'max-len': 0,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'comma-dangle': [2, 'never'],
    'import/order': 0,
    'arrow-parens': 0,
    'operator-linebreak': 0,
    "vue/html-self-closing": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off", // 允许使用any
    '@typescript-eslint/no-var-requires': 'off', // 允许使用require
  }
};

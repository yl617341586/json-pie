module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['simple-import-sort', 'prettier'],
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'max-depth': ['error', 4],
        'no-useless-escape': 'off',
    },
};

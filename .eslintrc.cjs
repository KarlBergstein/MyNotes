module.exports = {
    ignorePatterns: ['./src-js-demo/*.js'],
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    extends: 'standard-with-typescript',
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        project: ['./tsconfig.json']
    },
    rules: {
        indent: ['warn', 4],
        '@typescript-eslint/indent': ['warn', 4],
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/no-non-null-assertion': ['warn'],
        '@typescript-eslint/space-before-function-paren': ['off']
    }
}

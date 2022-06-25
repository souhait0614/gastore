module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['import', 'unused-imports', '@typescript-eslint'],
  extends: ['google', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    'require-jsdoc': 0,
    'valid-jsdoc': 0,

    'import/newline-after-import': 1,
    'import/order': [
      1,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

    'unused-imports/no-unused-imports': 1,
    'no-unused-vars': [1, { vars: 'all', args: 'after-used' }],

    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'variable',
        modifiers: ['const'],
        types: ['function'],
        format: ['strictCamelCase', 'StrictPascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['StrictPascalCase'],
      },
      {
        selector: 'property',
        format: [],
      },
      {
        selector: 'default',
        format: ['strictCamelCase'],
      },
    ],
  },
}

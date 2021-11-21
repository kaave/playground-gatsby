module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'prettier'],
  globals: {
    Office: 'readonly',
  },
  parserOptions: {
    project: 'tsconfig.json',
  },
  plugins: ['react-hooks'],
  rules: {
    /*
     * base
     */
    'arrow-body-style': ['error', 'as-needed'],
    camelcase: ['off'], // API 定義の JSON に snake_case が入っているため合わない
    'class-methods-use-this': ['off'],
    'consistent-return': ['off'], // TypeScript のフロー解析を考慮できないため false positive が発生する
    'default-case': ['off'],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'max-classes-per-file': ['off'],
    'no-case-declarations': ['error'],
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'classnames',
            message: "Please use 'cx' in emotion instead. If not possible, use string interpolation.",
          },
        ],
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: 'Do not declare enums',
      },
    ],
    'no-nested-ternary': ['off'],
    'no-nonoctal-decimal-escape': 'error',
    'no-plusplus': ['off'],
    'no-return-assign': ['off'],
    'no-shadow': ['off'],
    'no-throw-literal': ['off'],
    'no-underscore-dangle': ['off'],
    'no-use-before-define': ['off'],
    'no-useless-constructor': ['off'],
    'no-unsafe-optional-chaining': 'error',
    'no-unused-expressions': ['off'],
    'no-unused-vars': 'off',
    yoda: ['off', 'never', { exceptRange: true }],

    /*
     * import
     */
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        stories: 'always',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': ['off'],
    'import/order': ['off'],
    'import/prefer-default-export': ['off'],

    /*
     * typescript
     */
    '@typescript-eslint/ban-types': [
      'error',
      {
        // React で props が無いときの書き方と衝突する
        types: { '{}': false },
        extendDefaults: true,
      },
    ],
    '@typescript-eslint/camelcase': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'], // 警告が多すぎて無効化した。地道にリファクタリングする。
    // Optional Chaining 関連の挙動が怪しいため、ひとまず無効化
    // '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-implicit-any-catch': 'warn', // 件数が減り次第 error にする
    '@typescript-eslint/no-use-before-define': ['off'],
    // なんか全然思ったように動いてないのでダメ
    // '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // string literal types も見てしまうため厳しい
    // '@typescript-eslint/sort-type-union-intersection-members': 'error',
    // type importを強要
    '@typescript-eslint/consistent-type-imports': 'warn', // ゆくゆくは error とする
    // String#startsWith String#endsWith を使うべきとこで使ってないとNG
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    // @ts-expect-error でよいところを @ts-ignore してるとNG
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    // Record を使えるところで使ってないとNG
    '@typescript-eslint/consistent-indexed-object-style': 'warn',
    // アクセス修飾子を強要
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        overrides: {
          constructors: 'no-public',
        },
      },
    ],

    /*
     * react
     */
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    'react/jsx-no-target-blank': ['error'],
    'react/sort-comp': 'warn', // これから新規に Class Component を作成することはかなり特殊なケースを除きないので Warn に留める
    'react/button-has-type': ['off'],
    'react/no-array-index-key': ['off'],
    'react/no-danger': ['off'],
    'react/prop-types': 'off', // prop-types に頼ることは今後もなく、誤爆オンリーなので OFF
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-uses-react': 'off', // New JSX Transform (tsconfig.json "jsx": "react-jsx") の利用で `import React from 'react';` が不要となるため
    'react/react-in-jsx-scope': 'off', // New JSX Transform (tsconfig.json "jsx": "react-jsx") の利用で `import React from 'react';` が不要となるため
    'react/require-default-props': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',

    /*
     * a11y
     */
    'jsx-a11y/anchor-has-content': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/control-has-associated-label': ['off'],
    'jsx-a11y/label-has-associated-control': ['off'],
    'jsx-a11y/mouse-events-have-key-events': ['off'],
  },
};

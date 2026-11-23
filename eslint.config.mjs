import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import noBarrelFiles from 'eslint-plugin-no-barrel-files';
import perfectionist from 'eslint-plugin-perfectionist';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      'no-barrel-files': noBarrelFiles,
      perfectionist,
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports', prefer: 'type-imports' },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      'no-barrel-files/no-barrel-files': 'error',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', next: 'return', prev: '*' },
        { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
        { blankLine: 'any', next: ['const', 'let', 'var'], prev: ['const', 'let', 'var'] },
      ],
      'perfectionist/sort-enums': ['error', { order: 'asc', type: 'natural' }],
      'perfectionist/sort-imports': ['error', { newlinesBetween: 0, order: 'asc', type: 'natural' }],
      'perfectionist/sort-interfaces': ['error', { order: 'asc', type: 'natural' }],
      'perfectionist/sort-jsx-props': ['error', { ignoreCase: false, order: 'asc' }],
      'perfectionist/sort-named-imports': ['error', { order: 'asc', type: 'alphabetical' }],
      'perfectionist/sort-objects': ['error', { ignoreCase: true, order: 'asc', type: 'alphabetical' }],
      'perfectionist/sort-variable-declarations': ['error', { order: 'asc', type: 'natural' }],
    },
  },
  {
    files: ['src/shared/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['src/features/*', 'src/app/*'],
              message: 'src/shared must never import from src/features or src/app.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/features/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['src/app/*'],
              message: 'src/features must never import from src/app.',
            },
          ],
        },
      ],
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'src/shared/components/ui/ballpit/Ballpit.tsx',
  ]),
]);

export default eslintConfig;

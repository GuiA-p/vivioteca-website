import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import storybook from 'eslint-plugin-storybook';
import tailwind from 'eslint-plugin-tailwindcss';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 1. Configurações base do Next.js e TypeScript
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  
  // 2. Configurações do Storybook
  ...storybook.configs['flat/recommended'],

  // 3. Regras customizadas para o projeto
  {
    plugins: {
      tailwindcss: tailwind,
      'simple-import-sort': simpleImportSort,
      prettier: prettier,
    },
    rules: {
      // Qualidade de código
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // Ordenação de imports automática
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // Tailwind CSS
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off', // Permitir classes do CVA
      'tailwindcss/enforces-shorthand': 'error',

      // Prettier integrado
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'all',
          singleQuote: true,
          printWidth: 80,
          semi: true,
        },
      ],
    },
  },

  // 4. Configuração específica para o Tailwind saber onde olhar
  {
    settings: {
      tailwindcss: {
        callees: ['cn', 'cva'],
        config: 'tailwind.config.ts',
      },
    },
  },

  // 5. Arquivos ignorados
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**', 'build/**'],
  },
];

export default eslintConfig;
import js from '@eslint/js';
import ts from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';

import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettier from 'eslint-plugin-prettier';

export default ts.config(
  // 1. Ignorar arquivos globalmente (Deve ser o primeiro objeto)
  {
    ignores: ['.next/**', 'node_modules/**', 'storybook-static/**', 'dist/**'],
  },

  // 2. Base recomendada
  js.configs.recommended,
  ...ts.configs.recommended,

  // 3. Bloco Único de Configuração (Resolve o erro de plugin não definido)
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      '@next/next': nextPlugin,
      'react': reactPlugin,
      'react-hooks': hooksPlugin,
  
      'simple-import-sort': simpleImportSort,
      'prettier': prettier,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
     
    },
    rules: {
      // Regras do Next e React
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...hooksPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',

      // TypeScript
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // Imports
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

    

      // Prettier (Sempre por último para sobrescrever conflitos)
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
          printWidth: 80,
          semi: true,
          jsxSingleQuote: false,
        },
      ],
    },
  },

  // 4. Storybook (Configuração especializada via plugin oficial)
  ...storybook.configs['flat/recommended'],
);
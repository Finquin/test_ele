import globals from 'globals';
import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';


export default defineConfig([

  // Archivos JS
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
       ...globals.browser,
       ...globals.es2024,
       ...globals.node
  }
    }
  },

// Reglas base recomendadas
  js.configs.recommended,

  // Reglas personalizadas
  {
    files: ['**/*.js'],
    rules: {
      indent: 'off',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'never'],
      'eol-last': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'comma-spacing': ['error', { before: false, after: true }],
			'no-var': 'error',
      'no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }]
    }
  },

  // Ignorados globales
  globalIgnores([
    '.vscode/',
    'node_modules/',
    'dist/'
  ])

]);

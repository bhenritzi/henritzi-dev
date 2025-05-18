// .eslintrc.cjs
module.exports = {
  root: true, // Don't look outside the project root for configuration
  env: {
    browser: true, // Enable browser global variables
    es2021: true, // Enable ES2021 features
  },
  extends: [
    'eslint:recommended', // Use ESLint's recommended rules
    'plugin:react/recommended', // Use recommended rules for React
    'plugin:react-hooks/recommended', // Use recommended rules for React Hooks
    'plugin:@typescript-eslint/recommended', // Use recommended rules from @typescript-eslint
    // Add 'plugin:prettier/recommended' here if you are also integrating Prettier (highly recommended)
  ],
  parser: '@typescript-eslint/parser', // Specify the parser for TypeScript
  parserOptions: {
    ecmaVersion: 'latest', // Allow parsing latest ECMAScript features
    sourceType: 'module', // Enable ES modules
    project: ['./tsconfig.json'], // Tell the parser where to find your tsconfig.json
    ecmaFeatures: {
      jsx: true, // Enable JSX support
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  plugins: [
    'react', // Include the React plugin
    'react-hooks', // Include the React Hooks plugin
    '@typescript-eslint', // Include the TypeScript plugin
  ],
  rules: {
    // Add or override specific rules here. Examples:
    // 'no-unused-vars': 'warn', // ESLint's base rule (less effective with TS)
    '@typescript-eslint/no-unused-vars': 'warn', // Use the TS version instead
    '@typescript-eslint/explicit-function-return-type': 'off', // Disable this rule if you prefer implicit return types
    'react/react-in-jsx-scope': 'off', // Disable if using React 17+ (new JSX transform)
    'react/prop-types': 'off', // Disable prop-types as TypeScript provides static type checking
  },
  ignorePatterns: [
    'dist', // Ignore the build output directory
    '.eslintrc.cjs', // Ignore the config file itself
    'vite.config.ts', // Optionally ignore vite config if you don't want to lint it strictly
    '**/*.js', // Ignore JS files if you only want to lint TS/TSX
    'node_modules', // Ignore node_modules
  ],
};
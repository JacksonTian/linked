// ESLint 9 扁平化配置文件
import js from '@eslint/js';
import globals from 'globals';

export default [
  // 使用推荐规则作为基础
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest', // 支持最新的 ECMAScript 标准
      sourceType: 'module', // 模块化代码支持
      globals: {
        ...globals.node, // Node.js 全局变量
        ...globals.mocha // Mocha 测试框架全局变量
      }
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 忽略未使用的变量（以下划线开头）
      'eqeqeq': 'error', // 强制使用 === 和 !==
      'curly': 'error', // 强制使用大括号
      'indent': ['error', 2], // 缩进为 2 个空格
      'quotes': ['error', 'single'], // 强制使用单引号
      'semi': ['error', 'always'] // 强制语句末尾加分号
    }
  }
];
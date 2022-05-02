const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest', // 将.js后缀的文件使用babel-jest处理  解决Jest无法识别ES6import语句的问题
  },
  testMatch: ['<rootDir>/test/**/*.{spec,test}.{js,ts}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  moduleDirectories: [
    '<rootDir>/node_modules',
  ],
  testRunner: 'jest-jasmine2', // jest v27开始要指定jasmine
  testTimeout: 300000,
}

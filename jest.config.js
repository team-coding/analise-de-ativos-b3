module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: './',
  testRegex: '.*\\.spec\\.ts$',
  testPathIgnorePatterns: [
    './node_modules/',
    './packages/backend/node_modules',
    './packages/frontend/node_modules',
  ],
  roots: [
    '<rootDir>',
    '<rootDir>/packages/backend',
    '<rootDir>/packages/frontend',
    '<rootDir>/packages/shared',
  ],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@backend/(.*)': '<rootDir>/packages/backend/src/$1',
    'backend/(.*)': '<rootDir>/packages/backend/src/$1',
    '@domain/(.*)': '<rootDir>/packages/backend/src/domain/$1',
    '@frontend/(.*)': '<rootDir>/packages/frontend/src/$1',
    'frontend/(.*)': '<rootDir>/packages/frontend/src/$1',
    '@shared/(.*)': '<rootDir>/packages/shared/src/$1',
    'shared/(.*)': '<rootDir>/packages/shared/src/$1',
  },
};

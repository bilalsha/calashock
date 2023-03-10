module.exports = {
  collectCoverage: true,
  coverageReporters: ['lcov', 'text', 'text-summary', 'html'],
  collectCoverageFrom: [
    'src/server/**/*.ts',
    '!src/**/__tests__/**',
    '!**/index.ts',
    '!**/app.ts',
    '!src/config/*',
  ],
  roots: ['./src'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  preset: 'ts-jest',
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
};

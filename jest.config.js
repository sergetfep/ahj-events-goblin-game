module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/js/**/*.js'],
};

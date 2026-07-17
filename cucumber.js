module.exports = {
  default: {
    require: ['tests/step-definitions/**/*.js', 'tests/support/**/*.js'],
    paths: ['tests/features/**/*.feature'],
    format: ['progress-bar'],
    timeout: 10000
  }
};
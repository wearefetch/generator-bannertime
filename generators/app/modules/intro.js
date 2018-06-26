/**
 * The generator intro message.
 */

const chalk = require('chalk');

module.exports = function intro() {
  const message = chalk.yellow('\n Its Fetch') +
  chalk.green('\n  _____    _____                     _   _') +
  chalk.green('\n | __  |  | __  |___ ___ ___ ___ ___| |_|_|_____ ___') +
  chalk.green('\n | __ |   | __ -| . |   |   | -_|  _|  _| |     | -_|') +
  chalk.green('\n |_|      |_____|__,|_|_|_|_|___|_| |_| |_|_|_|_|___|\n');
  this.log(message);
};

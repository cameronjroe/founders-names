var uniqueRandomArray = require('unique-random-array');
var founders = require('./founders-names.json');

module.exports = {
  all: founders,
  random: uniqueRandomArray(founders)
};
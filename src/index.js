var uniqueRandomArray = require('unique-random-array');
var founders = require('./founders-names.json');
var getRandomItem = uniqueRandomArray(founders);

module.exports = {
  all: founders,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var items = [];
    for(var i = 0; i < number; i++) {
      items.push(getRandomItem());
    }
    return items;
  }
}
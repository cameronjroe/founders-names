import uniqueRandomArray from 'unique-random-array';
import founders from './founders-names.json';
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
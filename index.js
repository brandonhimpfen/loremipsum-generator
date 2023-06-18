const faker = require('faker');

function generateLoremIpsum(sentences = 1) {
  let result = '';
  for (let i = 0; i < sentences; i++) {
    result += faker.lorem.sentence() + ' ';
  }
  return result.trim();
}

module.exports = generateLoremIpsum;
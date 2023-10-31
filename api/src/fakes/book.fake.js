const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});
const generateManyBooks = (size = 10) => new Array(size).fill({}).map(() => generateOneBook());

module.exports = {
  generateOneBook,
  generateManyBooks,
};

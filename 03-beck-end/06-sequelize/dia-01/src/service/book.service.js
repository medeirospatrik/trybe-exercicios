const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books
};

getAll()

module.exports = {
  getAll,
}


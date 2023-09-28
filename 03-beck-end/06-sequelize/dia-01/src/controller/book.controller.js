const BooksService = require('../service/book.service');

const getAll = async (req, res) => {
  const books = await BooksService.getAll();
  return res.status(200).json(books)
};

module.exports = {
  getAll,
}

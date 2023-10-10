const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({
    order: [['title', 'ASC']]
  })
  return books
};

const getById = async (id) => {
  const book = await Book.findByPk(id)
  console.log(book);
  return book
};

const getByAuthor = async (author) => {
  const book = await Book.findAll({
    where: { author },
    order: [['title', 'ASC']]
  })

  return book
};

const create = async (title, author, pageQuantity) => {
  const newBook = await Book.create({ title, author, pageQuantity })

  return newBook;
};

const update = async (id, title, author, pageQuantity) => {
  const [updatedBook] = await Book.update(
    {title, author, pageQuantity },
    { where: { id }},
  );
  console.log(updatedBook);
  return updatedBook
};

const remove = async (id) => {
  const deleteBook = await Book.destroy(
    { where: { id } },
  );

  console.log(deleteBook);
  return deleteBook;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor
}
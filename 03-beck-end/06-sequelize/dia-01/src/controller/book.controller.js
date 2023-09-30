const { json } = require('sequelize');
const BooksService = require('../service/book.service');

const message404 = { message: 'Livro não encontrado!' }

const getAll = async (req, res) => {
  const books = await BooksService.getAll();
  return res.status(200).json(books)
};

const findById = async (req, res) => {
  const { id } = req.params;
  const book = await BooksService.getById(id);
  if (!book) return res.status(404).json(message404);
  return res.status(200).json(book)
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await BooksService.createBook({ title, author, pageQuantity });
    return res.status(201).json(newBook)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }

};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;

  const updateBook = await BooksService.updateBook(id, { title, author, pageQuantity });

  if (!updateBook) return res.status(404).json(message404)

  return res.status(200).json({ message: 'Livro atualizado com sucesso' });
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BooksService.remove(id);
    if (!book) return res.status(404).json(message404);
    return res.status(200).json({ message: 'Livro excluído com sucesso!' })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message: error.message})
  }
};


module.exports = {
  getAll,
  findById,
  createBook,
  updateBook,
  remove,
}

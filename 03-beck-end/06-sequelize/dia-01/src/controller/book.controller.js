const { bookService } = require('../services');

const getAll = async (req, res) => {
  try {
    const { author } = req.query;

    if (!author) {
      const books = await bookService.getAll()
      return res.status(200).json(books)
    } else {
      const books = await bookService.getByAuthor(author)
      return res.status(200).json(books)
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const book = await bookService.getById(id)
    if (!book) return res.status(404).json({ message: 'Livro não encontrado.'})
    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message })
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await bookService.create(title, author, pageQuantity )
    if (!title || !author) {
      return res.status(400).json({ message: 'esta faltando algum campo obrigatorio!'})
    }
    return res.status(201).json(newBook)
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message)
  }
  
}

const update = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;
  
    const updateBook = await bookService.update(id, title, author, pageQuantity)
    if (!updateBook) return res.status(404).json({ message: 'Livro nao encontrado.'})
    return res.status(200).json('Livro atualizado com sucesso!')
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message })
  }
};

const remove = async (req, res) => {
 try {
  const { id } = req.params;
  const book = await bookService.remove(id)
  return res.status(200).json({ message: 'Livro excluido com sucesso!' });
 } catch (error) {
  console.log(error);
  return res.status(500).json({ message: error.message });
 }
}; 


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}
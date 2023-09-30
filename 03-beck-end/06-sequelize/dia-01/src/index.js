const express = require('express')
const booksController = require('./controller/book.controller');

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.get('/books', booksController.getAll);
app.get('/books/:id', booksController.findById);
app.post('/books', booksController.createBook);
app.put('/books/:id', booksController.updateBook);
app.delete('/books/:id', booksController.remove);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
const express = require('express');
const films = require('./data/movies.json');

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.send(films)
})

app.listen('3000', () => console.log('estou rodando'))
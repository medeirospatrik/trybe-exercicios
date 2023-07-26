const app = require('./app.js')
const fs = require('fs').promises

const read = async () => {
  try {
    const movies = await fs.readFile('src/data/movies.json', 'utf-8');
    return JSON.parse(movies);
  } catch (err) {
    console.log('Nao consegui ler o arquivo')
  }
}

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;

  const movies = await read()

  const unicMovie = await movies.find((movie) => movie.id === Number(id))

  res.status(200).send(unicMovie)
})

app.get('/movies', async (req, res) => {
  const movies = await read()
  res.status(200).json(movies)
})

app.listen('3000', () => console.log('estou rodando'))
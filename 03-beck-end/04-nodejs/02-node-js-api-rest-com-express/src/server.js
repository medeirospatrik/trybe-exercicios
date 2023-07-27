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

const werite = (movies,newFilm) => {
  fs.writeFile('src/data/movies.json', JSON.stringify([...movies, {id: movies.length + 1, ...newFilm}]))
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

app.post('/movies', async (req, res) => {
  const newFIlm = req.body;
  const movies = await read();
  werite(movies, newFIlm)
  res.status(201).json(newFIlm)
})

app.put('/movies/:id', async (req, res) => {
  try{
    const { id } = req.params;
  const update = req.body;
  const movies = await read();

  const updateMovies = movies.map((movi) => {
    if (movi.id === Number(id)) {
      {
        movi = {id: Number(id),...update}
      }


    }
    return movi
  })
  fs.writeFile('src/data/movies.json', JSON.stringify(updateMovies))
  res.status(220).send(updateMovies)
  } catch(err) {console.log(err.message)}
  
})

app.delete('/movies/:id', async (req, res) => {
  try{
    const movies = await read()
    const { id } = req.params;
    const newMovies = movies.filter((movie) => movie.id !== Number(id))
    fs.writeFile('src/data/movies.json', JSON.stringify(newMovies))
    res.status(404).end()
  } catch (err) {
    console.log(err.message);
  }
  
})

app.listen('3000', () => console.log('estou rodando'))
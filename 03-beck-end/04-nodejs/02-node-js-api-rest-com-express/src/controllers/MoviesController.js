const read = require('../utils/readFile');
const write = require('../utils/writeFIle')
const fs = require("fs")

class MovieController {

  async index(req, res) {
    const movies = await read()
  res.status(200).json(movies)
  }

  async show (req, res) {
    const { id } = req.params;
    
    const movies = await read()
    
    const unicMovie = movies.find((movie) => movie.id === Number(id))
    console.log(unicMovie);
    res.status(200).send(unicMovie)
  }

  async create (req, res) {
    const newFIlm = req.body;
    const movies = await read();
    console.log(movies);
    write(movies, newFIlm)
    res.status(201).json(newFIlm)
  }

  async delete (req, res) {
    try{
          const movies = await read()
          const { id } = req.params;
          const newMovies = movies.filter((movie) => movie.id !== Number(id))
          fs.writeFile('src/data/movies.json', JSON.stringify(newMovies))
          res.status(404).end()
        } catch (err) {
          res.status(404).send({message: err.message})
        }
  }
}

module.exports = MovieController
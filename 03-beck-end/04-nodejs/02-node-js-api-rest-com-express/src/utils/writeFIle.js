const fs = require("fs").promises

const write = async (movies,newFilm) => {
  await fs.writeFile('src/data/movies.json', JSON.stringify([...movies, {id: movies.length + 1, ...newFilm}]))
}

module.exports = write
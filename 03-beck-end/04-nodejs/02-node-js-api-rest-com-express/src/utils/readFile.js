const fs = require('fs').promises

const read = async () => {
  try {
    const movies = await fs.readFile('src/data/movies.json', 'utf-8');
    return JSON.parse(movies);
  } catch (err) {
    console.log('Nao consegui ler o arquivo')
  }
}

module.exports = read;
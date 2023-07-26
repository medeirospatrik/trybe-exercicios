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

read();

// app.get('/', (req, res) => {
//   res.send()
// })

app.listen('3000', () => console.log('estou rodando'))
const app = require('./app.js')

const routes = require('./routes')
// app.get('/movies/search', async (req, res) => {

//   try {

//     const { q } = req.query;

//     const movies = await read();

  

// if (q) {

//   const filteredMovies = movies.filter((element) => element.movie.includes(q));

//   return res.status(200).json(filteredMovies);

// }

// res.status(200).end();

//   } catch (err) {

//     res.status(500).send({ message: err.message });

//   }

// });

// app.get('/movies/:id', async (req, res) => {
//   
// })

app.use('/movies',routes)

// app.post('/movies', async (req, res) => {
//   
// })

// app.put('/movies/:id', async (req, res) => {
//   try{
//     const { id } = req.params;
//   const update = req.body;
//   const movies = await read();

//   const updateMovies = movies.map((movi) => {
//     if (movi.id === Number(id)) {
//       {
//         movi = {id: Number(id),...update}
//       }


//     }
//     return movi
//   })
//   fs.writeFile('src/data/movies.json', JSON.stringify(updateMovies))
//   res.status(220).send(updateMovies)
//   } catch(err) {console.log(err.message)}
  
// })

// app.delete('/movies/:id', async (req, res) => {
//   try{
//     const movies = await read()
//     const { id } = req.params;
//     const newMovies = movies.filter((movie) => movie.id !== Number(id))
//     fs.writeFile('src/data/movies.json', JSON.stringify(newMovies))
//     res.status(404).end()
//   } catch (err) {
//     console.log(err.message);
//   }
  
// })

// app.get('/movies/serach', async (req, res) => {
//   const { q } = req.query;
//   const movies = await read()
//   if(q) {
//     const includeQuery = movies.filter((movie) => {
//       movie.movie.includes(q)
//       res.send(includeQuery)
//     })
//   }
  
//   res.send([])
// })

app.listen('3000', () => console.log('estou rodando'))
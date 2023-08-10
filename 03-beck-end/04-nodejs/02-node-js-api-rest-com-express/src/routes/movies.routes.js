const { Router } = require('express');
const MovieController = require('../controllers/MoviesController');

const movieController = new MovieController


const moviesRoutes = Router();
const moviesId = Router();
const movieDelete = Router();

moviesRoutes.get("/", movieController.index)
moviesRoutes.post("/", movieController.create)
moviesId.get("/:id", movieController.show)
movieDelete.delete("/:id", movieController.delete)



module.exports = {moviesRoutes, moviesId, movieDelete}
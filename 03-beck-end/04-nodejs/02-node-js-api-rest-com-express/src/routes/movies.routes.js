const { Router } = require('express');
const MovieController = require('../controllers/MoviesController');

const movieController = new MovieController


const moviesRoutes = Router();
const moviesId = Router();

moviesRoutes.get("/", movieController.index)
moviesRoutes.post("/", movieController.create)
moviesId.get("/", movieController.show)



module.exports = {moviesRoutes, moviesId}
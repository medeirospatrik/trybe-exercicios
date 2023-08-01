const { Router } = require("express")

const {moviesRoutes, moviesId} = require("./movies.routes");

const routes = Router();

routes.use("/movies", moviesRoutes)
routes.use("/movies/:id", moviesId)

module.exports = routes;
const { Router } = require("express")

const {moviesRoutes, moviesId, movieDelete} = require("./movies.routes");

const routes = Router();

routes.use("/", moviesRoutes)
routes.use("/", moviesId)
routes.use("/", movieDelete)

module.exports = routes;
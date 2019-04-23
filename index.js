const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const server = express()
const dishesRoute = require("./routes/dishesRoute");
const recipesRoute = require("./routes/recipesRoute")

server.use(express.json());
server.use(helmet());
server.use("/api/dishes", dishesRoute);
server.use("/api/recipes", recipesRoute);

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`\n*** Server Running on Port ${port} ***\n`)
})
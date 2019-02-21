const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const server = express()

server.use(express.json());
server.use(helmet());


const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`\n*** Server Running on Port ${port} ***\n`)
})
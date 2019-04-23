const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development)

const getDishes = () => {
    return db("dishes")
}

const getDish = (id) => {
    return db("dishes")
    .where({id})
    .first();
    
}

const insert = (newDish) => {
    return db("dishes").insert(newDish)
}

module.exports = {
    getDishes,
    getDish,
    insert,
}
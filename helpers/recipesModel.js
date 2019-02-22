const knex = require("knex")
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

const getRecipes = () => {
    return db("recipes")
}

const getRecipe = (id) => {
    return db("recipes")
    .where({id})
    .first();
    
}

const insert = (newRecipe) => {
    return db("recipes").insert(newRecipe)
}

module.exports = {
    getRecipes,
    getRecipe,
    insert,
}
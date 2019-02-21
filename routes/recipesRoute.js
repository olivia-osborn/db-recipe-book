const express = require("express");
const router = express.Router();
const knex = require("knex")
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

router.get("/", async (req, res) => {
    try {
        recipes = await db("recipes")
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({error: "couldn't fetch recipes"})
    }
})

router.post("/", async (req, res) => {
    if (!req.body.name || !req.body.dishId) {
        res.status(400).json({error: 'please enter a name and a dishId!'})
      }
    try {
    const [id] = await db('recipes').insert(req.body);
    const dish = await db('recipes')
        .where({ id })
        .first();
    res.status(201).json({dish})
    } catch (error) {
    res.status(500).json({error: "recipe could not be added!"})
    }
})
module.exports = router;
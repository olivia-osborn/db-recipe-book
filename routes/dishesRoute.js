const express = require("express");
const router = express.Router();
const knex = require("knex")
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

router.get("/", async (req, res) => {
    try {
        dishes = await db("dishes")
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({error: "couldn't fetch dishes"})
    }
})

router.get("/:id", async (req, res) => {
    try {
        const dish = await db('dishes')
          .where({id: req.params.id})
          .first();
          if (!dish) {
            res.status(404).json({error: "dish with that ID could not be found"})
          } else {
            res.status(200).json(dish);
          }
      } catch (error) {
        res.status(500).json(error)
      }
  })

router.post("/", async (req, res) => {
    if (!req.body.name) {
        res.status(400).json({error: 'please enter a name!'})
      }
    try {
    const [id] = await db('dishes').insert(req.body);
    const dish = await db('dishes')
        .where({ id })
        .first();
    res.status(201).json({dish})
    } catch (error) {
    res.status(500).json({error: "dish could not be added!"})
    }
})

router.put("/:id", async (req, res) => {
    if (!req.body.name) {
        res.status(400).json({error: 'please enter a name!'})
    }
    try {
      const count = await db("dishes")
        .where({ id: req.params.id})
        .update(req.body)
        if (count > 0) {
            const cohort = await db('dishes')
            .where({id: req.params.id})
            .first();
    
            res.status(200).json(cohort)
        } else {
            res.status(404).json({error: "cohort not found"})
        }
    } catch (error) {
      res.status(500).json(error)
    }
})
module.exports = router;
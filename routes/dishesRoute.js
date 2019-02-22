const express = require("express");
const router = express.Router();

const Dishes = require("../helpers/dishesModel");


router.get("/", async (req, res) => {
    try {
        dishes = await Dishes.getDishes()
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({error: "couldn't fetch dishes"})
    }
})

router.get("/:id", async (req, res) => {
    try {
        const dish = await Dishes.getDish(req.params.id)
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
        const dish = await Dishes.insert(req.body)
        res.status(201).json({dish})
    } catch (error) {
        res.status(500).json({error: "dish could not be added!"})
    }
})

module.exports = router;
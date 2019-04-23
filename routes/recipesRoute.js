const express = require("express");
const router = express.Router();

const Recipes = require("../helpers/recipesModel");

router.get("/", async (req, res) => {
    try {
        recipes = await Recipes.getRecipes()
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({error: "couldn't fetch recipes"})
    }
})

router.get("/:id", async (req, res) => {
    try {
        const recipe = await Recipes.getRecipe(req.params.id)
          if (!recipe) {
            res.status(404).json({error: "recipe with that ID could not be found"})
          } else {
            res.status(200).json(recipe);
          }
      } catch (error) {
        res.status(500).json(error)
      }
  })

router.post("/", async (req, res) => {
    if (!req.body.name || !req.body.dishId) {
        res.status(400).json({error: 'please enter a name and a dishId!'})
      }
    try {
        const dish = await Recipes.insert(req.body)
        res.status(201).json({dish})
    } catch (error) {
        res.status(500).json({error: "recipe could not be added!"})
    }
})
module.exports = router;
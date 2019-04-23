
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipeIngredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipeIngredients').insert([
        {recipeId: 1, ingredientId: 1 },
        {recipeId: 1, ingredientId: 2},
        {recipeId: 2, ingredientId: 1},
        {recipeId: 2, ingredientId: 2},
        {recipeId: 3, ingredientId: 6},
        {recipeId: 3, ingredientId: 7},
        {recipeId: 3, ingredientId: 8},
        {recipeId: 3, ingredientId: 1},
        {recipeId: 4, ingredientId: 1},
        {recipeId: 4, ingredientId: 5},
        {recipeId: 4, ingredientId: 4},
        {recipeId: 4, ingredientId: 8},
      ]);
    });
};

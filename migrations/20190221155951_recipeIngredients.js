
exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipeIngredients", function(tbl) {
      tbl
        .integer("recipeId")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
    tbl
        .integer("ingredientId")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists(recipeIngredients)
};

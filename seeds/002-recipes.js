
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: "Italian pizza", dishId: "1"},
        {id: 2, name: "Chicago-style pizza", dishId: "1"},
        {id: 3, name: "Vegetarian tacos", dishId: "2"},
        {id: 4, name: "Spaghetti Bolognese", dishId: "3"}
      ]);
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: "tomatoes"},
        {id: 2, name: "mozzarella"},
        {id: 3, name: "beef"},
        {id: 4, name: "olive oil"},
        {id: 5, name: "spaghetti"},
        {id: 6, name: "rice"},
        {id: 7, name: "beans"},
        {id: 8, name: "salt"},
      ]);
    });
};

exports.seed = function(knex) {
  return knex('users')
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'user1', password: "password"},
        {id: 2, username: 'user2', password: "password"},
        {id: 3, username: 'user3', password: "password"},
        {id: 4, username: 'user4', password: "password"},
        {id: 5, username: 'user5', password: "password"},
        {id: 6, username: 'user6', password: "password"},
        {id: 7, username: 'user7', password: "password"},
        {id: 8, username: 'user8', password: "password"},
      ]);
    });
};
exports.seed = function (knex) {
  return knex("users")
    .insert([
      {username: "test1", password: "pass1", preferences: "Apple", recommendations: ""},
      {username: "test2", password: "test2", preferences: "Lemon", recommendations: ""},
    ]).then(() => console.log("\n== Seed data for users table added. ==\n"));
};

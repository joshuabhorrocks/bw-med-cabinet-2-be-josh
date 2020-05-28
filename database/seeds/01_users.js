exports.seed = function (knex) {
  return knex("users")
    .insert([
      {username: "test1", password: "pass1", email: "email@email.com", recommendations: null},
      {username: "test2", password: "test2", email: "email2@email.com", recommendations: null},
    ]).then(() => console.log("\n== Seed data for users table added. ==\n"));
};

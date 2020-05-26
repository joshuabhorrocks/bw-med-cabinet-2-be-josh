exports.seed = function (knex) {
  return knex("users")
    .insert([
      {username: "aTestUser", password: "aTestPassword"},
      {username: "test1", password: "pass1"},
      {username: "test2", password: "test2"},
    ]).then(() => console.log("\n== Seed data for users table added. ==\n"));
};

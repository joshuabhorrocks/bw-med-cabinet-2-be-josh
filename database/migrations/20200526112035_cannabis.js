exports.up = function(knex) {
    return knex.schema.createTable("users", users => {
    users.increments();
  
    users.string("username", 255).notNullable().unique();
    users.string("password", 255).notNullable();
    users.string("preferences", 255).notNullable();
    users.string("recommendations", 255);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users")
  };

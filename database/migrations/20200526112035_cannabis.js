exports.up = function(knex) {
    return knex.schema.createTable("users", users => {
    users.increments();
  
    users.string("username", 255).notNullable().unique();
    users.string("email", 255).notNullable().unique();
    users.string("password", 255).notNullable();
    users.string("recommendations", 255);
    })

    .createTable("effects", effects => {
      effects.increments();

      effects.string("effect", 255).notNullable();

      effects.integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
    })

    .createTable("flavors", flavors => {
      flavors.increments();
  
      flavors.string("flavor", 255).notNullable();
  
      flavors.integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
    })
};

  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("flavors")
    .dropTableIfExists("effects")
    .dropTableIfExists("users")
  };

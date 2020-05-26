exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
    users.increments();
  
    users.string('username', 255).notNullable().unique();
      users.string('password', 255).notNullable();
    })
    .createTable("strains", strains => {
        strains.increments();
            
        strains.string("name", 255).notNullable().unique();
        strains.string("description", 255).notNullable().unique();
        strains.string("flavors", 255).notNullable();
        strains.string("effects", 255).notNullable();
    })
    .createTable("user_strains", user_strains => {
        user_strains.increments();

        user_strains.integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")

        user_strains.integer("strain_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("strains")
        .onUpdate("CASCADE")
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_strains')
    .dropTableIfExists("strains")
    .dropTableIfExists("users");
  };

const db = require("../database/dbConfig");

module.exports = {
  add,
  update,
  remove,
  find,
  findBy,
  findById,
};

function find() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");

  return findById(id);
}

function findById(id) {
  return db("users").where({id}).first();
}

function update(id, updates) {
  return db('users')
    .where('id', id)
    .update(updates)
    .then(user => {
      return findById(id)
    });
}

function remove(id) {
  return db('users').where('id', id).del();
}

const db = require("../database/dbConfig");
const axios = require("axios");

module.exports = {
  getRecs,
  add,
  update,
  remove,
  find,
  findBy,
  findById,
};

async function getRecs(preferences) {
  try {
    return axios.post("https://weed-data-bw.herokuapp.com/dummy_model", preferences)
  } catch (error) {
    console.log(error)
  }
}

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

function update(id, changes) {
  return db('actions')
    .where('id', id)
    .update(changes)
    .then((count) => (count > 0 ? get(id) : null));
}

function remove(id) {
  return db('actions').where('id', id).del();
}

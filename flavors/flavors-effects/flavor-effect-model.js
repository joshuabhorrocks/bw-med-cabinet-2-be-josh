const db = require("../../database/dbConfig");

module.exports = {
  findFlavById,
  getFlav,
  addFlav,
  updateFlav,
  removeFlav,
  getEff,
  addEff,
  updateEff,
  removeEff,
  findEffById
};

function findFlavById(id) {
    return db("flavors").where({id}).first();
}

function getFlav(id) {
    return findFlavById(id)
}

async function addFlav(flavor) {
  const [id] = await db("flavors").insert(flavor, "flavors.user_id");

  return findFlavById(id);
}

function updateFlav(updates, id) {
  return db('flavors')
    .where('id', id)
    .update(updates)
    .then(flavor => {
      return db("flavors").where(id).first();
    });
}

function removeFlav(id) {
  return db('flavors').where('id', id).del("flavors.flavors");
}

// Effects

function findEffById(id) {
    return db("effects").where({id}).first();
}

function getEff(id) {
    return findEffById(id)
}

async function addEff(effect) {
  const [id] = await db("effects").insert(effect, "id");

  return findEffById(id);
}

function updateEff(id, changes) {
  return db('effects')
    .where('id', id)
    .update(changes)
    .then(effect => {
      return findById(id)
    });
}

function removeEff(id) {
  return db('effects').where('id', id).del();
}
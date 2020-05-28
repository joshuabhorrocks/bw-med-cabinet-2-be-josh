const db = require("../database/dbConfig");
const axios = require("axios");

module.exports = {
    findFlavById,
    findEffById,
    mergeFlavEffs,
    getRecs,
};

function findFlavById(id) {
    return db("flavors").where({id}).first();
}

function findEffById(id) {
    return db("effects").where({id}).first();
}

function mergeFlavEffs(id) {
    return db("flavors as f")
    .join("effects as e", "e.user_id", "=", "f.user_id")
    .select("e.effects", "f.flavors")
    .where("f.user_id", "=", id)
}

async function getRecs(preferences) {
    try {
      return axios.post("https://weed-data-bw.herokuapp.com/model", preferences)
    } catch (error) {
      console.log(error)
    }
  }
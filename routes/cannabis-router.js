const express = require('express');
const axios = require("axios");

const Cannabis = require('./cannabis-model');

const router = express.Router();

router.get("/", (req, res) => {
  axios.get("https://weed-data-bw.herokuapp.com/strains")
  .then(response => {
    // console.log(response)
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(500).json({message: "Error fetching strains", error: err});
  });
});

module.exports = router;
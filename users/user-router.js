const express = require('express');
const axios = require("axios");

const Users = require('../users/user-model');

const router = express.Router();

router.post("/recommendations", (req, res) => {
    const preferenceData = req.body;
    axios.post("https://weed-data-bw.herokuapp.com/web_layout_strains", preferenceData)
    .then(response => {
        console.log(response)
        db("users as u").insert(response).select("u.recommendations").where("id", "=", "u.id")
        res.status(200).json(response)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "Error fetching strains", error: err});
    });
})

// router.post('/', (req, res) => {
//     const preferenceData = req.body;
  
//     DB.newProject(preferenceData)
//     .then(recommendations => {
//       res.status(201).json(recommendations);
//     })
//     .catch (err => {
//       console.log(err)  
//       res.status(500).json({ message: 'Failed to create new project' });
//     });
// });

module.exports = router;

;
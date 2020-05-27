const express = require('express');
const axios = require("axios");

const Users = require('../users/user-model');

const router = express.Router();

router.get("/:id", (req, res) => {
    Users.findById(req.params.id)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "Error retrieving the user"})
    });
});

router.post("/recommendations", (req, res) => {
    const preferences = req.body;

    Users.getRecs(preferences)
    .then(recs => {
        res.status(200).json(recs);
    })
})

router.put("/:id", (req, res) => {
    Users.findById(req.params.id)
    .then(user => {

    })
})

module.exports = router;
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

router.post("/:id/recommendations", (req, res) => {
    const preferences = req.body;

    Users.getRecs(preferences)
    .then(recs => {
        res.status(200).json(recs);
    })
    .catch(error => {
        res.status(500).json(error)
    })
});

router.put("/:id", (req, res) => {
    const updates = req.body;
    Users.update(req.params.id, updates)
    .then(user => {
        if (updated) {
            res.status(200).json({message: "User was successfully updated", updates})
        } else {
            res.status(400).json({error: "Id not found"})
        }
    })
    .catch(error => {
        res.status(500).json(error.message)
    })
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Users.remove(id)
    .then(deleted => {
        res.status(200).json({message: "User was successfully deleted"})
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "Failed to delete user"})
    })
})

module.exports = router;
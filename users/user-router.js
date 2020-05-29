const express = require('express');

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

router.put("/:id", (req, res) => {
    const updates = req.body;
    const id = req.params.id;

    Users.update(id, updates)
    .then(user => {
        res.status(200).json({message: "User was successfully updated", user})
    })
    .catch(error => {
        res.status(500).json({message: "There was a problem updating"})
    });
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
});

module.exports = router;
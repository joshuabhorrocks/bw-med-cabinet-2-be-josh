const express = require('express');

const Flavors = require('../flavors-effects/flavor-effect-model');

const router = express.Router();

router.get("/:id/flavors", (req, res) => {
    Flavors.findFlavById(req.params.id)
    .then(flavors => {
        // console.log(flavors)
        res.status(200).json(flavors)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "Error retrieving the flavors"})
    });
});

router.post("/:id/flavors", (req, res) => {
    const newFlav = req.body;

    Flavors.addFlav(newFlav)
    .then(flavors => {
        // console.log(flavors)
        res.status(200).json({message: "Added flavor(s) successfully"});
    })
    .catch(error => {
        console.log(error)
        res.status(500).json(error)
    })
});

router.put("/:id/flavors", (req, res) => {
    const updates = req.body;
    const id = req.params.id;

    Flavors.updateFlav(updates, id)
    .then(user => {
        if (updated) {
            res.status(200).json({message: "Flavors were successfully updated", user})
        } else {
            res.status(400).json({error: "Id not found"})
        }
    })
    .catch(error => {
        res.status(500).json({message: "Failed to update flavors"})
    })
});

router.delete("/:id/flavors", (req, res) => {
    const id = req.params.id;
    Flavors.removeFlav(id)
    .then(deleted => {
        res.status(200).json({message: "All flavors were successfully deleted"})
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "Failed to delete flavors"})
    })
})

module.exports = router;
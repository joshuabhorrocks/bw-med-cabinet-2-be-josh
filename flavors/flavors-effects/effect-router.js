const express = require('express');

const Effects = require('../flavors-effects/flavor-effect-model');

const router = express.Router();

router.get("/:id/effects", (req, res) => {
    Effects.findEffById(req.params.id)
    .then(effects => {
        res.status(200).json(effects)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "Error retrieving the effects"})
    });
});

router.post("/:id/effects", (req, res) => {
    const effects = req.body;

    Effects.addEff(effects)
    .then(effs => {
        res.status(200).json(effs);
    })
    .catch(error => {
        console.log(error)
        res.status(500).json(error)
    })
});

router.put("/:id/effects", (req, res) => {
    const updates = req.body;
    const id = req.params.id;

    Effects.updateEff(id, updates)
    .then(user => {
        if (updated) {
            res.status(200).json({message: "Effects were successfully updated", user})
        } else {
            res.status(400).json({error: "Id not found"})
        }
    })
    .catch(error => {
        res.status(500).json({message: "Failed to update effects"})
    })
});

router.delete("/:id/effects", (req, res) => {
    const id = req.params.id;
    Effects.removeEff(id)
    .then(deleted => {
        res.status(200).json({message: "Effects were successfully deleted"})
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "Failed to delete effects"})
    })
})

module.exports = router;
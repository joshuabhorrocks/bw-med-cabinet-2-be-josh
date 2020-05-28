const express = require('express');

const Flask = require('./flask-model');

const router = express.Router();

router.post("/:id/recommendations", (req, res) => {
    const id = req.params.id;

    Flask.mergeFlavEffs(id)
    .then(response => {
        let preferences = response
        console.log(response)

        Flask.getRecs(preferences, id)
        .then(recommendations => {
            res.status(200).json(recommendations);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })
    })
});

// router.post("/:id/recommendations", (req, res) => {
//     const preferences = req.body;
//     const id = req.params.id;

//     Flask.getRecs(preferences, id)
//     .then(recommendations => {
//         res.status(200).json(recommendations);
//     })
//     .catch(error => {
//         console.log(error)
//         res.status(500).json(error)
//     })
// });

module.exports = router;
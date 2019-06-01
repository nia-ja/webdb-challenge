const express = require('express');

const Actions  = require('./actions-model.js');

const router = express.Router();

// POST for the /api/actions
// returns an id of the new action
router.post('/', async (req, res) => {
    try {
        if (req.body.description === "" || req.body.notes === "") {
            res.status(400).json({ message: "Please provide description and notes for the action." });
        } else {
            const action = await Actions.addAction(req.body);
            res.status(201).json(action);
        }
    } catch (error) {
        res.status(500).json({ message: "There was an error while saving the action to the database", error: error });
    }
})

module.exports = router;
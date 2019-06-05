const express = require('express');

const Actions  = require('./actions-model.js');

const router = express.Router();

// GET for /api/actions
router.get('/', async (req, res) => {
    try {
        const actions = await Actions.getActions();
        res.status(200).json(actions);
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving actions',
            error: error
        });
    }
})

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

// GET BY ID for the /api/actions
// returns number of deleted entries
router.get('/:id', async (req, res) => {
    try {
        const action = await Actions.getAction(req.params.id);
        if (action) {
            res.status(200).json(action);
        } else {
            res.status(404).json({ message: "The action with the specified ID does not exist." })
        }
    } catch (error) {
        res.status(500).json({ message: "The action information could not be retrieved", error: error });
    }
})

module.exports = router;
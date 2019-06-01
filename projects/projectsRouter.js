const express = require('express');

const Projects  = require('./projects-model.js');

const router = express.Router();

// POST for /api/projects
// returns an id of the new project
router.post('/', async (req, res) => {
    try {
        if (req.body.name === "" || req.body.description === "") {
            res.status(400).json({ message: "Please provide name and description for the project." });
        } else {
            const project = await Projects.addProject(req.body);
            res.status(201).json(project);
        }
    } catch (error) {
        res.status(500).json({ message: "There was an error while saving the project to the database", error: error });
    }
})

// GET BY ID for the /api/projects
router.get('/:id', async (req, res) => {
    try {
        const project = await Projects.getProject(req.params.id);
        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({ message: "The project with the specified ID does not exist." })
        }
    } catch (error) {
        res.status(500).json({ message: "The project information could not be retrieved", error: error });
    }
})

module.exports = router;
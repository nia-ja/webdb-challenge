const express = require('express');
const helmet = require('helmet');

const ProjectsRouter = require('./projects/projectsRouter.js');
const ActionsRouter = require('./actions/actionsRouter.js');

const server = express();
server.use(express.json());
server.use(helmet());

server.use('/api/projects', ProjectsRouter);
server.use('/api/actions', ActionsRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Projects & Actions API!</h2>`)
  });

module.exports = server;
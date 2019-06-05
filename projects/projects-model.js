const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getProjects,
    addProject,
    getProject,
    deleteProject
};

// `getProjects()` returns all projects from the db
function getProjects() {
    return db('projects');
}

// `addProject(project)` adds the project to the database and return the `id` of the new project.
function addProject(project) {
    return db('projects')
      .insert(project)
      .then(ids => ({id: ids[0]}));
}

// `getProject(id)` returns the project with the provided `id`. The project includes all actions for this project
async function getProject(id) {
    const projects =  await db.select('*')
        .from('projects as p')
        .where('p.id', Number(id));
    const actions = await db.select('a.id', 'a.description', 'a.notes', 'a.completed')
        .from('projects as p')
        .join('actions as a', 'p.id', 'a.project_id')
        .where('p.id', Number(id));
    if(projects.length !== 0) {
        const result = {...projects[0], actions: actions};
        return result;
    } else {
        return projects[0];
    }
}

// `deleteProject(id)` returns number of deleted entries
async function deleteProject(id) {
    const count = await db.select('*')
        .from('projects')
        .where({id: id})
        .del()
    return count;
}
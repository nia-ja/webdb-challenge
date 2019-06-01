const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    addAction
};

// `addAction(action)` adds the action to the database and return the `id` of the new action.
function addAction(action) {
    return db('actions')
      .insert(action)
      .then(ids => ({id: ids[0]}));
}
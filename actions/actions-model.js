const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getActions,
    addAction,
    getAction
};

// `getActions()` returns all actions from the db
function getActions() {
    return db('actions');
}

// `addAction(action)` adds the action to the database and return the `id` of the new action.
function addAction(action) {
    return db('actions')
      .insert(action)
      .then(ids => ({id: ids[0]}));
}

//`getAction(id)` returns the action with the provided `id`. The action includes all contexts for this action

async function getAction(id) {
    const actions =  await db.select('*')
        .from('actions as a')
        .where('a.id', Number(id));
    const contexts = await db.select('c.id', 'c.name')
        .from('actions_contexts as ac')
        .join('contexts as c', 'c.id', 'ac.context_id')
        .where('ac.action_id', Number(id));
    if(actions.length !== 0) {
        const result = {...actions[0], contexts: contexts};
        return result;
    } else {
        return actions[0];
    }
}
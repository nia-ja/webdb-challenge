exports.seed = async function(knex) {
  await knex('actions_contexts').insert([
        {id: 1, action_id: 1, context_id: 1},
        {id: 2, action_id: 1, context_id: 4},
        {id: 3, action_id: 6, context_id: 3},
        {id: 4, action_id: 5, context_id: 2},
        {id: 5, action_id: 4, context_id: 4},
        {id: 6, action_id: 2, context_id: 4},
        {id: 7, action_id: 2, context_id: 2},
        {id: 8, action_id: 3, context_id: 5},
        {id: 9, action_id: 3, context_id: 2},
        {id: 10, action_id: 1, context_id: 2}
  ]);
};
exports.seed = async function(knex) {
  await knex('contexts').insert([
        {id: 1, name: 'home'},
        {id: 2, name: 'computer'},
        {id: 3, name: 'work'},
        {id: 4, name: 'online'},
        {id: 5, name: 'park'}
  ]);
};
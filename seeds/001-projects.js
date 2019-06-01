exports.seed = async function(knex) {
  await knex('projects').insert([
        {id: 1, name: 'Complete Node.js and Express Challenge', description: 'Build and Awesome API Using Node.js and Express to Manage Projects and Actions GTD Style!'},
        {id: 2, name: 'Complete TK lessons for SQL Sprint', description: 'Don\'t forget about all kinds of Joins'},
        {id: 3, name: 'Some project name here', description: 'Some super clever description for the project here'}
  ]);
};
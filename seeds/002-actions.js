exports.seed = async function(knex) {
  await knex('actions').insert([
    {id: 1, description: 'Fork and Clone Repository', notes: 'Repo URL: https://github.com/LambdaSchool/Sprint-Challenge-Node-Express', project_id: 1},
    {id: 2, description: 'Install Dependencies', notes: 'Remember to cd into the folder where the Project was cloned', project_id: 1},
    {id: 3, description: 'Design and Build API Endpoints', notes: 'This is where the magic happens!', project_id: 1},
    {id: 4, description: 'Install SQLite Studio', notes: 'URL: https://sqlitestudio.pl/index.rvt', project_id: 2},
    {id: 5, description: 'Watch all the videos', notes: 'Don\'t forget about text part too!', project_id: 2},
    {id: 6, description: 'some description of the action here', notes: 'No notes for this action', project_id: 3}
  ]);
};
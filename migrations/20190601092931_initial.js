exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments('id');
    tbl.string('name').notNullable();
    tbl.string('description').notNullable();
    tbl.boolean('completed').defaultTo(false);
  })

  .createTable('actions', tbl => {
    tbl.increments('id');
    tbl.string('description').notNullable();
    tbl.string('notes').notNullable();
    tbl.boolean('completed').defaultTo(false);
    tbl
            .integer('project_id')
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
    .dropTableIfExists('projects')
};
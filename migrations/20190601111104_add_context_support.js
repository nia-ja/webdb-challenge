exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', tbl => {
    tbl.increments('id');
    tbl.string('name').notNullable().unique();
  })
  .createTable('actions_contexts', tbl => {
    tbl.increments('id');
    tbl
        .integer('action_id')
        .references('id')
        .inTable('actions')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable();
    tbl
        .integer('context_id')
        .references('id')
        .inTable('contexts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions_contexts')
  .dropTableIfExists('contexts')
};
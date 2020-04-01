exports.up = knex => knex.schema.createTable('car_owners', table => {
  table.increments();
  table.string('first_name').notNullable();
  table.string('last_name').notNullable();
  table.string('email').notNullable();
  table.string('county').notNullable();
  table.string('car_model').notNullable();
  table.integer('car_model_year').notNullable();
  table.string('car_color').notNullable();
  table.string('gender').notNullable();
  table.string('job_title').notNullable();
  table.text('bio').notNullable();
});

exports.down = knex => knex.schema.dropTableIfExists('car_owners');

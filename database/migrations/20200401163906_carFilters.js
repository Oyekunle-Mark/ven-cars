exports.up = knex =>
  knex.schema.createTable('car_filters', table => {
    table.increments();
    table.integer('start_year').notNullable();
    table.integer('end_year').notNullable();
    table.string('gender').notNullable();
    table.text('countries').notNullable();
    table.text('colors').notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists('car_filters');

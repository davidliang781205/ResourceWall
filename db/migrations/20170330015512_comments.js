
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.integer('user_id').unsigned();
    table.foreign('user_id')
      .references('users.id')
      .onDelete('CASCADE');
    table.integer('url_id').unsigned();
    table.foreign('url_id')
      .references('urls.id')
      .onDelete('CASCADE');
    table.text('content');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("comments");
};

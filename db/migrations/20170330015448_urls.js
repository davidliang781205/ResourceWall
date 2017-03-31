
exports.up = function(knex, Promise) {
  return knex.schema.createTable("urls", (table) => {
    table.increments();
    table.integer('user_id').unsigned();
    table.foreign('user_id')
      .references('users.id')
      .onDelete('CASCADE');
    table.text('description');
    table.string('title', 60).notNull();
    table.string('genre', 60);
    table.string('media_type', 60);
    table.text('original_url').notNull();
    table.text('thumbnail_url');
    table.timestamp('created_at');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("urls");
};

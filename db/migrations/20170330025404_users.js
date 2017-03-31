exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('name');
    table.string('email').unique();
    table.string('password');
    table.timestamp('created_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('email');
    table.dropColumn('password');
    table.dropColumn('created_at');
    table.string('name');
  });
};

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({email: 'Bob@mar.ca', password: 'marBob'}),
        knex('users').insert({email: 'John@tran.com', password: 'tranJohn'}),
        knex('users').insert({email: 'Mel@gib.org', password: 'gibMel'})
      ]);
    });
};

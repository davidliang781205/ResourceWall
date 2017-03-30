exports.seed = function(knex, Promise) {
  return knex('likes').del()
    .then(function () {
      return Promise.all([
        knex('likes').insert({user_id: '1', url_id: '1'}),
        knex('likes').insert({user_id: '2', url_id: '3'}),
        knex('likes').insert({user_id: '3', url_id: '2'})
      ]);
    });
};

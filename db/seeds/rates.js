exports.seed = function(knex, Promise) {
  return knex('rates').del()
    .then(function () {
      return Promise.all([
        knex('rates').insert({user_id: '1', url_id: '1', rating: '1'}),
        knex('rates').insert({user_id: '2', url_id: '3', rating: '2'}),
        knex('rates').insert({user_id: '1', url_id: '2', rating: '4'})
      ]);
    });
};

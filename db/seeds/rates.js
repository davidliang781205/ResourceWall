exports.seed = function(knex, Promise) {
  return knex('rates').del()
    .then(function () {
      return Promise.all([
        knex('rates').insert({user_id: '1', url_id: '1', raiting: '0'}),
        knex('rates').insert({user_id: '2', url_id: '3', raiting: '2'}),
        knex('rates').insert({user_id: '1', url_id: '2', raiting: '4'})
      ]);
    });
};

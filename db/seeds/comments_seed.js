exports.seed = function(knex, Promise) {
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        knex('comments').insert({user_id: '2', url_id: '3', content: 'this is fnny!'}),
        knex('comments').insert({user_id: '1', url_id: '1', content: 'haha this is too funny'}),
        knex('comments').insert({user_id: '2', url_id: '2', content: 'I dont even know why im here atm..'}),
        knex('comments').insert({user_id: '2', url_id: '7', content: 'hahaha this is awesome'}),
        knex('comments').insert({user_id: '3', url_id: '8', content: 'I wanna watch it!'})
      ]);
    });
};

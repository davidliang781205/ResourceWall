exports.seed = function(knex, Promise) {
  return knex('urls').del()
    .then(function () {
      return Promise.all([
        knex('urls').insert({user_id: '2', description: 'this is mine!', title: 'My CAT', genre: 'action', media_type: 'pic', original_url: 'https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg'}),
        knex('urls').insert({user_id: '3', description: ' ', title: 'prank', genre: 'horror', media_type: 'vid', original_url: 'https://www.youtube.com/watch?v=waAqEjjssxU'}),
        knex('urls').insert({user_id: '1', description: '??', title: 'cooking fish', genre: 'documentury', media_type: '.txt', original_url: 'http://www.seafoodwatch.org/'})
      ]);
    });
};

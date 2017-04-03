exports.seed = function(knex, Promise) {
  return knex('urls').del()
    .then(function () {
      return Promise.all([
        knex('urls').insert({user_id: '2', description: 'Funny Cats Compilation Videos Part 1', title: 'Funny Cats', genre: 'funny', media_type: '.avi', original_url: 'https://www.youtube.com/watch?v=tntOCGkgt98'}),
        knex('urls').insert({user_id: '3', description: 'Most beautiful pictures of nature on Pexels.', title: 'Nature Image', genre: 'documentary', media_type: '.jpg', original_url: 'https://static.pexels.com/photos/20974/pexels-photo.jpg'}),
        knex('urls').insert({user_id: '1', description: 'The biggest lizards on Earth - Komodo Dragons - stage brutal fights over territory in Indonesia.', title: 'Reptile Warfare', genre: 'documentary', media_type: '.jpg', original_url: 'http://www.nature.com/polopoly_fs/7.32498.1449834694!/image/Komodo-dragons.jpg_gen/derivatives/landscape_630/Komodo-dragons.jpg'}),
        knex('urls').insert({user_id: '3', description: 'Summing up why Hammings error correcting codes are regarded as Perfect - Professor Brailsford explains.', title: 'The Perfect Code - Computerphile', genre: 'documentary', media_type: '.avi', original_url: 'https://www.youtube.com/watch?v=WPoQfKQlOjg'}),
        knex('urls').insert({user_id: '2', description: 'Horror movie staring Laura Wiggings, Aimee Teegarden and Johnny Galecki.', title: 'Rings TV Store Prank', genre: 'horror', media_type: '.avi', original_url: 'https://www.youtube.com/watch?v=7qsITlhXPF8'}),
        knex('urls').insert({user_id: '2', description: 'The youngest son of an alcoholic former boxer returns home, where he has trained by his father for competition in a mixed martial arts tournament - a path that puts the fighter on a collision course with his estranged, older brother.', title: 'Warrior 2011', genre: 'action', media_type: '.avi', original_url: 'https://www.youtube.com/watch?v=9rQIK0ADXjM'}),
        knex('urls').insert({user_id: '2', description: 'I do not know whether nice people tend to grow roses or growing roses makes people nice.', title: 'funny flower with glasses', genre: 'funny', media_type: '.pic', original_url: 'https://usercontent1.hubstatic.com/4640370_f520.jpg'})
      ]);
    });
};

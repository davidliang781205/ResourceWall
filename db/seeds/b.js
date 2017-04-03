exports.seed = function(knex, Promise) {
  return knex('urls').del()
    .then(function () {
      return Promise.all([
        knex('urls').insert({user_id: '2', description: 'Funny Cats Compilation Videos Part 1', title: 'Funny Cats', genre: 'Comedy', media_type: '.avi', original_url: 'youtube.com/watch?v=tntOCGkgt98'}),
        knex('urls').insert({user_id: '3', description: 'Most beautiful pictures of nature on Pexels.', title: 'Nature Image', genre: 'Documentary', media_type: '.jpg', original_url: 'static.pexels.com/photos/20974/pexels-photo.jpg'}),
        knex('urls').insert({user_id: '1', description: 'The biggest lizards on Earth - Komodo Dragons - stage brutal fights over territory in Indonesia.', title: 'Reptile Warfare', genre: 'Documentary', media_type: '.jpg', original_url: 'nature.com/polopoly_fs/7.32498.1449834694!/image/Komodo-dragons.jpg_gen/derivatives/landscape_630/Komodo-dragons.jpg'}),
        knex('urls').insert({user_id: '3', description: 'Summing up why Hammings error correcting codes are regarded as Perfect - Professor Brailsford explains.', title: 'The Perfect Code - Computerphile', genre: 'Documentary', media_type: '.avi', original_url: 'youtube.com/watch?v=WPoQfKQlOjg'}),
        knex('urls').insert({user_id: '2', description: 'Horror movie staring Laura Wiggings, Aimee Teegarden and Johnny Galecki.', title: 'Rings TV Store Prank', genre: 'Horror', media_type: '.avi', original_url: 'youtube.com/watch?v=7qsITlhXPF8'}),
        knex('urls').insert({user_id: '2', description: 'The youngest son of an alcoholic former boxer returns home, where he has trained by his father for competition in a mixed martial arts tournament - a path that puts the fighter on a collision course with his estranged, older brother.', title: 'Warrior 2011', genre: 'Action', media_type: '.avi', original_url: 'youtube.com/watch?v=9rQIK0ADXjM'}),
        knex('urls').insert({user_id: '2', description: 'I do not know whether nice people tend to grow roses or growing roses makes people nice.', title: 'funny flower with glasses', genre: 'Comedy', media_type: '.pic', original_url: 'usercontent1.hubstatic.com/4640370_f520.jpg'}),
        knex('urls').insert({user_id: '3', description: 'An adaptation of the fairy tale about a monstrous-looking prince and a young woman who fall in love.', title: 'Beauty and the Beast', genre: 'Romance', media_type: '.avi', original_url: 'youtube.com/watch?v=OvW_L8sTu5E'}),
        knex('urls').insert({user_id: '3', description: 'When you are in love and need to count your bullets!', title: 'Deadpool', genre: 'Action', media_type: '.avi', original_url: 'youtube.com/watch?v=tLmStxxzhkI'}),
        knex('urls').insert({user_id: '1', description: 'A dad convinces his friends to start an illegal casino in his basement after he and his wife spend their daughter\'s college fund.', title: 'The House Trailer', genre: 'Comedy', media_type: '.avi', original_url: 'youtube.com/watch?v=FK5OJse8haA'}),
        knex('urls').insert({user_id: '1', description: 'The bombing of the Alfred P. Murrah Federal Building in Oklahoma City in April 1995.', title: 'Oklahoma City Trailer', genre: 'Documentary', media_type: '.avi', original_url: 'youtube.com/watch?v=bcJ7P-nxQGo'}),
        knex('urls').insert({user_id: '2', description: 'A woman discovers that severe catastrophic events are somehow connected to the mental breakdown from which she\'s suffering.', title: 'Colossal', genre: 'Sci-Fi', media_type: '.avi', original_url: 'youtube.com/watch?v=xgN-5lZiohQ'})
      ]);
    });
};

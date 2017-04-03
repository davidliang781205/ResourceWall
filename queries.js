"use strict";

module.exports = function makeDataHelpers(knex) {
  return {
    getLikesRates: function(cb) {

      knex
        .select('urls.id',
          'urls.title',
          'urls.description',
          'urls.genre',
          'urls.media_type',
          'urls.original_url',
          'urls.thumbnail_url',
          'users.email'
        )
        .count('likes.url_id')
        .avg('rates.rating')
        .from('urls')
        .join('users', 'users.id', '=', 'urls.user_id')
        .leftJoin('likes', 'likes.url_id', '=', 'urls.id')
        .leftJoin('rates', 'rates.url_id', '=', 'urls.user_id')
        .groupBy('urls.id')
        .groupBy('urls.description')
        .groupBy('urls.genre')
        .groupBy('urls.media_type')
        .groupBy('urls.original_url')
        .groupBy('urls.thumbnail_url')
        .groupBy('users.email')
        .then((rows) => {
          cb(rows);
        })
    },
    getComments: function(cb) {
      knex
        .select('urls.id',
          'comments.content',
          'users.email'
        )
        .from('urls')
        .leftJoin('comments', 'comments.url_id', '=', 'urls.id')
        .join('users', 'users.id', '=', 'comments.user_id')
        .then((rows) => {
          cb(rows);
        })
    }
  };
};
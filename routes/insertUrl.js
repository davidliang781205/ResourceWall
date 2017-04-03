"use strict";

const express = require('express');
const router = express.Router();
const validator = require('validator');
const request = require('request');
const fs = require('fs');

module.exports = (knex) => {
  function getThumbnail(url, id) {
    const BASE_URL = 'https://api.thumbnail.ws/api/aba7ddeea00516301ccf735cb83cfb582bb8a1c9f763/thumbnail/get?url=http%3A%2F%2F' + url + '%2F&width=450';

    request.get(url)
      .on('error', function(err) {
        throw err;
      })
      .on('response', function(response) {})
      .on('end', (end) => console.log('Download completed!'))
      .pipe(fs.createWriteStream('./public/img/' + id + '.jpg'))
  }

  router.post("/", (req, res) => {

    let validateUrl = validator.isURL(req.body.origURL);
    if (validateUrl) {
      let r = req.body;
      let genreArr = combingGenres(req.body);
      let validateUrl = validator.isURL(req.body.origURL);

      knex.insert({
          user_id: Number(req.session.user_id),
          description: r.description,
          title: r.title,
          genre: genreArr,
          media_type: r.media_type,
          original_url: r.origURL,
          created_at: new Date()
        })
        .into("urls")
        .returning('id')
        .then((id) => {
          console.log('updated');
          getThumbnail(r.origURL, id);
          return knex('urls')
            .where('id', id)
            .update({
              thumbnail_url: id + '.jpg'
            })
        }).then(() => {
          res.redirect("/");
        })
        .catch((err) => {
          console.log(err);
          res.redirect("/");
        });
    } else {
      req.flash("error", "Please use a valid URL");
      res.redirect("/");
    }
  });
  return router;
}


function combingGenres(bodySessionObj) {
  let myStr = []
  for (let el in bodySessionObj) {
    if (el !== 'origURL' && el !== 'title' && el !== 'description') {
      myStr.push(el);
    }
  }
  let arrGenre = myStr.map(function(el) {
    return el;
  }).join(', ');

  return arrGenre;
}
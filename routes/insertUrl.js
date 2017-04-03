"use strict";

const express = require('express');
const router = express.Router();
const validator = require('validator');
const request = require('request');
const fs = require('fs');

module.exports = (knex) => {
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
        .then(() => {
          res.redirect("/");
        })
        .catch((err) => {
          console.log(err);
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

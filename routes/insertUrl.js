"use strict";

const express = require('express');
const router = express.Router();
const validator = require('validator');

module.exports = (knex) => {
  console.log("this is right inside funct");

  function insertURL(userid, descr, title, genre, mediaType, origURL, thumbURL, callback) {
    knex.insert({
        user_id: userid,
        description: descr,
        title: title,
        genre: genre,
        media_type: mediaType,
        original_url: origURL,
        thumbnail_url: thumbURL,
        created_at: new Date()
      })
      .into("urls")
      .returning('id')
      .asCallback(function(err, ids) {
        if (err) {
          console.error(err);
          callback(err);
        }
        console.log(ids);
        console.log("in insertUser knex function");
        callback(null, ids);
      });
  }

  router.post("/", (req, res) => {

    console.log("this is the req.body: ", req.body);
    let validateUrl = validator.isURL(req.body.origURL);
    if (validateUrl) {
      let r = req.body;
      let genreArr = combingGenres(req.body);
      insertURL(Number(req.session.user_id), r.description, r.title,
        genreArr, r.media_type, r.origURL,
        r.thumbnail_url, (err, userId) => {
          if (err) {
            console.error("ERROR:", err);
            return res.status(400).end();
          } else {
            console.log("OK, result is:", userId);
            res.redirect("/");
          }
        });
    } else {
      req.flash("error", "Please use a valid URL");
      res.redirect("/");
      console.log("url didnt pass validation so went throught here");
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

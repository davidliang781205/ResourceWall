"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.post("/", (req, res) => {
    let date = new Date();
    knex.insert({user_id: req.session.user_id, url_id: req.body.url_id, rating: req.body.rating, created_at: date})
      .into("rates")
      .asCallback(function(err) {
        if (err) {
          console.log(err);
        }
        // res.redirect('/');
      });
  });
  return router;
}

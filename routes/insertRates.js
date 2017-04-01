"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.post("/", (req, res) => {
    knex.insert({user_id: req.session.user_id, url_id: req.body.url_id, raiting: req.body.rating})
      .into("rates")
      .asCallback(function(err) {
        if (err) {
          console.log(err);
        }
        res.redirect('/');
      });
  });
  return router;
}

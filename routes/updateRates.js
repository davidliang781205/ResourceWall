"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.post("/", (req, res) => {
    let r = req.body;
    let date = new Date();
    knex("rates")
      .where('user_id', '=', req.session.user_id, 'AND',
      'url_id', '=', r.urlid, 'AND', 'rating', '=', r.rate)
      .del()
      .asCallback(function(err) {
        if (err) {
          console.log(err);
        }
        // res.redirect('/');
      });
  });
  return router;
}

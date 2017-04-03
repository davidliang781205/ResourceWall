"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.post("/", (req, res) => {
    knex.insert({
      user_id: req.session.user_id,
      url_id: Number(req.body.urlid),
      rating: req.body.rating,
      created_at: new Date()
    })

    .into("rates")
      .returning('url_id')
      .then((id) => {
        return knex
          .avg('rating')
          .from('rates')
          .where('rates.url_id', Number(id))
      })
      .then((value) => {
        res.json(value);
      })
      .catch((err) => {
        console.log(err);
      })
  });

  return router;
}
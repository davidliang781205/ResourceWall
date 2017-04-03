"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.post("/", (req, res) => {
    let r = req.body;

    knex.insert({
        user_id: Number(req.session.user_id),
        url_id: Number(r.urlid),
      })
      .into("likes")
      .returning('url_id')
      .then((id) => {
        return knex
          .count('url_id')
          .from('likes')
          .where('likes.url_id', Number(id))
      })
      .then((value) => {
        console.log(value);
        res.json(value);
      })
      .catch((err) => {
        res.json(err);
      })
  });

  return router;
}
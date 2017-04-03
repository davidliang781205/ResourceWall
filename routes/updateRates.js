"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.post("/", (req, res) => {
    let r = req.body;
    const userInfo = [];

    knex("rates")
      .select(1)
      .where({user_id: req.session.user_id, url_id: r.urlid})
      .limit(1)
      .then((rows) => {
        console.log(rows, 'rows');
      });
  });
  return router;
}

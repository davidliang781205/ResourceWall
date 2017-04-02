"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.post("/", (req, res) => {
    let r = req.body;
    knex.insert({
        user_id: Number(req.session.user_id),
        url_id: Number(r.urlid),
        content: r.comment,
        created_at: new Date()
      })
      .into("comments")
      .then()
      .catch((err) => {
        res.status(404).end();
        console.log(err, '---- err ----');
      });

  });
  return router;

}
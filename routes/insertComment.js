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
      .then(() => {
        return knex
          .select('urls.id',
            'comments.content',
            'users.email'
          )
          .from('urls')
          .leftJoin('comments', 'comments.url_id', '=', 'urls.id')
          .join('users', 'users.id', '=', 'comments.user_id')
      })
      .then((rows) => {
        templateVars.postComments = rows;
        res.render("index", templateVars);
      })
      .catch((err) => {
        res.status(404).end();
        console.log(err, '---- err ----');
      });

  });
  return router;

}
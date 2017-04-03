"use strict";

const express = require('express');
const router = express.Router();


module.exports = (knex, query) => {
  router.post("/", (req, res) => {
    let r = req.body;
    knex.insert({
        user_id: Number(req.session.user_id),
        url_id: Number(r.urlid),
        content: r.comment,
        created_at: new Date()
      })
      .into("comments")
      .returning('id')
      .then((id) => {
        return knex
          .select('urls.id',
            'comments.content',
            'users.email'
          )
          .from('urls')
          .leftJoin('comments', 'comments.url_id', '=', 'urls.id')
          .join('users', 'users.id', '=', 'comments.user_id')
          .where('comments.id', Number(id))
      }).then((row) => {
        console.log(row);
        res.json(row);
      })
      .catch((err) => {
        res.status(404).end();
        console.log(err, '---- err ----');
      });

  });
  return router;

}
"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.post("/", (req, res) => {
    knex("comments")
      .select("user_id", "url_id")
      .where({url_id: req.body.url_id})
      .limit(1)
      .then((rows) => {
        const url = rows[0];
        if (!url){
          return Promise.reject({
            type:404,
            message: "Not Found!"
          });
        }
        return Promise.resolve(url);
      })
      .then((url) => {
        url.user_id = req.session.user_id;
        url.text = req.body.text;
        res.redirect("/");
      })
      .catch((err) => {
        req.flash('errors', err.message);
        res.redirect('/');
      });
  });
  return router;
}

"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  function getUrltitle() {
    knex('urls')
      .select('title')
      .where('title', '=', '')
  }

  function insertComment(_user_id, _url_id, content, created_at, cb) {
    knex.insert({ user_id: _user_id, url_id: _url_id, content: content, created_at: created_at })
      .into("comments")
      .returning('id')
      .asCallback(function(err, id) {
        if (err) {
          cb(err);
        }
        cb(null, id);
      });
  }
  router.post("/", (req, res) => {
    let r = req.body;
<<<<<<< HEAD
    let date = new Date();
    insertComment(Number(req.session.user_id), Number(r.urlid), r.comment, date, (err, id) => {
=======
    console.log(req.body.origURL);
    let date = new Date();
    // console.log(req.session.user_id, ' user id');
    // console.log(r.url_id, ' url id');
    // console.log(r.comment, ' comment ');
    // console.log(date, ' date ');
    insertComment(Number(req.session.user_id), r.url_id, r.comment, date, (err, id) => {
>>>>>>> master
      if (err) {
        console.log(err, '---- err ----');
        return res.status(404).end();
      }
      console.log('ty for commenting!');
      res.redirect('/');
    });
  });
  return router;
}
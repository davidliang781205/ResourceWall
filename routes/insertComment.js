"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  function insertComment(user_id, url_id, content, cb){
    knex.insert({user_id: user_id, url_id: url_id, content: content})
    .into("comments")
    .returning('id')
    .asCallback(function(err, id) {
      if (err) {
        callback(err);
      }
      callback(null, id);
    });
  }
  router.post("/", (req, res) => {
    let r = req.body;
    insertComment(req.session.user_id, r.url_id, r.comment, (err, content) => {
      if (err){
        cb(err);
      }
      cb(null, content);
    });
  });
  return router;
}


  //   knex("comments")
  //     .select("url_id")
  //     .where({url_id: req.body.url_id})
  //     .limit(1)
  //     .then((rows) => {
  //       const url = rows[0];
  //       if (!url){
  //         return Promise.reject({
  //           type:404,
  //           message: "Not Found!"
  //         });
  //       }
  //       return Promise.resolve(url);
  //     })
  //     .then((url) => {
  //       insertComment(req.body.text);
  //       res.redirect("/");
  //     })
  //     .catch((err) => {
  //       req.flash('errors', err.message);
  //       res.redirect('/');
  //     });
  // function insertComment (content){
  //   knex.insert({content: content})
  //     .into("comments")
  //     .returning('id')
  //     .asCallback(function(err, id) {
  //       if (err) {
  //         callback(err);
  //       }
  //       callback(null, id);
  //     });
  // }

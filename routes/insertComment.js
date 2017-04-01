"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.post("/", (req, res) => {
    knex.insert({user_id: req.sessoin.id, url_id: req.body.url_id, content: req.body.content})
      .into("comments")
      .returning('id')
      .asCallback(function(err, id) {
        if (err) {
          callback(err);
        }
        callback(null, id);
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

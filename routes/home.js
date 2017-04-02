"use strict";

const express = require('express');
const router = express.Router();

module.exports = (query) => {
  router.get("/", (req, res) => {
    let templateVars = {
      user: req.session.user_id,
      errors: req.flash("error"),
      info: req.flash("info")
    };

    query.getLikesRates((e) => {
      templateVars.posts = e;
      query.getLikesRates((e) => {
        templateVars.postComments = e;
        res.render('index', templateVars);
        return;
      });
    });
  });

  return router;
}
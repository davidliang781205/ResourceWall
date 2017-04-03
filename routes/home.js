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
      query.getComments((e) => {
        console.log(e);
        templateVars.postComments = e;
        console.log("this is templateVars HOmepage: ", templateVars);
        res.render('index', templateVars);
        return;
      });
    });
  });

  return router;
}
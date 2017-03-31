"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.get("/", (req, res) => {
    let templateVars = {
      user: req.session.user_id,
      errors: req.flash("error"),
      info: req.flash("info")
    };
    knex
      .select("*")
      .from("urls")
      .then((rows) => {
        templateVars.posts = rows;
        res.render("index", templateVars);
        return;
      })
      .catch(err => console.err);


  });

  return router;
}

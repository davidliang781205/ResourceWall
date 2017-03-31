"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.post("/", (req, res) => {
    let templateVars = {
      user: req.session.userID
    };
    res.render("index", templateVars);
  });

  return router;
}
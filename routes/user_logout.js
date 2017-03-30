"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.post("/", (req, res) => {
    delete req.session.id;
    delete req.session.email;
  });

  return router;
}

"use strict";

//what is express doing for us?
//what is route doing for us?
const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
 router.get("/", (req, res) => {
    knex
      .select("*")
      .from("urls")
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}

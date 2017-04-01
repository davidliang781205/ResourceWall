"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  console.log("this is right inside search bar exports funct");
  function searchWild(input, callback) {
    return knex.select("*")
      .from("urls")
      .where({title: input})
      .then((rows) => {
        if (rows.length) {
          return Promise.resolve(input);
        } else {
          return Promise.resolve();
        }
      })
  }

  router.post("/", (req, res) => {

    console.log("this is the req.body: ", req.body);
     searchWild(req.body.searchInput, (err, input) => {
      if (err) {
        console.error("ERROR:", err);
        return res.status(400).end();
      } else {
        console.log("OK, search result is:", input);
        res.redirect("/");
      }
    });

  });

return router;
}




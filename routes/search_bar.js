"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {


  function searchBar(input, callback) {
    console.log("this is right inside search bar exports funct, input is: ", input);
    return knex
            .select()
            .from("urls")
            .where({ title: input})
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
     searchBar(req.body.searchInput, (err, input) => {
      console.log("inside searchBar function");
      if (err) {
        console.error("ERROR:", err);
        return res.status(400).end();
      } else {
        console.log("OK, no errors and function went through the search result is:", input);
// this is where the results of the search results will go. Render into the index.ejs?
//  ie) let ansFuncOfResults = function(req.body.searchInput)
//  ie) templateVars = {searchResults: ansFuncOfResults}
// use a for loop like what david did to display the urls on home in the index.ejs???
        // res.render("index", templateVars);
      res.redirect("/");
      }
    });

  });

return router;
}




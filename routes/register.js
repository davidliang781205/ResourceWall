"use strict";

const express = require('express');
const router  = express.Router();
const bcrypt= require("bcrypt");

module.exports = (knex) => {

  function insertNewUser(email, password, callback) {
    const hashed_password = bcrypt.hashSync(password, 10);

    knex.insert({email: email, password: hashed_password})
    .into("users")
    .returning('id')
    .asCallback(function(err, ids) {
      if (err) {
        console.error(err);
        callback(err);
      }
      console.log(ids);
      console.log("in insertUser knex function");
      callback(null, ids);
    });
  }

  router.post("/", (req, res) => {

    insertNewUser(req.body.email, req.body.password, (err, userId) => {
      console.log("in POST /register callback:", userId);
      if (err) {
        console.error("ERROR:", err);
        return res.status(400).end();
      }
      console.log("in post register function call ");
      req.session.user_id = userId;
      console.log("OK, result is:", userId);
      res.redirect("/");
    });
  });
  return router;

}

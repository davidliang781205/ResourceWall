"use strict";

const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");

module.exports = (knex) => {

  function insertNewUser(email, password, callback) {
    const hashed_password = bcrypt.hashSync(password, 10);

    knex.insert({ email: email, password: hashed_password })
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

  function doesEmailExist(email) {

  }

  router.post("/", (req, res) => {

    if (req.body.email === "" || req.body.password === "") {
      res.flash("info", "Please don't leave email and password fields empty");
      res.redirect("/");
      return;
    }

    doesEmailExist(req.body.email);
    if (doesEmailExist) {
      res.flash("info", "Email already exists, please use another");
      res.redirect("/");
    } else {
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
    }
  });
  return router;
}

"use strict";

const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const validator = require('validator');

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

    let validateEmail = validator.isEmail(req.body.email);
    if (req.body.email === "" || req.body.password === "") {
      // res.flash("info", "Please don't leave email and password fields empty");
      console.log("insde empty string and pass condition");
      res.redirect("/");
      return;
    }

    // doesEmailExist(req.body.email);
    // if (doesEmailExist) {
    //   // res.flash("info", "Email already exists, please use another");
    //   res.redirect("/");
    //   return;
    // }
    if (validateEmail) {
      insertNewUser(req.body.email, req.body.password, (err, userId) => {
        if (err) {
          console.error("ERROR:", err);
          return res.status(400).end();
        }
        req.session.user_id = userId;
        console.log("OK, result is:", userId);
        res.redirect("/");
      });
    } else {
      req.flash("error", "Please use a valid email address (example@example.ca)");
      res.redirect("/");
      console.log("email wasnt validated so went through this code")
    }
  });
  return router;
}

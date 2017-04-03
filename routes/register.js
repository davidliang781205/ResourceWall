"use strict";

const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const validator = require('validator');

module.exports = (knex) => {

  function insertNewUser(email, password, callback) {
    const hashed_password = bcrypt.hashSync(password, 10);
    let date = new Date();
    knex.insert({ email: email, password: hashed_password, created_at: date })
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

  function emailExistFunc(email) {
    return knex
      .select('email')
      .from ('users')
      .where({email: email})
      .limit(1)
      .then((rows) => {
        if (rows.length) {
          return Promise.resolve(email);
        } else {
          return Promise.resolve();
        }
      })
  }

  router.post("/", (req, res) => {

    let validateEmail = validator.isEmail(req.body.email);
//this error is already taken care of w the natural behaviour of the registration button?
    // if (req.body.email === "" || req.body.password === "") {
    //   res.flash("error", "Please don't leave email and password fields empty");
    //   console.log("insde empty string and pass condition");
    //   res.redirect("/");
    //   return;
    // }

    let emailExist = emailExistFunc(req.body.email);
    emailExist.then((email)=> {
      if (email) {
        req.flash("error", "Email already exists, please use another or login");
        res.redirect("/");
        return;
      }
      if (validateEmail) {
        insertNewUser(req.body.email, req.body.password, (err, userId) => {
          if (err) {
            console.error("ERROR:", err);
            return res.status(400).end();
          }
          console.log(req.body);
          req.session.user_id = userId;
          console.log("OK, result is:", userId);
          res.redirect("/");
        });
      } else {
        req.flash("error", "Please use a valid email address (example@example.ca)");
        res.redirect("/");
        console.log("email wasnt validated so went through this code")
      }
    })
  });
  return router;
}

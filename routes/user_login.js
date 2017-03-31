"use strict";

const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcrypt');

module.exports = (knex) => {
  router.post("/", (req, res) => {
    const { email, password } = req.body;
    knex
      .select("*")
      .from("users")
      .where("users.email", "=", email)
      .then(req.session.user_id = comparePass(password))
      .catch(err => console.err);

      res.redirect("/");
  });

  return router;
}
function comparePass(password){
  return function(users) {
    return new Promise((resolve, reject) => {

      const isValidPassword = bcrypt.compareSync(password, users[0].password);
      if (isValidPassword) {
        resolve(users[0].id);
      } else {
        reject (false);
      }
    });
  }
}

"use strict";

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

module.exports = (knex) => {
  router.post("/", (req, res) => {
    const { email, password } = req.body;
    knex
      .select("*")
      .from("users")
      .where("users.email", "=", email)
      .limit(1)
      .then((rows) => {
        comparePass(rows[0], password)
      })
      .then((userID) => {
        console.log(userID);
        req.session.user_id = userID;
      })
      .catch(err => console.err);
    console.log(req.session.user_id);

    res.redirect("/");
  });

  return router;
}

function comparePass(user, password) {
  return new Promise((resolve, reject) => {
    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (isValidPassword) {
      resolve(user.id);
    } else {
      reject(false);
    }
  });

}
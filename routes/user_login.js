"use strict";

const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcrypt');


module.exports = (knex) => {
  router.get("/", (req, res) => {
    const { email, password } = req.query;

    knex
      .select("*")
      .from("users")
      .where("users.email", "=", email)
      .then(comparePass(password))
      .then(setSession)
      .catch(err => console.err)
  });

  return router;
}
function setSession(currentUser_id){
  return req.session.id = currentUser_id;
}
function comparePass(password){
  return function(users) {
    console.log('my user password', users[0].password);
    return new Promise((resolve, reject) => {

      // const isValidPassword = bcrypt.compareSync(password, users[0].password);
      // if (isValidPassword) {
        resolve(true);
      // } else {
      //   reject (false);
      // }
    });
  }
}

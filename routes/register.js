"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/register", (req, res) => {
    const password = req.body.password;
    const hashed_password = bcrypt.hashSync(password, 10);

    insertNewUser(req.body.email, hashed_password);
    req.session.user_id = user.id;
    console.log("in post register function call ");
    res.redirect("/");
  });

  return router;
}

function insertNewUser(email, password) {
  knex.insert({email: email, password: password})
  .into("users")
  .asCallback(function(err, rows) {
    if (err) {
      return console.error(err);
    }
    console.log(rows);
    console.log("in insertUser knex function");
  });
}

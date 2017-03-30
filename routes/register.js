"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/register", (req, res) => {
    const password = req.body.password;
    const hashed_password = bcrypt.hashSync(password, 10);

    insertNewUser(req.body.email, hashed_password);
    req.session.user_id = user.id;
    console.log("after function call");
    res.redirect("/");
  });

  return router;
}

function insertNewUser(email, password) {
  knex.insert({email: email, password: password})
  .into("users")
  .then((results) => {
  console.log("in function");
  res.json(results);
  });
}

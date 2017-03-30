"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  let user = {
    email: req.body.email,
    password: req.body.password
  }
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      .where("users.email", "=", req.body.email)
      .then(result => {
        comparePass(result);
      })
  });

  return router;
}
function comparePass(obj){
  return new Promise((resolve, reject) => {
    if (bcrypt.compareSync(req.body.password, obj.password)) {
      resolve(obj.id);
    } else {
      reject (obj);
    }
  });
}

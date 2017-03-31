"use strict";

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

module.exports = (knex) => {
  router.post("/", (req, res) => {
    knex("users")
      .select("id", "password")
      .from("users")
      .where({email: req.body.email})
      .limit(1)
      .then((rows) => {
        const user = rows[0];
        if (!user){
          return Promise.reject({
            type:409,
            message: "Bad Credentials"
          });
        }
        const comparePasswords = bcrypt.compare(req.body.password, user.password);
        return comparePasswords.then((passwordsMatch) => {
          if (!passwordsMatch) {
            return Promise.reject({
              type:409,
              message: "Bad Credentials"
            });
          }
          return Promise.resolve(user);
        });
      })
      .then((user) => {
        req.session.user_id = user.id;
        res.redirect("/");
      })
      .catch((err) => {
        req.flash('errors', err.message);
        res.redirect('/');
      });
  });
  return router;
}

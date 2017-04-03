"use strict";

const express = require('express');
const router = express.Router();

module.exports = (queriesProfile, knex) => {
  let sessionEmail;
  router.get("/userProfile", (req, res) => {
    console.log("welcome to get /userProfile knex query below");
    knex("users")
      .select("id", "email")
      .where({id: req.session.user_id})
      .then((rows) => {
        // console.log("this is rows after query!: ", rows);
  //ignore the anonymous instead use index to get through it! like a normal object!
        // console.log("this is rows[0].email: ", rows[0].email);
        sessionEmail = rows[0].email;
        // console.log(sessionEmail);


        let templateVars = {
          user: req.session.user_id,
          errors: req.flash("error"),
          info: req.flash("info"),
          email: sessionEmail
        };



        queriesProfile.getLikesRates((e) => {
          templateVars.posts = e;
        queriesProfile.getComments((e) => {
            templateVars.postComments = e;
            res.render('user', templateVars);
            return;

        });
      });
    });
  });

  return router;
}

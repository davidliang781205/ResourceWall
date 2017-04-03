"use strict";

const express = require('express');
const router = express.Router();

module.exports = (query, knex) => {
  let sessionEmail;
  let sessionId;
  let templateVars;
  router.get("/", (req, res) => {

    console.log("welcome to get /userProfile knex query below");

    // if (req.sessoin.user_id) {
    //   let idNumb = Number(req.session.user_id);
    //   knex("users")
    //     .select("id", "email")
    //     .where({id: idNumb})
    //     .limit(1)
    //     .then((rows) => {

    //       sessionEmail = rows[0].email;
    //       sessionId = rows[0].id;
    //   });
    // }

      let templateVars = {
        user: req.session.user_id,
        errors: req.flash("error"),
        info: req.flash("info"),
        email: sessionEmail
      };



      query.getLikesRates((e) => {
        templateVars.posts = e;
        query.getComments((e) => {
          templateVars.postComments = e;
          console.log("this is templateVars HOmepage: ", templateVars);
          res.render('index', templateVars);
          return;
        });
      });
  });

  return router;
}

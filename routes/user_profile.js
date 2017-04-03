"use strict";

const express = require('express');
const router = express.Router();

module.exports = (queriesProfile, knex) => {
  let sessionEmail;
  let sessionId;
  router.get("/userProfile", (req, res) => {
//had to convert req.session.user_id to Number because a new registration was passing a string numb
//value to user_profile unless user logged out + logged back in to get id to an integer value
    let idNumb = Number(req.session.user_id);
    console.log("welcome to get /userProfile knex query below");
    knex("users")
      .select("id", "email")
      .where({id: idNumb})
      .then((rows) => {
        console.log("this is rows after query!: ", rows);
  //ignore the anonymous instead use index to get through it! like a normal object!
        console.log("this is rows[0].email: ", rows[0].email);
        for (let row in rows) {
          sessionEmail = rows[row].email;
          sessionId = rows[row].id;
        }

        console.log("this should be the session email: ", sessionEmail); //it is
        console.log("this should be the session id: ", sessionId);       //it is


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
        console.log("this is USERPROFILE templateVars: ", templateVars);
        res.render('user', templateVars);
        return;

        });
      });
    });
  });

  return router;
}

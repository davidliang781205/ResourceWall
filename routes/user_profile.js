"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  let sessionEmail;
  let sessionId;
  let templateVars;
  router.get("/userProfile", (req, res) => {
//had to convert req.session.user_id to Number because a new registration was passing a string numb
//value to user_profile unless user logged out + logged back in to get id to an integer value
    let idNumb = Number(req.session.user_id);
    console.log("welcome to get /userProfile knex query below");
    knex("users")
      .select("id", "email")
      .where({id: idNumb})
      .limit(1)
      .then((rows) => {
        // console.log("this is rows after query!: ", rows);
  //ignore the anonymous instead use index to get through it! like a normal object!
        // console.log("this is rows[0].email: ", rows[0].email);
        // for (let row in rows) {
        //   sessionEmail = rows[row].email;
        //   sessionId = rows[row].id;
        // }
        sessionEmail = rows[0].email;
        sessionId = rows[0].id;

        console.log("this should be the session email: ", sessionEmail); //it is
        console.log("this should be the session id: ", sessionId);       //it is


        // let templateVars = {
        //   user: req.session.user_id,
        //   errors: req.flash("error"),
        //   info: req.flash("info"),
        //   email: sessionEmail
        // };

        templateVars = {
              user: req.session.user_id,
              errors: req.flash("error"),
              info: req.flash("info"),
              email: sessionEmail
            };

        return knex
        .select('urls.id',
          'urls.title',
          'urls.description',
          'urls.genre',
          'urls.media_type',
          'urls.original_url',
          'urls.thumbnail_url',
          'users.email'
        )
        .count('likes.url_id')
        .avg('rates.rating')
        .from('urls')
        .join('users', 'users.id', '=', 'urls.user_id')
        .leftJoin('likes', 'likes.url_id', '=', 'urls.id')
        .leftJoin('rates', 'rates.url_id', '=', 'urls.user_id')
        .groupBy('urls.id')
        .groupBy('urls.description')
        .groupBy('urls.genre')
        .groupBy('urls.media_type')
        .groupBy('urls.original_url')
        .groupBy('urls.thumbnail_url')
        .groupBy('users.email')
        .where('urls.user_id', Number(req.session.user_id))

          // function(){
          // this.where('users.id', Number(req.session.user_id))
          // .orWhere("likes.user_id", Number(req.session.user_id))
        // });
      })
        .then((rows) => {
          // console.log("this is rows in userprofoe: ", rows);
          templateVars.posts = rows;
          return knex
          .select('urls.id',
            'comments.content',
            'users.email'
          )
          .from('urls')
          .leftJoin('comments', 'comments.url_id', '=', 'urls.id')
          .join('users', 'users.id', '=', 'comments.user_id');
        })
        .then((rows)=> {
          templateVars.postComments = rows;
          return knex
        .select('urls.id',
          'urls.title',
          'urls.description',
          'urls.genre',
          'urls.media_type',
          'urls.original_url',
          'urls.thumbnail_url',
          'users.email'
        )
        .count('likes.url_id')
        .avg('rates.rating')
        .from('urls')
        .join('users', 'users.id', '=', 'urls.user_id')
        .leftJoin('likes', 'likes.url_id', '=', 'urls.id')
        .leftJoin('rates', 'rates.url_id', '=', 'urls.user_id')
        .groupBy('urls.id')
        .groupBy('urls.description')
        .groupBy('urls.genre')
        .groupBy('urls.media_type')
        .groupBy('urls.original_url')
        .groupBy('urls.thumbnail_url')
        .groupBy('users.email')
        .where('likes.user_id', Number(req.session.user_id))

      })
        .then((rows) => {
          templateVars.urlsLiked = rows;
          console.log("this is templateVars userProfileyayays: ", templateVars);
          res.render('user', templateVars);

        }).catch((err) => {
          console.log(err);
        })

        })




  return router;
}

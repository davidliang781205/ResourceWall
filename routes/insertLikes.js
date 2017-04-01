"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.post("/", (req, res) => {
    console.log('-------- like clicked ----------- ');
    console.log(req.body, '---- likes #');
    console.log(Number(req.body.count), '---- counts #');
    console.log(req.session.user_id, '---- user #');
    if (!req.session_user_id){
      req.flash('error', 'Please Sign in or Register')
      res.redirect('/');
      return;
    }
    let date = new Date();
    knex('likes')
      .select('user_id', 'url_id')
      .where({user_id: req.session_user_id})
      .then ((rows) => {
        console.log(rows, "rows");
        if (rows.length){

        }
      })
      // .then((rows) => {
      //   if(rows.length){
      //     for (let i = 0 ; i < rows.length; i++){
      //       if (url_id: req.body.url_id && user_id: req.session_user_id){
      //         //unlike
      //         // return;
      //       }
      //     }
      //     return;
      //   }
      // })
      .then(() => {
        return knex('likes').insert({
          user_id: Number(req.session_user_id),
          url_id: req.body.url_id,
          created_at: date
        })
      }).catch((err) =>{
        console.log(err, '-------- errr liked --------');
      })
  });

  return router;
}


// knex.insert({user_id: req.session.user_id, url_id: req.body.url_id})
//   .into("likes")
//   .asCallback(function(err) {
//     if (err) {
//       console.log(err);
//     }
//     res.redirect('/');
//   });

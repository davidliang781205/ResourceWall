"use strict";

const express = require('express');
const router = express.Router();
const validator = require('validator');

// module.exports = (knex) => {

//   function insertURL(url) {

    // let bodysesh = req.body;
    knex.insert({ user_id: req.session.user_id, description: bodysesh.description,
                  title: bodysesh.title, genre: bodysesh.genre, media_type: ,
                  original_url: , thumbnail_url: })
//     .into("urls")
//     .returning('id')
//     .asCallback(function(err, ids) {
//       if (err) {
//         console.error(err);
//         callback(err);
//       }
//       console.log(ids);
//       console.log("in insertUser knex function");
//       callback(null, ids);
//     });
//   }

//   router.post("/", (req, res) => {
   let validateUrl = validator.isurl(req.body.);
//     console.log("this is the req.body: ", req.body);
//     insertURL(req.body, (err, userId) => {
//       if (err) {
//         console.error("ERROR:", err);
//         return res.status(400).end();
//       }
//       console.log("OK, result is:", userId);
//       res.redirect("/");
//     });
//   });
//   return router;
// }

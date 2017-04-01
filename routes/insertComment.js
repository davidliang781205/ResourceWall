"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  function getUrltitle() {
    knex('urls')
      .select('title')
      .where('title', '=', '')
  }

  function insertComment(_user_id, _url_id, content, created_at, cb) {
    knex.insert({ user_id: _user_id, url_id: _url_id, content: content, created_at: created_at })
      .into("comments")
      .returning('id')
      .asCallback(function(err, id) {
        if (err) {
          cb(err);
        }
        cb(null, id);
      });
  }
  router.post("/", (req, res) => {
    let r = req.body;
    console.log(req.body.urlid);
    let date = new Date();
    // console.log(req.session.user_id, ' user id');
    // console.log(r.url_id, ' url id');
    // console.log(r.comment, ' comment ');
    // console.log(date, ' date ');
    insertComment(Number(req.session.user_id), Number(r.urlid), r.comment, date, (err, id) => {
      if (err) {
        console.log(err, '---- err ----');
        return res.status(404).end(); // fix error #
      }
      console.log('ty for commenting!');
      // res.redirect('/');
    });
  });
  return router;
}

// "use strict";
//
// const express = require('express');
// const router = express.Router();
//
// module.exports = (knex) => {
//   router.post("/", (req, res) => {
//
//   let r = req.body;
//   if(!r.content || req.session.user_id){
//     req.flash('error', 'Please login or register first!');
//     res.redirect('/');
//     return;
//   }
//   knex('comments')
//     .select(1)
//     .where({url_id: r.url_id})
//     .limit(1)
//     .then((rows) => {
//       if(!rows.length){
//         return Promise.reject({
//           // req.flash('URL does not exist'),
//           // res.status(409).end()
//         });
//       }
//       return;
//     })
//     .then(() => {
//       return knex('comments').insert({
//         user_id: r.session.user_id,
//         url_id: r.url_id,
//         content: r.content
//       })
//     })
//     .then(() => {
//         // req.flash('info', 'Thank you for commenting!');
//         // res.redirect('/');
//     })
//     .catch((err) => {
//         // req.flash('error', err.message);
//         res.redirect('/');
//       });
//     });
//   return router;
// }


// knex('comments')
//   .select(1)
//   .where({url_id: r.url_id})
//   .limit(1);
//   .then((rows) => {
//     if(!rows.length){
//       return Promise.reject({
//         req.flash('URL does not exist'),
//         res.status(409).end()
//       });
//     }return;
//   }).then(() => {
//     return knex('comments').insert({
//       user_id: req.session.user_id,
//       url_id: r.url_id,
//       content: r.content
//     }).then(() => {
//       req.flash('info', 'Thank you for commenting!');
//       // res.redirect('/');
//     }).catch((err) => {
//       req.flash('error', err.message);
//       res.redirect('/');
//     });
//   });



//   knex("comments")
//     .select("url_id")
//     .where({url_id: req.body.url_id})
//     .limit(1)
//     .then((rows) => {
//       const url = rows[0];
//       if (!url){
//         return Promise.reject({
//           type:404,
//           message: "Not Found!"
//         });
//       }
//       return Promise.resolve(url);
//     })
//     .then((url) => {
//       insertComment(req.body.text);
//       res.redirect("/");
//     })
//     .catch((err) => {
//       req.flash('errors', err.message);
//       res.redirect('/');
//     });
// function insertComment (content){
//   knex.insert({content: content})
//     .into("comments")
//     .returning('id')
//     .asCallback(function(err, id) {
//       if (err) {
//         callback(err);
//       }
//       callback(null, id);
//     });
// }

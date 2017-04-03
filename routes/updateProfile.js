"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.post("/", (req, res) => {
    let r = req.body;
    const userInfo = [];

    if(r.email){
      const isEmailUnique = knex('users')
        .select(1)
        .where({email: r.email})
        .andWhereNot({id: req.sessoin.user_id})
        .limit(1)
        .then((rows) => {
          if (rows.length){
            return Pormise.reject({
              req.flash('error', 'Please enter another email!');
              res.status(409).end();
            });
          }
          return Promise.resolve(r.email);
        });
      userInfo.push(isEmailUnique);
    } else {
      userInfo.push(Promise.resolve(false));
    }
    if(r.password){
      const hashPassword = bcrypt.hashSync(r.password,10);
      userInfo.push(hashPassword);
    } else {
      userInfo.push(Promise.resolve(false));
    }
    Promise.all(userInfo).then((newInfo) => {
      const newEmail = newInfo[0];
      const newPassword = newInfo[1];
      const user = {};
      if (newEmail){
        user.email = newEmail;
      }
      if (newPassword){
        user.password = newPassword;
      }
      return knex('users')
        .update(user)
        .where({id: req.session.user_id});
    }).then(() => {
      req.flash('info', 'Updated Profile!');
      res.redirect('/');
    }).catch((err) => {
      req.flash('error', err)
      res.redirect('/');
    });
  });
  return router;
}

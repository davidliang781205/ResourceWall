"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  // let user = request.cookies['userid'];
  let user = {
    email: 'Bob@mar.ca',
    password: "marBob"
  }
  // let verifiedUser = emailMatchesPassChec(user.email, user.password);
  // if (verifiedUser){
  //   req.session.user_id = user.id;
  // }
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      .where("users.email", "=", 'Bob@mar.ca')
      // .andWhere("users.password", "=", emailMatchesPassCheck(user.email, user.password))
      // .then((results) => {
      //   res.json(results);
      .then(comparePass)

      // })
    // });
  });

  return router;
}
function comparePass(obj){
  console.log(obj, "user obj");
}
function emailMatchesPassCheck (email, password) {
 for (var key in users) {
   if (users[key].email === email) {
     if (bcrypt.compareSync(password, users[key].password)) {
       return users[key];
     }
   }
 }
 return null;
}

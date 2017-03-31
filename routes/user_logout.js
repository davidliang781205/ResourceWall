"use strict";

const express = require('express');
const router = express.Router();

module.exports = () => {
  router.post("/", (req, res) => {
    req.session = undefined;
    res.redirect('/');
    return;
  });
  return router;
}
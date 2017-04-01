"use strict";

require('dotenv').config();

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const cookieSesh = require("cookie-session");
const app = express();
const bcrypt = require('bcrypt');
const flash = require('connect-flash');
app.use(flash());

const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const morgan = require('morgan');
const knexLogger = require('knex-logger');

// Seperated Routes for each Resource
const homePage = require("./routes/home");
const usersRoutesLogin = require("./routes/user_login");
const usersRoutesLogout = require("./routes/user_logout");
// const usersRoutes = require("./routes/users");
const registerRoutes = require("./routes/register");
const createPostRoutes= require("./routes/insertUrl");
const searchBarRoutes = require("./routes/search_bar");
app.use(cookieSesh({
  name: "session",
  keys: ["pancakes"]
}));


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/", homePage(knex));
app.use("/login", usersRoutesLogin(knex));
app.use("/logout", usersRoutesLogout());
app.use("/register", registerRoutes(knex));
app.use("/createpost", createPostRoutes(knex));
app.use("/search_bar", searchBarRoutes(knex));

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

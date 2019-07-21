//Packages
const express = require('express'),
      bodyParser = require('body-parser'),
      passport = require('passport'),
      localStrategy = require('passport-local');

let app = express(),
    db = require('./models');
    
app.set("view engine", "ejs")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))

app.use(require('express-session')({
    secret: process.env.SESSION || "nu7KtsPjWkyY4t9nTsBBzgT1l5QIBOrh0i5ksQI6",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

let todoAPIRoutes = require('./routes/todoAPI'),
    indexRoutes = require('./routes/index');
app.use("/api/todos", todoAPIRoutes);
app.use(indexRoutes);

passport.use(new localStrategy(db.User.authenticate()));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

//Server INIT
let port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Zen Todo Started on Port "+port);
})
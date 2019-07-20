let express = require('express'),
    passport = require('passport'),
    db = require('../models'),
    isLoggedIn = require('../middleware/isLoggedIn'),
    router = express.Router();
    
router.get("/", function(req, res){
    res.render("index");
})

router.get("/home", isLoggedIn ,function(req, res){
    db.User.findById(req.user).populate('todos').exec(function(error, user){
        if(error) console.log(error)
        else{
            res.render('home', {user: user})
        }
    })
})

router.post("/register", function(req, res){
    db.User.register(new db.User({
        username: req.body.username
    }), req.body.password, function(error, user){
        console.log(req.body.regPassword);
        if(error) {
            console.log(error);
            res.redirect("/");
        }
        else{
            passport.authenticate("local")(req, res, function(){
                res.redirect("/home");
            })
        }
    })
})

router.post("/login", passport.authenticate("local", { 
    successRedirect: "/home", 
    failureRedirect: "/"
}), function(req, res){});

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
})

module.exports = router;
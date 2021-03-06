var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');

//root route
router.get("/", function (req, res) {
    res.render("landing");
});

//register form route
router.get('/register', function (req, res) {
    res.render("register", {
        page: 'register'
    });
});

//show register form
router.post('/register', function (req, res) {
    var newUser = new User({
        username: req.body.username
    });
    eval(require('locus'));
    //Make user an admin if they know the adminCode.
    if (req.body.adminCode === 'secretcode123') {
        newUser.adminCode = true;
    }
    //if user is not authenticated, redirect home
    //if the user is authenticated, redirect to campgrounds
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            req.flash("error", err.message)
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function () {
            //req.body.username comes from the body 
            //user.username comes from the database -------^^^^^^
            req.flash("success", "Welcome to YelpCamp " + user.username);
            res.redirect("/campgrounds");
        });
    });
});

//show login form
router.get('/login', function (req, res) {
    res.render('login', {
        page: 'login'
    });
});


//handling login logic
router.post('/login', passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "login"
}), function (req, res) {

});

//logout route
router.get("/logout", function (req, res) {
    req.logout();
    req.flash('success', "Logged you out!");
    res.redirect("/campgrounds");
});


module.exports = router;
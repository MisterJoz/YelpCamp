var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp", {
    useNewUrlParser: true
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");


// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({

//     name: "Granite Hill",
//     image: "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"

// }, function (err, campground) {
//     if (err) {
//         conso+le.log(err);
//     } else {
//         console.log("Newly created campground");
//         console.log(campground);
//     }
// });


app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    //Get all the campgrounds from DB
    Campground.find({}, function (err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            // {The name you want to give the data: data we are passing in}
            res.render("campgrounds", {
                campgrounds: allCampgrounds
            });
        }
    });

});

app.post("/campgrounds", function (req, res) {
    //add to campgrounds array
    var name = req.body.name;
    var image = req.body.image
    var newCampground = {
        name: name,
        image: image
    }
    //Create a new campground and save to DB
    Campground.create(newCampground, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
    //redirect back to campgrounds page
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new.ejs");
});

app.listen(PORT = 3000, function (req, res) {
    console.log("YelpCamp server has started!")
});
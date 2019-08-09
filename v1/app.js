var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var campgrounds = [{
        name: "Salmon Creek",
        image: "https://pixabay.com/get/57e8d5474f5bad14f6da8c7dda793f7f1636dfe2564c704c732a79d29549c55a_340.jpg"
    },
    {
        name: "Granite Hill",
        image: "https://pixabay.com/get/5fe8d143495ab108f5d084609620367d1c3ed9e04e50744f702d7dd6934dc7_340.jpg"
    },
    {
        name: "Mountain Goat's Rest",
        image: "https://pixabay.com/get/54e2dd444f55ad14f6da8c7dda793f7f1636dfe2564c704c732a79d29549c55a_340.jpg"
    },
    {
        name: "Salmon Creek",
        image: "https://pixabay.com/get/57e8d5474f5bad14f6da8c7dda793f7f1636dfe2564c704c732a79d29549c55a_340.jpg"
    },
    {
        name: "Granite Hill",
        image: "https://pixabay.com/get/5fe8d143495ab108f5d084609620367d1c3ed9e04e50744f702d7dd6934dc7_340.jpg"
    },
    {
        name: "Mountain Goat's Rest",
        image: "https://pixabay.com/get/54e2dd444f55ad14f6da8c7dda793f7f1636dfe2564c704c732a79d29549c55a_340.jpg"
    }, {
        name: "Salmon Creek",
        image: "https://pixabay.com/get/57e8d5474f5bad14f6da8c7dda793f7f1636dfe2564c704c732a79d29549c55a_340.jpg"
    },
    {
        name: "Granite Hill",
        image: "https://pixabay.com/get/5fe8d143495ab108f5d084609620367d1c3ed9e04e50744f702d7dd6934dc7_340.jpg"
    },
    {
        name: "Mountain Goat's Rest",
        image: "https://pixabay.com/get/54e2dd444f55ad14f6da8c7dda793f7f1636dfe2564c704c732a79d29549c55a_340.jpg"
    }, {
        name: "Salmon Creek",
        image: "https://pixabay.com/get/57e8d5474f5bad14f6da8c7dda793f7f1636dfe2564c704c732a79d29549c55a_340.jpg"
    },
    {
        name: "Granite Hill",
        image: "https://pixabay.com/get/5fe8d143495ab108f5d084609620367d1c3ed9e04e50744f702d7dd6934dc7_340.jpg"
    },
    {
        name: "Mountain Goat's Rest",
        image: "https://pixabay.com/get/54e2dd444f55ad14f6da8c7dda793f7f1636dfe2564c704c732a79d29549c55a_340.jpg"
    }, {
        name: "Salmon Creek",
        image: "https://pixabay.com/get/57e8d5474f5bad14f6da8c7dda793f7f1636dfe2564c704c732a79d29549c55a_340.jpg"
    },
    {
        name: "Granite Hill",
        image: "https://pixabay.com/get/5fe8d143495ab108f5d084609620367d1c3ed9e04e50744f702d7dd6934dc7_340.jpg"
    },
    {
        name: "Mountain Goat's Rest",
        image: "https://pixabay.com/get/54e2dd444f55ad14f6da8c7dda793f7f1636dfe2564c704c732a79d29549c55a_340.jpg"
    }, {
        name: "Salmon Creek",
        image: "https://pixabay.com/get/57e8d5474f5bad14f6da8c7dda793f7f1636dfe2564c704c732a79d29549c55a_340.jpg"
    },
    {
        name: "Granite Hill",
        image: "https://pixabay.com/get/5fe8d143495ab108f5d084609620367d1c3ed9e04e50744f702d7dd6934dc7_340.jpg"
    },
    {
        name: "Mountain Goat's Rest",
        image: "https://pixabay.com/get/54e2dd444f55ad14f6da8c7dda793f7f1636dfe2564c704c732a79d29549c55a_340.jpg"
    }
]
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    //{The name you want to give the data: data we are passing in}
    res.render("campgrounds", {
        campgrounds: campgrounds
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
    //campgrounds.push(newCampground);
    //get data from form

    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new.ejs");
});

app.listen(PORT = 3000, function (req, res) {
    console.log("YelpCamp server has started!")
});
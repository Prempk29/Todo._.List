const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

var items=["eat well","study Hard"];
app.get("/", function (req, res) {
    var today = new Date();
    var options=
    {
        weekday:"long",
        day:"numeric",
        month:"long"

    };
    var day=today.toLocaleDateString("en-US",options);
    res.render("list", { day: day , newlistitems:items});

})

app.post("/",function(req,res)
{
    item=req.body.newitem;
    items.push(item);
    res.redirect("/");
})



app.listen(3000, function () {
    console.log("s i am still running my mind");
})
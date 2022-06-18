// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items = [];
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req,res)=>{
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day = today.toLocaleDateString("English",options);
  res.render("list",{day:day,items:items});
});

app.post("/",(req,res)=>{
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(process.env.PORT || 3000 , ()=>{
  console.log("server has started at port 3000");
});

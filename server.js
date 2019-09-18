    
var bodyParser = require("body-parser");
var express = require("express");

var routes = require("./controllers/burgers_controller.js");


var app = express();

app.use("/", routes);

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



var port = process.env.PORT || 3300;
app.listen(port, function(){
  console.log('The app is listening on: http://localhost:' + port);
});
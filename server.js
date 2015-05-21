var express = require("express")
var app = express()

var bodyParser = require("body-parser")
app.use(bodyParser.json())//handles json POST requests
app.use(bodyParser.urlencoded({ extended:true }) ) //handles form submissions

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cookie-dueler');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback){
  console.log("Connection established to: ", db.name)
})

var playerSchema = mongoose.Schema({
  position: Number,
  username: String,
  clicks: Number
})
//documentation

var Player = mongoose.model("Player", playerSchema)

var hbs = require('hbs');
app.set("view engine", "hbs");

app.get("/", function(req, res){
  // Player.create({position: 1, username:"Nic", clicks:0}, function (err, player){
  //   if(err) return handleError(err);
  //   console.log("Player 1", player.username, "has", player.clicks, "clicks.")
  // })
  // Player.create({position: 2, username:"Kevin", clicks:0}, function (err, player){
  //   if(err) return handleError(err);
  //   console.log("Player 2", player.username, "has", player.clicks, "clicks.")
  // })

  // Player.find({}, function(err, results) {
  //   res.send(results)
  // })
  res.render("index")
})

app.listen(3000, function (){
    console.log("app listening at http://localhost:3000/")
})

var Backbone = require('Backbone'),
Player = require("../models/player");

var Game = Backbone.Collection.extend({


  initialize: function(){
    console.log('A new Game has been created')

  },


  model: Player,
  mongooseModel: "Player",
  url: '/players'


});

exports = module.exports = Game;

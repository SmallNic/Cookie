var Backbone = require('Backbone');

var Player = Backbone.Model.extend({
  mongooseModel: "Player",


  initialize: function(){
    console.log('New Player was created')
  },

  defaults: {
    "name": ""
  },
  
  urlRoot: '/players'

});

exports = module.exports = Player;

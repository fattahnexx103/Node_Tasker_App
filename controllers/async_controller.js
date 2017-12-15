'use strict';

var Note = require('../models/Note_Model');
var User = require('../models/User_Model');
var async = require('async');

exports.homePage = function(req,res){
  //gather all notes and all users.
  async.parallel([
    function(callback){
      var query = Note.find({});
      query.sort({
        createdOn: 'desc'
      }).limit(12).exec(function(err,notes){
        callback(err,notes);
      });
    },

    function(callback){
      var query = User.find({});
      query.sort({
        username: 1
      }).exec(function(err,users){
        callback(err,users);
      });
    },
  ], function(err,results){
    if(err){
      console.log(err);
    }else{
      res.render('index',{
        notes: results[0], //first function
        users: results[1] //second function
      });
    }
  });
};

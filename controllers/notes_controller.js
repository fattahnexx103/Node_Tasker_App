'use strict';

var Note = require('../models/Note_Model');
var User = require('../models/User_Model');

exports.allUsersNotes = function(req,res){
  //find all users.
  User.find({})
    .sort({
      username: 1
    })
    .exec(function(err,users){
      if(err){
        console.log("Error getting users");
      }else{
        return res.render('newnote',{
          title: 'New Note',
          users: users
        });
      }
    });
}

exports.createNote = function(req, res){
  //creating a new note.

  var newNote = new Note(); //creating a Note Object
  newNote.memberName = req.body.memberName;
  newNote.project = req.body.project;
  newNote.workYesterday = req.body.workYesterday;
  newNote.workToday = req.body.workToday;
  newNote.impediment= req.body.impediment;

  newNote.save(function(err){
    if(err){
      var errMsg = 'We encountered an error' + err;
      res.render('newnote',{
        titile: 'Note- new note(error)',
        message: errMsg
      });
    }else{
      console.log('Meeting note has been saved');
      res.redirect(301, '/'); //301 is success
    }
  });
};

//filtering by Name
exports.noteByMember= function(req,res){
  var query = Note.find({});
  var filter = req.body.memberName;

  if(filter.length === 0){
    console.log('no notes found');
  }else{
    query.where({
      membername: filter
    })
    .sort({
      createdOn: 'desc'
    })
    .exec(function(err,results){
      res.render('index', {
        notes: results
      });
    });
  }
};

//we put all our routes here
var express = require('express');
var router= express.Router(); //router is used to create routes
var asyncCtrl = require('../controllers/async_controller');
var notesCtrl = require('../controllers/notes_controller');

//if you are using async
router.get('/',asyncCtrl.homePage);
router.post('/',notesCtrl.filternotes);
// router.get('/',function(req,res){
//   res.render('index'); //looks into views for index.html
// });
// router.get('/newnote', function(req,res){
//   res.render('newnote.html');
// });
router.get('/newnote',notesCtrl.allUsersNotes); //allUsersNotes is the function
//adding a note
router.post('/newnote',notesCtrl.createNote); //createNote function reference.
module.exports= router; //you have to export router

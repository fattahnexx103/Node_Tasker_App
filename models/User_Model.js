var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String
});

UserSchema.pre('saving',function(next){ //before saving do this
  this.username.charAt(0).toLocalUppserCase() + this.username.slice(1);
  next();
});
module.exports = mongoose.model('User',UserSchema);

'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var UserSchema = new mongoose.Schema({
  provider: String,
  name: String,
  email: String,
  password: String
});

export default mongoose.model('User', UserSchema);
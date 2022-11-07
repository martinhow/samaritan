const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/samaritan');

const { Schema } = mongoose;

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  address: String,
  email_address: String,
  mobile_number: String,
  score: Number,
});

const User = mongoose.model('Users', userSchema); // User is a js object, also a mongoose model created to represent the collection (named Users)

module.exports = User;
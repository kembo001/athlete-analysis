// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
  },
  // You can add additional fields like:
  // sport: String,
  // profilePic: String,
  // attributes: {...}
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);

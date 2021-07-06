import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please add a username']
  }, 
  email: {
    type: String,
    required: [true, 'Please add an email']
  }, 
  password: {
    type: String,
    required: [true, 'Please add a password']
  }
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)
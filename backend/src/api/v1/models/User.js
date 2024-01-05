import { Schema, model } from 'mongoose';

const userSchema = Schema({
  firstName: {
    type: String,
    required: true,
    unique: false,
  },
  lastName: {
    type: String,
    required: true,
  },
  middleInitial: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: String,
    required: false,
    default: new Date(),
  },
  updatedAt: {
    type: String,
    required: false,
    default: new Date(),
  },
  profilePicture: {
    type: String,
    required: false,
  },
});

export default model('User', userSchema, 'users');

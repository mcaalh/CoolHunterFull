import { model, Schema } from 'mongoose'

import { Role, IUser } from './users.interface';

// Schema
const UserSchema: Schema<IUser> = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    max: 32
  },
  lastName: {
    type: String,
    trim: true,
    max: 32,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
    max: 32
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  salt: Number,
    address: {
      type: String
    },
    phone: {
        type: Number,
    },
    isAdmin: {
        type: Boolean,
        default: false
  },
  profile: {
    type: String,
    required: true
    },
    role: {
        type: String,
        enum: Role,
        default: 'user',
        required: true
    },
    favourites: [{
    type: String,
    }],
    level: {
        type: Number,
        default: 1
    },
    credits: {
        type: Number,
        default: 0
    },
  socialConnection: {
    type: Map,
    of: String
  },
  resetPasswordLink: {
    data: String,
    default: ''
  }
})

export const User = model<IUser>("User", UserSchema)
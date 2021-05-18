import { model, Schema } from 'mongoose'
import crypto from 'crypto'

import { Role, IUser } from './users.interface';

// Schema
const userSchema: Schema<IUser> = new Schema({
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

userSchema
  .virtual('password')
  .set(function(password) {
    // create a temporary variable called _password
    this._password = password;

    //generate salt
    this.salt = this.makeSalt()

    //encryptPassword
    this.passwordHash = this.encryptPassword(password)
  })
  .get(function() {
    return this._password
  })

userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.passwordHash
  },
  encryptPassword: function (password) {
    if (!password) return ''
    try {
      return crypto.createHmac('sha1', this.salt).update(password).digest('hex')
    } catch (error) {
      return error();
    }    
  },
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + '';
  }
}

export const User = model<IUser>("User", userSchema)
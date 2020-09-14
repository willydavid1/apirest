import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'
import config from '../config'

const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: [{
    ref: 'Role',
    type: Schema.Types.ObjectId
  }]
}, {
  timestamps: true,
  versionKey: false
})

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(config.SALT)
  return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePassword = async (passwordNative, receiverPassword) => {
  return await bcrypt.compare(passwordNative, receiverPassword) // salida true o false | depende si coinciden las passwords
}

export default model('User', userSchema)

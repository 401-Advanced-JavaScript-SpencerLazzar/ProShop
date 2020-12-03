import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must have a name"],
    unique: [true, "Double up! Already have that name"]
  },
  password: {
    type: String,
    required: [true, "Hey give me a password!"]
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

export default mongoose
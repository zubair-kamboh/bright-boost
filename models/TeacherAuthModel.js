const mongoose = require('mongoose')
const { Schema } = mongoose

const TutorEnrollmentSchema = new Schema({
  grades: {
    type: String,
    required: true,
  },
  subjects: {
    type: String,
    required: true,
  },
  days: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  qualifications: {
    type: String,
    required: true,
  },
})

const TeacherAuthSchema = new Schema(
  {
    fullname: {
      type: String,
      maxLength: 64,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    teacherstatus: {
      type: Boolean,
      default: false,
    },
    enrollment: [TutorEnrollmentSchema],
  },
  { timestamps: true }
)

module.exports = mongoose.model('Teacher', TeacherAuthSchema)

const asynHandler = require('express-async-handler')
const TeacherAuthModel = require('../models/TeacherAuthModel')

// Tutor Enrollment
// Route: /management/gettutorrequests
const manageTutorRequest = asynHandler(async (req, res) => {
  const enrollments = await TeacherAuthModel.find({
    teacherstatus: false,
  }).populate('enrollment')

  console.log(enrollments)
})

module.exports = {
  manageTutorRequest,
}

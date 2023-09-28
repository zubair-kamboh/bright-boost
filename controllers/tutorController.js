const asynHandler = require('express-async-handler')
const TeacherAuthModel = require('../models/TeacherAuthModel')

// Tutor Enrollment
// Route: /tutor/enrollment
const tutorEnrollment = asynHandler(async (req, res) => {
  const { grades, subjects, days, method, time, email } = req.body

  const doc = await TeacherAuthModel.findOne({ email })

  doc.enrollment.push({
    grades,
    subjects,
    days,
    method,
    time,
  })

  // Update document
  await doc.save()

  if (!doc) {
    res.status(400).json({
      message: 'could not saved teacher enrollment data',
    })
  }

  res.status(200).json({
    message: 'teacher enrollment data saved',
  })
})

module.exports = {
  tutorEnrollment,
}

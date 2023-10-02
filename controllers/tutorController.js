const asynHandler = require('express-async-handler')
const TeacherAuthModel = require('../models/TeacherAuthModel')

// Tutor Enrollment
// Route: /tutor/enrollment
// Method: POST
const tutorEnrollment = asynHandler(async (req, res) => {
  const { grades, subjects, days, method, time, qualifications, email } =
    req.body

  if ((!grades || !subjects || !days || !method || !time, !qualifications)) {
    res.status(500)
    throw new Error('all fields are required!')
  }

  if (!email) {
    res.status(500)
    throw new Error('no email attached!')
  }

  const doc = await TeacherAuthModel.findOne({ email })

  if (!doc) {
    res.status(404)
    throw new Error('no tutor found with this email!')
  }

  doc.enrollment.push({
    grades,
    subjects,
    days,
    method,
    time,
    qualifications,
  })

  // Update document
  await doc.save()

  if (!doc) {
    res.status(400)
    throw new Error('could not saved teacher enrollment data')
  }

  res.status(200).json({
    message: 'teacher enrollment data saved',
  })
})

// Tutor Enrollment
// Route: /tutor/enrollment
// Method: GET
const listTutorEnrollments = asynHandler(async (req, res) => {
  const tutors = await TeacherAuthModel.find({ teacherstatus: true })
    .select('-school')
    .select('-password')
    .select('-teacherstatus')

  res.json(tutors)
})

// Courses Portal - Courses Tutoring
// Route: /tutor/course-portal/courses-tutoring
// Method: GET
const coursesTutoring = asynHandler(async (req, res) => {
  const { email } = req.body

  if (!email) {
    res.status(400)
    throw new Error('No email attached')
  }

  const courses = await TeacherAuthModel.find({ email })

  if (courses.length > 0) {
    res.status(200).json(courses)
  } else {
    res.status(404)
    throw new Error('wrong email or no course enrollment')
  }
})

module.exports = {
  tutorEnrollment,
  listTutorEnrollments,
  coursesTutoring,
}

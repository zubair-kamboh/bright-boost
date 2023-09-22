const router = require('express').Router()

const {
  studentSignUp,
  studentSignIn,
  teacherSignUp,
  teacherSignIn,
} = require('../controllers/authController')

router.post('/student/signup', studentSignUp)
router.post('/student/signin', studentSignIn)
router.post('/teacher/signup', teacherSignUp)
router.post('/teacher/signin', teacherSignIn)

module.exports = router

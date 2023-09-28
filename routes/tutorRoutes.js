const { tutorEnrollment } = require('../controllers/tutorController')

const router = require('express').Router()

router.post('/enrollment', tutorEnrollment)

module.exports = router

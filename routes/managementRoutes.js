const { manageTutorRequest } = require('../controllers/managementController')

const router = require('express').Router()

router.get('/gettutorrequests', manageTutorRequest)

module.exports = router

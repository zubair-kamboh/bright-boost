const express = require('express')
require('dotenv').config()
const connection = require('./config/db')
const errorHandler = require('./middlewares/errorHandler')
const app = express()
const cors = require('cors')

// body parser middlewares
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

// cors
app.use(cors())

// router
app.use('/api/auth', require('./routes/authRoutes'))
app.use('/payment', require('./routes/paymentRoutes'))
app.use('/tutor', require('./routes/tutorRoutes'))
app.use('/management', require('./routes/managementRoutes'))
app.use('/student', require('./routes/studentRoutes'))

// error handler
app.use(errorHandler)

// db connection
connection()

const port = process.env.PORT || 8000
const server = app.listen(port, () => console.log(`Server running on ${port}`))

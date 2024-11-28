// import
const express = require('express')
const{ registerUser, loginUser } = require('../controllers/authController')

let Router = express() 

// user registration
Router.post('/register', registerUser);

//login
Router.post('/login', loginUser);

module.exports = Router;
// import
const express = require("express");
const path = require("path");
require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

// set-up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);

app.get("/", (request, response) => {
  // return "home.html";
  response.sendFile(path.join(__dirname, 'public/home.html'));
});
app.get("/login", (request, response) => {
    // return "index.html";
response.sendFile(path.join(__dirname, 'public/login.html'));
  });
  app.get("/reg", (request, response) => {
    // return "registration.html";
    response.sendFile(path.join(__dirname, 'public/registration.html'));
  });

const PORT = process.env.PORT || 8280;

app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
});

// const express = require('express');

// import the connectiion
// const db = require('./database')

// const app = express();

// const port = 3000;

// performing CRUD operations
// CREATE
// app.get('/createTable',(req, res) => {
// const sql = `
// CREATE TABLE IF NOT EXISTS users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     email varchar(255) NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// )
// `

//run query using this method

//     db.query(sql, (err) => {
//         if(err) {
//             console.log('Error creating users table:', err)
//             return response.status(500).send('Error creating users table')
//         }

//         res.send('users table created successfully.')
//     })
// })

// app.get('/createUser', (req, res) => {
// const sql = `
// INSERT INTO users (name,email) VALUES ('Lynn', 'lynnnyaoke@gmail.com')
//`

// db.query(sql, (err) => {
// if(err) {
// console.log('Error creating users table:', err)
// return response.status(500).send('Error creating users table')
// }
// res.send('users table created successfully.')

//})

//})

// app.get('/', (req, res) => {
//     res.send('You are now using express package.')
// })

// app.listen(port, () =>{

//     console.log(`Server is running on http://localhost:${port}`)
// })

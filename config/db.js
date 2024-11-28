// import package
const mysql = require('mysql2')
require('dotenv').config();

// create connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

module.exports = pool.promise();




// import package
// const mysql = require('mysql2)
// create connection to dbms
// const db = mysql.createConnection({
// host: 'localhost',
// port: '8280' only if db has ben hosted locally
// user: 'root',
// password: '',
// database: 'database_name'
// })

// connect
// db.connect( () => ){
    // if(err){
        // console.log('Error connecting to db: ' + err.stack)
        // return;
    // }

    // console.log('Successfully connected to DB')
// })

// Export the connection
// module.exports = db

require('dotenv').config()

const express = require('express')
const configViewEngine = require('./config/ViewEngine')
const webRoutes = require('./routes/web')
// get the client
const mysql = require('mysql2')

const app = express()
const port = process.env.PORT || 8081
const hostname = process.env.HOST_NAME

//config template engine

configViewEngine(app)

//khai báo route
app.use('/', webRoutes) //tiền tố đầu tiên

//test connection
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'nonamess1',
    database: 'login'
})
//simple query
connection.query(
    'SELECT * FROM accounts',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server

    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port} in ${hostname}`)
})
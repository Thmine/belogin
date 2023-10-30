require('dotenv').config()

const express = require('express')
const configViewEngine = require('./config/ViewEngine')
const webrRoutes = require('./routes/web')
const app = express()
const port = process.env.PORT || 8081
const hostname = process.env.HOST_NAME

//config template engine

configViewEngine(app)

//khai báo route
app.use('/t', webrRoutes)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port} in ${hostname}`)
})
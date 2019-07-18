const db = require('./database/index')
const express = require('express')
const cors = require('cors')
const path = require('path')
const routes = require('./routes')
const PORT = process.env.PORT || 3400

const expressStaticGzip = require("express-static-gzip");

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//serving compressed bundle.js
app.use("/restaurants/time_sponsored", expressStaticGzip(path.resolve(__dirname,'../client/public'), {
	enableBrotli: true,
	orderPreference: ['br', 'gz']
}))

//api requests from the client
app.use('/api', routes)

//listening on 3000
app.listen(PORT, ()=> console.log("Server is up and running on ", PORT))




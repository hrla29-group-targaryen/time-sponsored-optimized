const mongoose = require('mongoose')

let DB_URL = `mongodb+srv://hackreactortest:${process.env.secret}@cluster0-7iwj5.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(DB_URL, {
	useNewUrlParser: true,
	useCreateIndex: true,
    useFindAndModify: false
})

const db = mongoose.connection
db.once('open', () => console.log("Database is up and running on 27017"));

module.exports = db
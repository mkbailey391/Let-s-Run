require('dotenv').config()

const 
    express = require('express'),
    app = express(),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    { PORT, MONGODB_URI } = process.env;

    mongoose.connect(MONGODB_URI, err => {
        console.log(err || "Connected to MongoDB.")
    })

app.use(logger('dev'))
app.use(express.json())




app.listen(PORT, (err) => {
    console.log(err || `Server running on port ${PORT}.`)
})
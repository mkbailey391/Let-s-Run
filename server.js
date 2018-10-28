require('dotenv').config()

const 
    express = require('express'),
    app = express(),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    GroupRouter = require('./routes/GroupRouter'),
    UserRouter = require('./routes/UserRouter'),
    { PORT, MONGODB_URI } = process.env;

    mongoose.connect(MONGODB_URI, err => {
        console.log(err || "Connected to MongoDB.")
    })

//Middleware
app.use(logger('dev'));
app.use(express.json());
app.use('/api/groups', GroupRouter);
app.use('/api/users', UserRouter);
app.use(express.urlencoded({extended: true})); 




app.listen(PORT, (err) => {
    console.log(err || `Server running on port ${PORT}.`)
})
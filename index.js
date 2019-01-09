const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// setup express app
const app = express();


//connect to mongo
mongoose.connect('mongodb://localhost/fakerate',{ useNewUrlParser: true });
mongoose.Promise = global.Promise;


//parse body
app.use(bodyParser.json());


//initialize routes
app.use('/api',routes);

//listen request
app.listen(4000 , function() {
    console.log('4000  is listening');
})

 
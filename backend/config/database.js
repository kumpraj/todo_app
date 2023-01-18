//  importing mongoose pakage
const mongoose = require('mongoose');

//  destructuring MONGODB_URL from .env file
const {MONGODB_URL} = process.env;

/*
    // defined connect method for database connection
    // if successfully connected - success message
    // else failure mesage with error and exits the process
*/ 
exports.connect = () => {
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(console.log('DB Connection Successful'))
    .catch((error) => {
        console.log('DB Connection Failed');
        console.log(error);
        process.exit(1);
    })
}
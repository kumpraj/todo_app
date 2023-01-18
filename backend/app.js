//  configuring dotenv package
require('dotenv').config()

//  importing express package & creating an app
const express = require('express');
const app = express()

//  importing cors package
const cors = require('cors');



app.get('/',(req,res) => {
    res.status(200).json({
        success: true,
        message: 'Homepage'
    })
});


// exporting express app setup
module.exports = app;
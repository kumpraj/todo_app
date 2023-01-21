//  configuring dotenv package
require('dotenv').config()

//  importing express package
const express = require('express');

const { dbConnect } = require('./config/database');

const todoRoutes = require('./routes/todoRoutes');
const app = express();

//  importing cors package
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// calling dbConnect fn to connect to db
dbConnect();
app.use('/',todoRoutes);


// exporting express app setup
module.exports = app;
//  configuring dotenv package
require('dotenv').config()

//  importing express package
const express = require('express');

const database = require('./config/database');

const todoRoutes = require('./routes/todoRoutes');
const app = express();

//  importing cors package
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

database();
app.use('/',todoRoutes);


// exporting express app setup
module.exports = app;
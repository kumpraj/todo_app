// import mongoose package
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required field'],
        maxLength: [50, "Name must be less than 50 characters"],
        trim: true
    },

    email: {
        type: String,
        required: [true, 'Email is a required field'],
        unique: true
    },

    password: {
        type: String,
        required: [true, 'Password is a required field'],
        minLength: [8, "password must be at least 8 characters"],
        select: false   //specify if this path should be included or excluded from query results by default.
    },

    token: {
        type: String,
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('User',userSchema);
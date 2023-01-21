//  Importing maongoose package
const mongoose = require('mongoose');


// defining todoSchema schema 
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title of the todo is required"],
        maxlength: [50, "Maximum length is 50 characters"]
    },
    tasks: {
        type: [{
            type: String
        }]
    },
    isImportant: {
        type: Boolean,
        default: false
    },
},{
    timestamps: true
})

module.exports = mongoose.model("Todo", todoSchema);
//Schema is what  mongoose will use to create the "document"  (tables) in  mongodb

var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name cannot be blank!"
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Todo = mongoose.model("Todo", todoSchema);

//is how mongoose will talk with mongodb and allow you save,create delete and put 
module.exports = Todo;
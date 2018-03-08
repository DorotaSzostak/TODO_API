var mongoose = require ('mongoose');

mongoose.set('debug', true);

//allows "mongoose.connect" to create a database named todo-api

mongoose.connect('mongodb://localhost/todo-api');

mongoose.Promise = Promise;



module.exports.Todo = require("./todo");
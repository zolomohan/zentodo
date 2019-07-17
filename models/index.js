const dbCredentials = require('../config/db');

var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://"+dbCredentials.username+":"+dbCredentials.password+"@campfire-fyj1g.mongodb.net/zenTodo?retryWrites=true&w=majority", {useNewUrlParser: true});
mongoose.Promise = global.Promise;

module.exports.Todo = require('./todo');
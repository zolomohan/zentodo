var mongoose = require('mongoose');

const dburl = process.env.DATABASEURL || "mongodb://localhost/todo-api";
mongoose.connect(dburl, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

module.exports.Todo = require('./todo');
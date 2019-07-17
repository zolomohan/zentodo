var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://zolomohan:fortmongoknox@campfire-fyj1g.mongodb.net/zenTodo?retryWrites=true&w=majority", {useNewUrlParser: true});
mongoose.Promise = global.Promise;

module.exports.Todo = require('./todo');
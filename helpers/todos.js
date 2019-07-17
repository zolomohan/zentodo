var db = require('../models');

exports.getAllTodos = function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(error){
        res.send(error);
    })
}

exports.createTodo = function(req, res){
    db.Todo.create(req.body)
    .then(function(todo){
        res.status(201).json(todo);
    })
    .catch(function(error){
        res.send(error);
    })
}

exports.getTodo = function(req, res){
    db.Todo.findById(req.params.todoid)
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(error){
        res.send(error);
    })
}

exports.updateTodo = function(req, res){
    //.findOneAndUpdate returns the old data, 
    //{new: true} will set the function to return the updated data
    db.Todo.findOneAndUpdate({_id: req.params.todoid}, req.body, {new: true})
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(error){
        res.send(error);
    })
}

exports.deleteTodo = function(req, res){
    db.Todo.findByIdAndRemove(req.params.todoid)
    .then(function(){
        res.json({message: "Todo Deleted"})
    })
    .catch(function(error){
        res.send(error);
    })
}
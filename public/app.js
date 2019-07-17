$(document).ready(function(){
    $.getJSON("/api/todos")
    .then(addTodos)

    $('#todoInput').keypress(function(event){
        if(event.which == 13) createTodo();
    })
})

function addTodo(todo){
    let newTodo =  $('<li class="task">' + todo.todo + '</li>');
    if(todo.completed) newTodo.addClass('done');
    $('.list').append(newTodo)
}

function addTodos (todos){
    todos.forEach(function(todo){
        addTodo(todo);
    })
}

function createTodo (){
    $.post('/api/todos', {todo: $('#todoInput').val()})
    .then(function(todo){
        addTodo(todo);
        $('#todoInput').val("");
    })
    .catch(function(error){
        console.log(error); 
    })
}
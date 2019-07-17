$(document).ready(function(){
    $.getJSON("/api/todos")
    .then(addTodos)
})

function addTodos (todos){
    todos.forEach(function(todo){
        let newTodo =  $('<li class="task">' + todo.todo + '</li>');
        if(todo.completed) newTodo.addClass('done');
        $('.list').append(newTodo)
    })
}
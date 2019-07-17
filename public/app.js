$(document).ready(function(){
    $.getJSON("/api/todos")
    .then(addTodos)

    $('#todoInput').keypress(function(event){
        if(event.which == 13) createTodo();
    })

    $('.list').on('click', 'span', function(event){
        event.stopPropagation();
        removeTodo($(this).parent());
    })

    $('.list').on('click', 'li', function(){
        toggleTodo($(this));
    })
})

function addTodo(todo){
    let newTodo =  $('<li class="task">' + todo.todo + '<span>x</span></li>');
    newTodo.data("id", todo._id);
    newTodo.data("completed", todo.completed);
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

function removeTodo(todo){
    $.ajax({
        method: 'DELETE',
        url: '/api/todos/'+todo.data('id'),
    })
    .then(function(){
        todo.remove(); 
    })
    .catch(function(error){
        console.log(error);
    })
}

function toggleTodo(todo){
    var isDone = !todo.data('completed');
    var updateData = {completed: isDone};
    $.ajax({
        method: 'PUT',
        url: '/api/todos/'+todo.data('id'),
        data: updateData
    })
    .then(function(){
        todo.data('completed', isDone);
        todo.toggleClass('done');
    })
    .catch(function(error){
        console.log(error)
    })
}
$(document).ready(function(){
    $('#todoInput').keypress(function(event){ 
        if(event.which == 13) {
            let todo = $(this).val().trim();
            if(!(todo === "")) 
                createTodo();
        }
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
    let newTodo =  $('<li class="task" id='+todo._id+'>' + todo.todo + '<span><i class="fas fa-trash-alt"></i></span></li>');
    newTodo.data("completed", todo.completed);
    if(todo.completed) newTodo.addClass('done');
    $('.list').append(newTodo)
}

function createTodo(){
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
        url: '/api/todos/'+todo.attr('id'),
    })
    .then(function(){
        todo.remove(); 
    })
    .catch(function(error){
        console.log(error);
    })
}

function toggleTodo(todo){
    var isDone = !todo.hasClass('done');
    var updateData = {completed: isDone};
    $.ajax({
        method: 'PUT',
        url: '/api/todos/'+todo.attr('id'),
        data: updateData
    })
    .then(function(){
        todo.toggleClass('done');
    })
    .catch(function(error){
        console.log(error)
    })
}
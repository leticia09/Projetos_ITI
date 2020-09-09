// Tentando pegar insert do meu jeito. Não deu certo. Ver com o lusca depois.

/*let add_list = document.querySelector('.todo-input');
//const todoButton = document.querySelector('.todo-bottom')
let res_lis = document.querySelector('.todo-container');

function adicionar() {
    res_lis.innerHTML = add_list.value;
}*/

//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector("#filter-todo");

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
//document.addEventListener("DOMContentLoaded", getTodos);


//Functions
function addTodo(event) {
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //ADD todo to LocalStorage
    saveLocalTodos(todoInput.value)
    //check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    // Para limpar o Input:
    todoInput.value = " ";
}

function deleteCheck(e) {
    //console.log(e.target);
    const item = e.target; // O e.target é o endereço?
    //Delete Todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add("fall");
        removeLocalTodos(todo);

        //item.remove();
        // Está transparente, para deletar de vez:
        // sem esse é mais rápido. Mostrar sem:
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    // childNodes não sei porque
    const todos = todoList.childNodes;
    //console.log(todos);
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    //não entendi porque desaparece os outros usando apenas o display flex do css
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}
function saveLocalTodos(todo) {
    //check-- Do I already have thing in there?
    let todos;
    // Não entendi esse IF
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(function (todo) {
        todo.todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        //create LI
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        //check mark button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class = "fas fa-check"></i>'
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
        //check trash button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class = "fas fa-trash"></i>'
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        //append to list
        todoList.appendChild(todoDiv);
    });
}
// Não funcionou 
function removeLocalTodos(todo) {
    //check-- Do I already have thing in there?
    let todos;
    // Não entendi esse IF
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}
// Tentando pegar insert do meu jeito. Não deu certo. Ver com o lusca depois.

// let add_list = document.querySelector('#insert').value;
// const todoButton = document.querySelector('.todo-bottom')
// let res_lis = document.getElementById('list');

// function adicionar() {
//     res_lis.innerHTML = add_list;
// }


//selectors
const todoInput = document.querySelector(".todo-input");
//const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
//todoButton.addEventListener('click', addTodo);

//Functions
function addTodo(){
    //Não sei para que serve
   // event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = "hey";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class = "fas fa-trash"></i>'
    completedButton.classList.add("complete-btn");
    tudoDiv.appendChild(completedButton);
    //check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class = "fas fa-check"></i>'
    trashButton.classList.add("trash-btn");
    tudoDiv.appendChild(completeButton);
    //append to list
    todoList.appendChild(todoDiv);
}
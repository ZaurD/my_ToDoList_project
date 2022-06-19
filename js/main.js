
const newToDo = new ToDoList();

const text = document.querySelector('.input');
const add =  document.querySelector('.add');
const list = document.querySelector('.list');
const clearAll = document.querySelector('#clearAll');
const clearCompleted = document.querySelector('#clearCompleted');
const search = document.querySelector('#search');
const allTasks = document.querySelector('#allTasks');
const completedTasks = document.querySelector('#completedTasks');
const tobeDone = document.querySelector('#tobeDone');

search.addEventListener('click', function(){
    if(!text.value) return;
    let newArray = newToDo.toDos.filter(function (toDo)
    {
        return toDo.title === text.value;
    });
    if(newArray.length > 0){
        newToDo.toDos = newArray;
        displayToDoList();
    }
    else alert('Nothing was found!')
    text.value = '';
});

allTasks.addEventListener('click', function(){
    newToDo.toDos = JSON.parse(localStorage.getItem('todo'));
    displayToDoList();  
});

completedTasks.addEventListener('click', function(){
    newToDo.toDos = JSON.parse(localStorage.getItem('todo'));
    let newArray = newToDo.toDos.filter(function (toDo)
    {
        return toDo.isDone === true;
    });
    if(newArray.length > 0){
        newToDo.toDos = newArray;
        displayToDoList();
    }
});

tobeDone.addEventListener('click', function(){
    newToDo.toDos = JSON.parse(localStorage.getItem('todo'));
    let newArray = newToDo.toDos.filter(function (toDo)
    {
        return toDo.isDone === false;
    });
    if(newArray.length > 0){
        newToDo.toDos = newArray;
        displayToDoList();
    }
});

add.addEventListener('click', function(){
    if(!text.value) return;
    newToDo.addToDo(new ToDo(text.value));
    localStorage.setItem('todo', JSON.stringify(newToDo.toDos));
    text.value = '';
    displayToDoList();
});

clearAll.addEventListener("click", function () {
    newToDo.toDos = []
    localStorage.setItem("todo", JSON.stringify(newToDo.toDos));
    list.innerHTML = '';
    displayToDoList()
});

clearCompleted.addEventListener("click", function(){
    let newArray = newToDo.toDos.filter(function (toDo)
    {
        return toDo.isDone === false;
    });
    newToDo.toDos = newArray;
    localStorage.setItem("todo", JSON.stringify(newToDo.toDos));
    displayToDoList();
});

list.addEventListener('change', function(event){
    let idInput = event.target.getAttribute('id')
    let forLabel = list.querySelector('[for=' + idInput + ']')
    let valueLabel = forLabel.innerHTML;
    
    newToDo.toDos.forEach(function(item){
        if(item.title === valueLabel){
            item.isDone = !item.isDone;
            localStorage.setItem('todo', JSON.stringify(newToDo.toDos))
        }
    });
});

if(localStorage.getItem('todo')){
    newToDo.toDos = JSON.parse(localStorage.getItem('todo'));
    displayToDoList();
}

if(!localStorage.getItem('todo')){
    newToDo.toDos = []
}

function displayToDoList(){
    let displayToDo = '';
    if(newToDo.toDos.length === 0) {
        list.innerHTML = '';
        localStorage.clear(); 
    }
    newToDo.toDos.forEach(function(item, i){
        displayToDo += ` 
        <li>
            <input type='checkbox' id= 'item_${i}' ${item.isDone ? 'checked' : ''}> 
            <label for= 'item_${i}'>${item.title}</label>
            <br>
            <span> Data created: ${item.date}</span>
        </li>
        `;
        list.innerHTML = displayToDo;
    });
}
const newToDo = new ToDoList();
const toDoListRender = new ToDoListRender();

const text = document.querySelector('.input');
const add =  document.querySelector('.add');
const list = document.querySelector('.list');
const clearAll = document.querySelector('#clearAll');
const clearCompleted = document.querySelector('#clearCompleted');
const search = document.querySelector('#search');
const allTasks = document.querySelector('#allTasks');
const completedTasks = document.querySelector('#completedTasks');
const tobeDone = document.querySelector('#tobeDone');

add.addEventListener('click', function(){
    if(!text.value) return;
    newToDo.addToDo(text.value);
    text.value = '';
    newToDo.displayToDoList();
});

search.addEventListener('click', function(){
    if(!text.value) return;
    let newArray = newToDo.searchToDo(text.value)
    if(newArray.length > 0){
        newToDo.toDos = newArray;
        newToDo.displayToDoList();
    }
    else alert('Nothing was found!')
    text.value = '';
});

allTasks.addEventListener('click', function(){
    newToDo.updateToDoList();
    newToDo.displayToDoList();  
});

completedTasks.addEventListener('click', function(){
    newToDo.updateToDoList();
    let newArray = newToDo.completedTasks();
    if(newArray.length > 0){
        newToDo.toDos = newArray;
        newToDo.displayToDoList();
    }
});

tobeDone.addEventListener('click', function(){
    newToDo.updateToDoList();
    let newArray = newToDo.tobeDone();
    if(newArray.length > 0){
        newToDo.toDos = newArray;
        newToDo.displayToDoList();
    }
});

clearAll.addEventListener("click", function () {
    newToDo.toDos = newToDo.clearAll()
    list.innerHTML = '';
    newToDo.displayToDoList()
});

clearCompleted.addEventListener("click", function(){
    newToDo.toDos = newToDo.clearCompleted();
    newToDo.displayToDoList();
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
    newToDo.updateToDoList();
    newToDo.displayToDoList();
}
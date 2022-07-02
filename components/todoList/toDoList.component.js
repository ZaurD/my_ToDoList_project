
const data = new Storage();
const newToDo = new ToDoList(data);
const toDoListRender = new ToDoListRender();

toDoListRender.newTodoAdd.addEventListener('click', function(){
    if(!toDoListRender.newTodoInput.value)return;
    newToDo.addToDo(toDoListRender.newTodoInput.value);
    data.saveData(newToDo.toDos);
    toDoListRender.newTodoInput.value = '';
    displayToDoList();
});

toDoListRender.search.addEventListener('click', function(){
    if(!toDoListRender.newTodoInput.value) return;
    let newArray = newToDo.searchToDo(toDoListRender.newTodoInput.value)
    if(newArray.length > 0){
        newToDo.toDos = newArray;
        displayToDoList();
    }
    else alert('Nothing was found!')
    toDoListRender.newTodoInput.value = '';
    newToDo.toDos = data.updateData();
});

toDoListRender.allTasks.addEventListener('click', function(){
    newToDo.toDos = data.updateData();
    displayToDoList();
});

toDoListRender.completedTasks.addEventListener('click', function(){
    newToDo.toDos = data.updateData();
    let newArray = newToDo.completedTasks();
    if(newArray.length > 0){
        newToDo.toDos = newArray;
        displayToDoList();
    }
});

toDoListRender.tobeDone.addEventListener('click', function(){
    newToDo.toDos = data.updateData();
    let newArray = newToDo.tobeDone();
    if(newArray.length > 0){
        newToDo.toDos = newArray;
        displayToDoList();
    }
});

toDoListRender.clearAll.addEventListener("click", function () {
    newToDo.toDos = newToDo.clearAll()
    toDoListRender.newTodoList.innerHTML = '';
    data.saveData(newToDo.toDos);
    newToDo.toDos = [];
    displayToDoList()
});

toDoListRender.clearCompleted.addEventListener("click", function(){
    newToDo.toDos = newToDo.tobeDone();
    data.saveData(newToDo.toDos);
    displayToDoList();
});

toDoListRender.newTodoList.addEventListener('change', function(event){
    let idInput = event.target.getAttribute('id')
    let forLabel = toDoListRender.newTodoList.querySelector('[for=' + idInput + ']')
    let valueLabel = forLabel.innerHTML;

    newToDo.toDos.forEach(function(item){
        if(item.title === valueLabel){
            item.isDone = !item.isDone;
            data.saveData(newToDo.toDos);
        }
    });
});

function displayToDoList(){
    let displayToDo = '';
    if(newToDo.toDos.length === 0) {
      toDoListRender.newTodoList.innerHTML = '';
        newToDo.toDos = [];
        data.saveData(newToDo.toDos);
    }
    newToDo.toDos.forEach((item, i) => {
        displayToDo += ` 
        <li>
            <input type='checkbox' id= 'item_${i}' ${item.isDone ? 'checked' : ''}> 
            <label for= 'item_${i}'>${item.title}</label>
            <br>
            <span> Data created: ${item.date}</span>
        </li>
        `;
        toDoListRender.newTodoList.innerHTML = displayToDo;
    });
  }

window.onload = (event) => {
    if(localStorage.getItem('todo')){
        newToDo.toDos = data.updateData();;
        displayToDoList();
    }
};

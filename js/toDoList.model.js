class ToDoList{

  constructor() {
    this.toDos = JSON.parse(localStorage.getItem('todos')) || []
  }
    
  addToDo(todoText) {
    const todo = {
      id: Math.floor(Math.random() * 9999),
      title: todoText,
      date : new Date().toLocaleString(),
      isDone : false
    }
    this.toDos.push(todo)
    localStorage.setItem('todo', JSON.stringify(this.toDos));
  }

  searchToDo(todoText){
    this.toDos = this.toDos.filter(function (toDo)
    {
        return toDo.title === todoText;
    });
    return this.toDos
  }
  
  completedTasks(){
    this.toDos = this.toDos.filter(function (toDo)
    {
        return toDo.isDone === true;
    });
    return this.toDos
  }

  tobeDone(){
    this.toDos = this.toDos.filter(function (toDo)
    {
        return toDo.isDone === false;
    });
    return this.toDos
  }

  updateToDoList(){
    this.toDos = JSON.parse(localStorage.getItem('todo'));
  }

  clearAll(){
    this.toDos = [];
    localStorage.setItem("todo", JSON.stringify(this.toDos));
  }

  clearCompleted(){
    this.toDos = this.toDos.filter(function (toDo)
    {
        return toDo.isDone === false;
    });
    localStorage.setItem("todo", JSON.stringify(this.toDos));
    return this.toDos
  }

  displayToDoList(){
    let displayToDo = '';
    if(this.toDos.length === 0) {
        list.innerHTML = '';
        this.toDos = [];
        localStorage.setItem("todo", JSON.stringify(this.toDos));
    }
    this.toDos.forEach(function(item, i){
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
}

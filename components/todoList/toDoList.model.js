class ToDoList {

  constructor(initialData = []) {
    this.toDos = initialData;
  }
    
  addToDo(todoText) {
    if(this.toDos.find(o => o.title === todoText)) {
      alert("duplicates found")
    }
    else {
    const todo = {
      id: Math.floor(Math.random() * 9999),
      title: todoText,
      date : new Date().toLocaleString(),
      isDone : false
    }
      this.toDos.push(todo)
    }
  }

  searchToDo(todoText) {
    this.toDos = this.toDos.filter(function (toDo) {
      return toDo.title === todoText;
    });
    return this.toDos
  }
  
  completedTasks() {
    this.toDos = this.toDos.filter(function (toDo) {
      return toDo.isDone === true;
    });
    return this.toDos
  }

  tobeDone() {
    this.toDos = this.toDos.filter(function (toDo) {
      return toDo.isDone === false;
    });
    return this.toDos
  }

  clearAll() {
    this.toDos = [];
  }

  clearCompleted() {

    this.toDos = this.toDos.filter(function (toDo) {
      return toDo.isDone === false;
    });
    return this.toDos
  }
}

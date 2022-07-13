import ToDo from "./toDo.model";

export default class ToDoList {
  todo: ToDo;
  toDos: ToDo[];

  constructor(initialData = []) {
    this.toDos = initialData;
  }

  addToDo(todoText: string) {
    if (this.toDos.find((o) => o.title === todoText)) {
      alert("duplicates found");
    } else {
      this.todo = new ToDo(todoText);
      this.toDos.push(this.todo);
    }
  }

  searchToDo(todoText: string): ToDo[] {
    this.toDos = this.toDos.filter(function (toDo) {
      return toDo.title === todoText;
    });
    {
      return this.toDos;
    }
  }

  completedTasks(): ToDo[] {
    this.toDos = this.toDos.filter(function (toDo) {
      return toDo.isDone === true;
    });
    {
      return this.toDos;
    }
  }

  tobeDone(): ToDo[] {
    this.toDos = this.toDos.filter(function (toDo) {
      return toDo.isDone === false;
    });
    {
      return this.toDos;
    }
  }

  clearAll(): ToDo[] {
    this.toDos = [];
    {
      return this.toDos;
    }
  }

  clearCompleted(): ToDo[] {
    this.toDos = this.toDos.filter(function (toDo) {
      return toDo.isDone === false;
    });
    {
      return this.toDos;
    }
  }
}

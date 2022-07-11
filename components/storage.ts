import ToDoList from "./todoList/toDoList.model";

export default class ToDoListStorage {
    
  storage: ToDoList[];

  constructor() {
    this.storage = this.updateData();
  }

  saveData(data: ToDoList[] ) {
      localStorage.setItem('todo', JSON.stringify(data));
  }

  updateData() {
    if(localStorage.getItem('todo')) {
      return JSON.parse(localStorage.getItem('todo'));
    }
  }
}
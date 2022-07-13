import ToDo from "./todoList/models/toDo.model";

export default class ToDoListStorage {
  storage: ToDo[];

  constructor() {
    this.storage = this.updateData();
  }

  saveData(data: ToDo[]) {
    localStorage.setItem("todo", JSON.stringify(data));
  }

  updateData(): ToDo[] {
    if (localStorage.getItem("todo")) {
      return JSON.parse(localStorage.getItem("todo"));
    }
  }
}

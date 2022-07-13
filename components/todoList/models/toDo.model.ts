export default class ToDo {
  id: number;
  title: string;
  date: string;
  isDone: boolean;

  constructor(todoText: string) {
    this.id = Math.floor(Math.random() * 9999);
    this.title = todoText;
    this.date = new Date().toLocaleString();
    this.isDone = false;
  }
}

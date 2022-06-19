class ToDoList{
    toDos = [];
    newHtml = new ToDoListCreateHtml();

    constructor(toDos){
        this.toDos = toDos;
    }
    
    addToDo(toDo){
        this.toDos = [...this.toDos, toDo];
    }
}

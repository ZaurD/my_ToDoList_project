class ToDoList{
    toDos = [];

    constructor(toDos){
        this.toDos = toDos;
    }
    
    addToDo(toDo){
        this.toDos = [...this.toDos,toDo];
    }
}

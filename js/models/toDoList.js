class ToDoList{
    toDos = [];

    construktor(toDos){
        this.toDos = toDos;
    }
    
    addToDo(toDo){
        this.toDos = [...this.toDos,toDo];
    }
}

class ToDo {
    id = Math.floor(Math.random() * 9999);
    title;
    date = new Date().toLocaleString();
    isDone = false;

    constructor(title){
        this.title = title;
    }
} 



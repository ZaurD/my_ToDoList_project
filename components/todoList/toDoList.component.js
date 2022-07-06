class ToDoListComponent {

    constructor() {
        this.data = new Storage();
        this.newToDo = new ToDoList(this.data);
        this.toDoListRender = new ToDoListRender();

        this.toDoListRender.newTodoAdd.addEventListener('click', () => {
            if(!this.toDoListRender.newTodoInput.value)return;
            this.newToDo.addToDo(this.toDoListRender.newTodoInput.value);
            this.data.saveData(this.newToDo.toDos);
            this.toDoListRender.newTodoInput.value = '';
            displayToDoList();
        });

        this.toDoListRender.search.addEventListener('click', () => {
            if(!this.toDoListRender.newTodoInput.value) return;
            let newArray = this.newToDo.searchToDo(this.toDoListRender.newTodoInput.value)
            if(newArray.length > 0){
                this.newToDo.toDos = newArray;
                displayToDoList();
            }
            else alert('Nothing was found!')
            this.toDoListRender.newTodoInput.value = '';
            this.newToDo.toDos = this.data.updateData();
        });

        this.toDoListRender.allTasks.addEventListener('click', () => {
            this.newToDo.toDos = this.data.updateData();
            displayToDoList();
        });
        
        this.toDoListRender.completedTasks.addEventListener('click', () => {
            this.newToDo.toDos = this.data.updateData();
            let newArray = this.newToDo.completedTasks();
            if(newArray.length > 0){
                this.newToDo.toDos = newArray;
                displayToDoList();
            }
        });
        
        this.toDoListRender.tobeDone.addEventListener('click', () => {
            this.newToDo.toDos = this.data.updateData();
            let newArray = this.newToDo.tobeDone();
            if(newArray.length > 0){
                this.newToDo.toDos = newArray;
                displayToDoList();
            }
        });
        
        this.toDoListRender.clearAll.addEventListener("click", () => {
            this.newToDo.toDos = this.newToDo.clearAll()
            this.toDoListRender.newTodoList.innerHTML = '';
            this.data.saveData(this.newToDo.toDos);
            this.newToDo.toDos = [];
            displayToDoList()
        });
        
        this.toDoListRender.clearCompleted.addEventListener("click", () => {
            this.newToDo.toDos = this.newToDo.tobeDone();
            this.data.saveData(this.newToDo.toDos);
            displayToDoList();
        });
        
        this.toDoListRender.newTodoList.addEventListener('change', (event) => {
            let idInput = event.target.getAttribute('id')
            let forLabel = this.toDoListRender.newTodoList.querySelector('[for=' + idInput + ']')
            let valueLabel = forLabel.innerHTML;
        
            this.newToDo.toDos.forEach((item) => {
                if(item.title === valueLabel){
                    item.isDone = !item.isDone;
                    this.data.saveData(this.newToDo.toDos);
                }
            });
        });

        window.onload = (event) => {
            if(localStorage.getItem('todo')) {
                app.newToDo.toDos = app.data.updateData();
                displayToDoList();
            }
        };

        const displayToDoList = () => {
            let displayToDo = '';
            if(this.newToDo.toDos.length === 0) {
            this.toDoListRender.newTodoList.innerHTML = '';
                this.newToDo.toDos = [];
                this.data.saveData(app.newToDo.toDos);
            }
            this.newToDo.toDos.forEach((item, i) => {
                displayToDo += ` 
                <li>
                    <input type='checkbox' id= 'item_${i}' ${item.isDone ? 'checked' : ''}> 
                    <label for= 'item_${i}'>${item.title}</label>
                    <br>
                    <span> Data created: ${item.date}</span>
                </li>
                `;
                this.toDoListRender.newTodoList.innerHTML = displayToDo;
            });
        }
    }
}

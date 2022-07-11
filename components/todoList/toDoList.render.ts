export default class ToDoListRender {

    newTodoInput;
    newTodoAdd;
    newTodoList;
    clearAll;
    clearCompleted;
    search;
    allTasks;
    completedTasks;
    tobeDone;

    constructor() {
        const title = this.getTitleElement();
        const main = this.getMainElement();
        const wrapper = this.getWrapperElemet();
        this.newTodoInput = this.getInputElement();
        this.newTodoAdd = this.getAddButtonElement();
        this.search = this.getSearchButtonElement();
        this.allTasks = this.getAllTaskButtonElement();
        this.completedTasks = this.getCompletedTasksButtonElement();
        this.tobeDone = this.getTobeDoneButtonElement();
        this.clearCompleted = this.getClearCompletedButtonElement();
        this.clearAll = this.getClearAllButtonElement();
        this.newTodoList = this.getListElement();
        
        document.querySelector('.todoList').append(title, main, wrapper);
        main.append(this.newTodoInput,
                    this.newTodoAdd, 
                    this.search, 
                    this.allTasks, 
                    this.completedTasks, 
                    this.tobeDone, 
                    this.clearCompleted, 
                    this.clearAll);
        wrapper.append(this.newTodoList)
    }

    getTitleElement() {
        const title = document.createElement('h1');
        title.classList.add('todoList__title');
        title.textContent = 'ToDo List';
        return title;
    }

    getMainElement() {
        const main = document.createElement('div');
        main.classList.add('todoList__main');
        return main;
    }

    getInputElement() {
        this.newTodoInput = document.createElement('input');
        this.newTodoInput.classList.add('todoList__input');
        this.newTodoInput.placeholder = 'Text';
        return this.newTodoInput;
    }

    getAddButtonElement() {
        this.newTodoAdd = document.createElement('button');
        this.newTodoAdd.classList.add('todoList__button');
        this.newTodoAdd.textContent = 'Add';
        return this.newTodoAdd;
    }

    getSearchButtonElement() {
        this.search = document.createElement('button');
        this.search.classList.add('todoList__button');
        this.search.setAttribute('id', 'search');
        this.search.textContent = 'Search';
        return this.search;
    }

    getAllTaskButtonElement() {
        this.allTasks = document.createElement('button');
        this.allTasks.classList.add('todoList__button');
        this.allTasks.setAttribute('id', 'allTasks');
        this.allTasks.textContent = 'All tasks';
        return this.allTasks;
    }

    getCompletedTasksButtonElement() {
        this.completedTasks = document.createElement('button');
        this.completedTasks.classList.add('todoList__button');
        this.completedTasks.setAttribute('id', 'completedTasks');
        this.completedTasks.textContent = 'Completed tasks';
        return this.completedTasks;
    }

    getTobeDoneButtonElement() {
        this.tobeDone = document.createElement('button');
        this.tobeDone.classList.add('todoList__button');
        this.tobeDone.setAttribute('id', 'tobeDone');
        this.tobeDone.textContent = 'To be done';
        return this.tobeDone;
    }

    getClearCompletedButtonElement() {
        this.clearCompleted = document.createElement('button');
        this.clearCompleted.classList.add('todoList__button');
        this.clearCompleted.setAttribute('id', 'clearCompleted');
        this.clearCompleted.textContent = 'Delete completed';
        return this.clearCompleted;
    }

    getClearAllButtonElement() {
        this.clearAll = document.createElement('button');
        this.clearAll.classList.add('todoList__button');
        this.clearAll.setAttribute('id', 'clearAll');
        this.clearAll.textContent = 'Delete all';
        return this.clearAll;
    }

    getWrapperElemet() {
        const wrapper = document.createElement('div');
        return wrapper;
    }

    getListElement() {
        this.newTodoList = document.createElement('ol');
        this.newTodoList.classList.add('todoList__tasks');
        return this.newTodoList;
    }
}









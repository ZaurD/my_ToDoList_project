class ToDoListCreateHtml{
    constructor() {
        const title = document.createElement('h1');
        const main = document.createElement('div');
        const input = document.createElement('input');
        const addButton = document.createElement('button');
        const searchButton = document.createElement('button');
        const allTasksButton = document.createElement('button');
        const completedTasksButton = document.createElement('button');
        const tobeDoneButton= document.createElement('button');
        const clearCompletedButton = document.createElement('button');
        const clearAllButton = document.createElement('button');
        const wrapper = document.createElement('div');
        const list = document.createElement('ol');

        title.classList.add('title');
        title.textContent = 'ToDo List';
        main.classList.add('main');
        input.classList.add('input');
        input.placeholder = 'Text';
        addButton.classList.add('add');
        addButton.textContent = 'Add';
        clearCompletedButton.classList.add('button');
        clearCompletedButton.setAttribute('id', 'clearCompleted')
        clearCompletedButton.textContent = 'Clear completed';
        clearAllButton.classList.add('button');
        clearAllButton.setAttribute('id', 'clearAll')
        clearAllButton.textContent = 'Clear all';
        searchButton.classList.add('button');
        searchButton.setAttribute('id', 'search')
        searchButton.textContent = 'Search';
        allTasksButton.classList.add('button');
        allTasksButton.setAttribute('id', 'allTasks')
        allTasksButton.textContent = 'All tasks';
        completedTasksButton.classList.add('button');
        completedTasksButton.setAttribute('id', 'completedTasks')
        completedTasksButton.textContent = 'Completed tasks';
        tobeDoneButton.classList.add('button');
        tobeDoneButton.setAttribute('id', 'tobeDone')
        tobeDoneButton.textContent = 'To be done';
        list.classList.add('list')

        document.querySelector('.container').appendChild(title);
        document.querySelector('.container').appendChild(main);
        document.querySelector('.container').appendChild(wrapper);
        main.append(input,addButton, searchButton, allTasksButton, completedTasksButton, tobeDoneButton, clearCompletedButton,  clearAllButton);
        wrapper.append(list)
    }
}









const text = document.querySelector('.input');
const add =  document.querySelector('.add');
const toDo = document.querySelector('.to-do');
const clearAll = document.querySelector('.clearAll');
const clearIsDone = document.querySelector('.clearIsDone');
let toDoId = 0;
let toDoList = [];

if(localStorage.getItem('todo')){
    toDoList = JSON.parse(localStorage.getItem('todo'));
    displayToDoList();
}

add.addEventListener('click', function(){
    if(!text.value) return;
    const newToDo = {
        id: toDoId,
        title: text.value,
        date : new Date().toLocaleString(),
        isDone: false
    };
    toDoList.push(newToDo);
    displayToDoList();
    localStorage.setItem('todo', JSON.stringify(toDoList));
    text.value = '';
    toDoId++;
});

function displayToDoList(){
    let displayToDo = '';
    if(toDoList.length === 0) {
        toDo.innerHTML = '';
        localStorage.clear(); 
    }
    toDoList.forEach(function(item, i){
        displayToDo += ` 
        <li>
            <input type='checkbox' id= 'item_${i}' ${item.isDone ? 'checked' : ''}> 
            <label for= 'item_${i}'>${item.title}</label>
            <br>
            <span> Data created: ${item.date}</span>
        </li>
        `;
        toDo.innerHTML = displayToDo;
    });
}

toDo.addEventListener('change', function(event){
    let idInput = event.target.getAttribute('id')
    let forLabel = toDo.querySelector('[for=' + idInput + ']')
    let valueLabel = forLabel.innerHTML;
    
    toDoList.forEach(function(item){

        if(item.title === valueLabel){
            item.isDone = !item.isDone;
            localStorage.setItem('todo', JSON.stringify(toDoList))
        }
    });
});

clearAll.addEventListener("click", function () {
    toDoList = []
    localStorage.setItem("todo", JSON.stringify(toDoList));
    toDo.innerHTML = '';
    displayToDoList()
    toDoId = 0;
  });

clearIsDone.addEventListener("click", function(){
    let newArray = toDoList.filter(function (toDo)
    {
        return toDo.isDone === false;
    });
    toDoList = newArray;
    displayToDoList();
});


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define("components/weather/weather.model", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class WeatherModel {
        constructor(apiKey, cityName) {
            this.apiKey = apiKey;
            this.cityName = cityName;
        }
        getWeather() {
            return __awaiter(this, void 0, void 0, function* () {
                const path = `http://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&APPID=${this.apiKey}&units=metric`;
                const res = yield fetch(path);
                const json = yield res.json();
                return json;
            });
        }
    }
    exports.default = WeatherModel;
});
define("components/weather/weather.render", ["require", "exports", "components/weather/weather.model"], function (require, exports, weather_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class WeatherRender {
        constructor(apiKey, cityName) {
            this.apiKey = apiKey;
            this.cityName = cityName;
            const weather = new weather_model_1.default(this.apiKey, this.cityName);
            weather
                .getWeather()
                .then((data) => {
                document.querySelector(".weather").innerHTML = `<marquee direction="right" scrollamount="5"> 
            ${data.name}, today: &emsp;
            Temperature: ${data.main.temp.toFixed()}&deg;C &emsp;     
            Feel like: ${data.main.feels_like.toFixed()}&deg;C &emsp;   
            Humidity: ${data.main.humidity}% &emsp; 
            Wind: ${data.wind.speed} km/h &emsp; 
            Pressure: ${data.main.pressure}
            </marquee>`;
            })
                .catch((err) => {
                console.log(err.meassge);
            });
        }
    }
    exports.default = WeatherRender;
});
define("components/weather/weather.component", ["require", "exports", "components/weather/weather.render"], function (require, exports, weather_render_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class WeatherComponent {
        constructor() {
            const apiKey = "fe7cf4ee8c45887512f56fdea9f93d1a";
            const cityName = "Baku";
            new weather_render_1.default(apiKey, cityName);
        }
    }
    exports.default = WeatherComponent;
});
define("components/todoList/models/toDo.model", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ToDo {
        constructor(todoText) {
            this.id = Math.floor(Math.random() * 9999);
            this.title = todoText;
            this.date = new Date().toLocaleString();
            this.isDone = false;
        }
    }
    exports.default = ToDo;
});
define("components/storage", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ToDoListStorage {
        constructor() {
            this.storage = this.updateData();
        }
        saveData(data) {
            localStorage.setItem("todo", JSON.stringify(data));
        }
        updateData() {
            if (localStorage.getItem("todo")) {
                return JSON.parse(localStorage.getItem("todo"));
            }
        }
    }
    exports.default = ToDoListStorage;
});
define("components/todoList/toDoList.render", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ToDoListRender {
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
            document.querySelector(".todoList").append(title, main, wrapper);
            main.append(this.newTodoInput, this.newTodoAdd, this.search, this.allTasks, this.completedTasks, this.tobeDone, this.clearCompleted, this.clearAll);
            wrapper.append(this.newTodoList);
        }
        getTitleElement() {
            const title = document.createElement("h1");
            title.classList.add("todoList__title");
            title.textContent = "ToDo List";
            {
                return title;
            }
        }
        getMainElement() {
            const main = document.createElement("div");
            main.classList.add("todoList__main");
            {
                return main;
            }
        }
        getInputElement() {
            this.newTodoInput = document.createElement("input");
            this.newTodoInput.classList.add("todoList__input");
            this.newTodoInput.placeholder = "Text";
            {
                return this.newTodoInput;
            }
        }
        getAddButtonElement() {
            this.newTodoAdd = document.createElement("button");
            this.newTodoAdd.classList.add("todoList__button");
            this.newTodoAdd.textContent = "Add";
            {
                return this.newTodoAdd;
            }
        }
        getSearchButtonElement() {
            this.search = document.createElement("button");
            this.search.classList.add("todoList__button");
            this.search.setAttribute("id", "search");
            this.search.textContent = "Search";
            {
                return this.search;
            }
        }
        getAllTaskButtonElement() {
            this.allTasks = document.createElement("button");
            this.allTasks.classList.add("todoList__button");
            this.allTasks.setAttribute("id", "allTasks");
            this.allTasks.textContent = "All tasks";
            {
                return this.allTasks;
            }
        }
        getCompletedTasksButtonElement() {
            this.completedTasks = document.createElement("button");
            this.completedTasks.classList.add("todoList__button");
            this.completedTasks.setAttribute("id", "completedTasks");
            this.completedTasks.textContent = "Completed tasks";
            {
                return this.completedTasks;
            }
        }
        getTobeDoneButtonElement() {
            this.tobeDone = document.createElement("button");
            this.tobeDone.classList.add("todoList__button");
            this.tobeDone.setAttribute("id", "tobeDone");
            this.tobeDone.textContent = "To be done";
            {
                return this.tobeDone;
            }
        }
        getClearCompletedButtonElement() {
            this.clearCompleted = document.createElement("button");
            this.clearCompleted.classList.add("todoList__button");
            this.clearCompleted.setAttribute("id", "clearCompleted");
            this.clearCompleted.textContent = "Delete completed";
            {
                return this.clearCompleted;
            }
        }
        getClearAllButtonElement() {
            this.clearAll = document.createElement("button");
            this.clearAll.classList.add("todoList__button");
            this.clearAll.setAttribute("id", "clearAll");
            this.clearAll.textContent = "Delete all";
            {
                return this.clearAll;
            }
        }
        getWrapperElemet() {
            const wrapper = document.createElement("div");
            {
                return wrapper;
            }
        }
        getListElement() {
            this.newTodoList = document.createElement("ol");
            this.newTodoList.classList.add("todoList__tasks");
            {
                return this.newTodoList;
            }
        }
    }
    exports.default = ToDoListRender;
});
define("components/todoList/models/toDoList.model", ["require", "exports", "components/todoList/models/toDo.model"], function (require, exports, toDo_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ToDoList {
        constructor(initialData = []) {
            this.toDos = initialData;
        }
        addToDo(todoText) {
            if (this.toDos.find((o) => o.title === todoText)) {
                alert("duplicates found");
            }
            else {
                this.todo = new toDo_model_1.default(todoText);
                this.toDos.push(this.todo);
            }
        }
        searchToDo(todoText) {
            this.toDos = this.toDos.filter(function (toDo) {
                return toDo.title === todoText;
            });
            {
                return this.toDos;
            }
        }
        completedTasks() {
            this.toDos = this.toDos.filter(function (toDo) {
                return toDo.isDone === true;
            });
            {
                return this.toDos;
            }
        }
        tobeDone() {
            this.toDos = this.toDos.filter(function (toDo) {
                return toDo.isDone === false;
            });
            {
                return this.toDos;
            }
        }
        clearAll() {
            this.toDos = [];
            {
                return this.toDos;
            }
        }
        clearCompleted() {
            this.toDos = this.toDos.filter(function (toDo) {
                return toDo.isDone === false;
            });
            {
                return this.toDos;
            }
        }
    }
    exports.default = ToDoList;
});
define("components/todoList/toDoList.component", ["require", "exports", "components/storage", "components/todoList/toDoList.render", "components/todoList/models/toDoList.model"], function (require, exports, storage_1, toDoList_render_1, toDoList_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ToDoListComponent {
        constructor() {
            this.data = new storage_1.default();
            this.newToDo = new toDoList_model_1.default();
            this.toDoListRender = new toDoList_render_1.default();
            this.toDoListRender.newTodoAdd.addEventListener("click", () => {
                if (!this.toDoListRender.newTodoInput.value) {
                    return;
                }
                this.newToDo.toDos = this.data.updateData();
                this.newToDo.addToDo(this.toDoListRender.newTodoInput.value);
                this.data.saveData(this.newToDo.toDos);
                this.toDoListRender.newTodoInput.value = "";
                this.displayToDoList();
            });
            this.toDoListRender.search.addEventListener("click", () => {
                if (!this.toDoListRender.newTodoInput.value) {
                    return;
                }
                let newArray = this.newToDo.searchToDo(this.toDoListRender.newTodoInput.value);
                if (newArray.length > 0) {
                    this.newToDo.toDos = newArray;
                    this.displayToDoList();
                }
                else
                    alert("Nothing was found!");
                this.toDoListRender.newTodoInput.value = "";
                this.newToDo.toDos = this.data.updateData();
            });
            this.toDoListRender.allTasks.addEventListener("click", () => {
                this.newToDo.toDos = this.data.updateData();
                this.displayToDoList();
            });
            this.toDoListRender.completedTasks.addEventListener("click", () => {
                this.newToDo.toDos = this.data.updateData();
                let newArray = this.newToDo.completedTasks();
                if (newArray.length > 0) {
                    this.newToDo.toDos = newArray;
                    this.displayToDoList();
                }
            });
            this.toDoListRender.tobeDone.addEventListener("click", () => {
                this.newToDo.toDos = this.data.updateData();
                let newArray = this.newToDo.tobeDone();
                if (newArray.length > 0) {
                    this.newToDo.toDos = newArray;
                    this.displayToDoList();
                }
            });
            this.toDoListRender.clearAll.addEventListener("click", () => {
                this.newToDo.toDos = this.newToDo.clearAll();
                this.toDoListRender.newTodoList.innerHTML = "";
                this.data.saveData(this.newToDo.toDos);
                this.newToDo.toDos = [];
                this.displayToDoList();
            });
            this.toDoListRender.clearCompleted.addEventListener("click", () => {
                this.newToDo.toDos = this.newToDo.tobeDone();
                this.data.saveData(this.newToDo.toDos);
                this.displayToDoList();
            });
            this.toDoListRender.newTodoList.addEventListener("change", (event) => {
                let idInput = event.target.getAttribute("id");
                let forLabel = this.toDoListRender.newTodoList.querySelector("[for=" + idInput + "]");
                let valueLabel = forLabel.innerHTML;
                this.newToDo.toDos.forEach((item) => {
                    if (item.title === valueLabel) {
                        item.isDone = !item.isDone;
                        this.data.saveData(this.newToDo.toDos);
                    }
                });
            });
            if (localStorage.getItem("todo")) {
                this.newToDo.toDos = this.data.updateData();
                this.displayToDoList();
            }
        }
        displayToDoList() {
            let displayToDo = "";
            if (this.newToDo.toDos.length === 0) {
                this.toDoListRender.newTodoList.innerHTML = "";
                this.newToDo.toDos = [];
                this.data.saveData(this.newToDo.toDos);
            }
            this.newToDo.toDos.forEach((item, i) => {
                displayToDo += ` 
              <li>
                  <input type='checkbox' id= 'item_${i}' ${item.isDone ? "checked" : ""}> 
                  <label for= 'item_${i}'>${item.title}</label>
                  <br>
                  <span> Data created: ${item.date}</span>
              </li>
              `;
                this.toDoListRender.newTodoList.innerHTML = displayToDo;
            });
        }
    }
    exports.default = ToDoListComponent;
});
define("main", ["require", "exports", "components/weather/weather.component", "components/todoList/toDoList.component"], function (require, exports, weather_component_1, toDoList_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const weatherInfo = new weather_component_1.default();
    const todoListApp = new toDoList_component_1.default();
});
//# sourceMappingURL=main.js.map
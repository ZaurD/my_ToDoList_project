class Storage {
    storage;
  
    constructor() {
      this.storage = JSON.parse(localStorage.getItem('todo')) ;
    }
  
    saveData(data) {
        localStorage.setItem('todo', JSON.stringify(data));;
    }
  
    updateData() {
      return JSON.parse(localStorage.getItem('todo')) || "null";
    }
  }
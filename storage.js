class Storage {
    
  storage;

  constructor() {

    this.storage = this.updateData();
  }

  saveData(data) {
      localStorage.setItem('todo', JSON.stringify(data));
  }

  updateData() {

    if(localStorage.getItem('todo')) {
      return JSON.parse(localStorage.getItem('todo'));
    }
    else {
      return [];
    }
  }
}
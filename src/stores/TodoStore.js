import { computed, observable } from 'mobx'
import {fbstore} from './FirebaseStore.js';
import {map, toJS} from 'mobx';

class Todo {
    @observable title
    @observable id
    @observable dateAdded

    constructor(title, id) {
        this.title = title
        this.id = id
        this.dateAdded = Date.now()
    }
}

class TodoStore {
    
    @observable todos = map({})

    constructor() {
        fbstore.todos.on('value', (snapshot) => {
            this.todos = snapshot.val()
        })
    }

    @computed get json(){
        return toJS(this.todos)
    }

    add = (name) => {
        const id = fbstore.todos.push().key
        this.update(id, name)
    }

    update = (id, name) => {
        let newItem = new Todo(name, id)
        fbstore.todos.update({[id]: newItem})
    }

    del = (id) => {
        fbstore.todos.child(id).remove()
    }
}


const todos = new TodoStore()
export { todos }


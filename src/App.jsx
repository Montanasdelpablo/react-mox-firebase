import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
 
import {todos} from './stores/TodoStore.js';
import {map} from 'lodash';

@observer
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitItem = this.submitItem.bind(this)
        
  }

  handleChange(e){
    let newValue = e.target.value
    this.setState({
      defaultValue: newValue
    })
  }

  submitItem(){
   let newItemTitle = this.state.defaultValue
   todos.add(newItemTitle)
   this.setState({
     defaultValue: ''
   })
  }

  del(id){
    todos.del(id)
  }

  render() {
    
    return (
      <div>
        <h1> Todolist </h1>
        <input onChange={this.handleChange} value={this.state.defaultValue} />
        <button type="button" onClick={this.submitItem}> Submit </button>
        <ul>
        {map(todos.json, (item) => {
          return <li key={item.id}>{item.title} <button onClick={this.del.bind(this, item.id)}>Delete</button></li>
        })}
        </ul>
        <DevTools />
      </div>
    );
  }

  
};

export default App;

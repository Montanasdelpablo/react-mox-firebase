import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react';


import { store } from './stores.js';



// store.todos.createTodo("Buy eggs")
// store.todos.createTodo("Practice writing React")
// store.todos.createTodo("Meditating")


import App from './App';

ReactDOM.render(<App store={store} />, document.getElementById('root'))


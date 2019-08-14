import React, { useState, useReducer } from 'react';
import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { todoContext } from './contexts/todoContext';
import { initialState, todoReducer } from './reducers/todoReducer';

import './components/Todo.scss';

function App() {
  const [todoListData, reducer] = useState(initialState);
  console.log(todoListData, reducer)
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <todoContext.Provider value={{ state, dispatch }}>
      <div className="app-container">
        <h2>Welcome to your Todo App!</h2>
        <TodoList />
        <TodoForm />
      </div>
    </todoContext.Provider>
  );
}


export default App;


import React, {useContext} from 'react';
import Todo from './Todo';
import { todoContext } from '../contexts/todoContext';

// import { initialState, todoReducer } from '../reducers/todoReducer';

const TodoList = () => {
    const { state, dispatch } = useContext(todoContext);

    return (
        <div className="array-container">
            <h3>Todo List:</h3>
            <p>Click a todo to mark it complete!</p>
            {state.todoArray.map((item) => <Todo key={item.id} item={item}/>)}
        </div>
    )
}


export default TodoList;
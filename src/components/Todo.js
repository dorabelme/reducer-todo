import React, { useContext } from 'react';
import { todoContext } from '../contexts/todoContext';

import { initialState, todoReducer } from '../reducers/todoReducer';

const Todo = (props) => {
    const { state, dispatch } = useContext(todoContext);
    console.log(props.item)

    return (
        <div className="todo-item">
            <h4 className={`items${props.item.completed ? ' completed' : ''}`}
                onClick={() => dispatch({ type: 'TOGGLE-TODO', payload: props.item })}>{props.item.item}</h4>
        </div>
    )
}


export default Todo;

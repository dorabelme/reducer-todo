import React, { useState, useContext } from 'react';
// import { initialState, todoReducer } from '../reducers/todoReducer';
import { todoContext } from '../contexts/todoContext';

function TodoForm(props) {
    const [input, setInput] = useState({ todo: '' })
    const { state, dispatch } = useContext(todoContext);
    
    const handleChange = event => {
        setInput({...input, [event.target.name]: event.target.value });
    };


    const addItem = event => {
        event.preventDefault();
        dispatch({ type: "ADD-TODO", payload: input.todo })
        setInput({ todo: '' });
    }

        return (
            <div>
                <form onSubmit={(event) => addItem(event)}>
                    <input type="text"
                        placeholder="Todo"
                        name="todo"
                        value={input.todo}
                        onChange={handleChange} />
                    <button className="btn add-btn" type="submit">Add Todo</button>
                    <button className="btn clear-btn" onClick={(event) => {
                        event.preventDefault();
                        return dispatch({ type: 'REMOVE-COMPLETED' })
                    }}>Clear Completed</button>
                </form>
            </div>
        )
    }


export default TodoForm;


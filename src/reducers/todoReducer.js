
export const initialState = {
    todoArray: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Learn about React',
        completed: false,
        id: 3892987577
    }
    ]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-TODO':
            console.log("ADD-TODO")
            const newTodo = {
                id: Date.now(),
                item: action.payload,
                completed: false
            }
            const newState = { ...state, todoArray : [...state.todoArray, newTodo]}
    
            console.log(action.payload)
            return newState;
        
        case "TOGGLE-TODO":
            console.log("TOGGLE-TODO")
            const completedItem = state.todoArray.map(todo => {
                console.log(action.payload)
                if (todo.id === action.payload.id) {
                    todo.completed = !todo.completed
                }
                return todo
            });
            return { ...state, todoArray: completedItem }

        case 'REMOVE-COMPLETED':
            return {
                ...state,
                todoArray: state.todoArray.filter(({ completed }) => !completed)
            }

        default:
            return state;
        
    }
};


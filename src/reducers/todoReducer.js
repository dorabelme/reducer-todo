

export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        // case 'TOGGLE_EDITING':
        //     return {
        //         ...state,
        //         editing: !state.editing
        //     };
        // case 'UPDATE_TITLE':
        //     return {
        //         ...state,
        //         title: action.payload,
        //         editing: !state.editing
        //     };
        default:
            return state;
    }
};
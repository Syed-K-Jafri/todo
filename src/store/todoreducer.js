import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from './types';

const initialState = { 
    todos : []
};

function getId(state) {
    return state.todos.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId)
    }, -1) + 1
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let todo = { title: action.title, completed: false, id: getId(state) };
            return {...state, todos: [...state.todos, todo]};
        case COMPLETE_TASK:
            return {...state, todos: state.todos.map(x => { return x.id === action.id ? {...x, ['completed']: !x.completed}: x } )};
        case DELETE_TASK:
            return {...state, todos: state.todos.filter(x => { return x.id !== action.id }) }
        case EDIT_TASK:
            return {...state, todos: state.todos.map(x => { return x.id === action.id ? {...x, ['title']: action.title} : x})};
        default:
            return state;
    }
}

export default reducer;
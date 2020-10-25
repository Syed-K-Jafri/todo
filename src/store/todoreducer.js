import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, SET_TODOLIST_FILTER } from './types';

const initialState = { 
    todos : [],
    filter: 'SHOW_ALL'
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
        case SET_TODOLIST_FILTER:
            return {...state, filter: action.filter };
        default:
           return state;
    }
}

export default reducer;

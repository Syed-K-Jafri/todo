import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK, SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED, SET_TODOLIST_FILTER } from './types';

export const addTodo = title => {
    return {
        type: ADD_TASK,
        title: title,
    }
};

export const completeTodo = (id) => {
    return {
        type: COMPLETE_TASK,
        id: id
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TASK,
        id: id
    }
}

export const editTodo = (id, title) => {
    return {
        type: EDIT_TASK,
        title: title,
        id: id
    }
}

export const setTodoListFilter = filter => ({
    type: SET_TODOLIST_FILTER,
    filter
})

export const todolistFilters = {
    SHOW_ALL: SHOW_ALL,
    SHOW_COMPLETED: SHOW_COMPLETED,
    SHOW_ACTIVE: SHOW_ACTIVE
};

export const getTodoList = (todos, filter) => {
    switch(filter) {
        case todolistFilters.SHOW_ALL:
            return todos;
        case todolistFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case todolistFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        default: 
            throw new Error('unknown filter' + filter);            
    }
  }
  
import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from './types';

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
};
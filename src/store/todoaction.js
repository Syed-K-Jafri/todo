import { ADD_TASK, COMPLETE_TASK } from './types';

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

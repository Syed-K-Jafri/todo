import { ADD_TASK } from './types';

export const addTodo = title => {
    return {
        type: ADD_TASK,
        title: title,
    }
};

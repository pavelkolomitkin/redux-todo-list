import * as types from './actionTypes';

export function addTask(task)
{
    return { type: types.TASK_ADD, task };
}

export function deleteTask(task)
{
    return { type: types.TASK_DELETE, task};
}

export function editTask(task)
{
    return { type: types.TASK_EDIT, task };
}
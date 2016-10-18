import * as types from '../actions/actionTypes';

export default function (state, action)
{
    switch (action.type)
    {
        case types.TASK_ADD:

            return [
                ...state,
                Object.assign({}, action.task)
            ];

        case types.TASK_EDIT:
            return action.task;

        case types.TASK_DELETE:

            return [
                ...state.filter((currentTask) => { return currentTask.id != action.task.id; })
            ];

        default:
            return state || [];
    }
}

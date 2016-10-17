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

        default:
            return state || [];
    }
}

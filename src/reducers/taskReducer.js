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
            return [
                ...state.filter((task) => { return task.id != action.task.id }),
                Object.assign({}, action.task)
            ];

        case types.TASK_DELETE:

            return [
                ...state.filter((currentTask) => { return currentTask.id != action.task.id; })
            ];

        case types.TASK_ITEM_EDIT:

            let {task, item} = action;
            task.items = task.items.filter((currentItem) => {return currentItem.id != item.id; }).concat([item]);

            return [
                ...state.filter((currentTask) => { return currentTask.id != task.id }),
                Object.assign({}, task)
            ];

        case types.TASK_SEARCH:

            let {text, status} = action.params;
            let result = state;

            if (text != '')
            {
                result = result.filter((task) => { return task.title.indexOf(text) >= 0; });
            }

            if (status && status.id != '')
            {
                result = result.filter((task) => { return task.status.id == status.id; });
            }

            return result;

        default:
            return state || [];
    }
}

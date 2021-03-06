import {combineReducers} from 'redux';
import categories from './categoryReducer';
import tasks from './taskReducer';
import taskStatuses from './taskStatusReducer';

const rootReducer = combineReducers(
    {
        categories,
        tasks,
        taskStatuses
    }
);


export default rootReducer;
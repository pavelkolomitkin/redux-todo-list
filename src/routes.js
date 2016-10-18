import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import TaskListPage from './components/task/TaskListPage';
import CreateTaskPage from './components/task/CreateTaskPage';
import EditTaskPage from './components/task/EditTaskPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={TaskListPage}/>
        <Route path="/:categoryId" component={TaskListPage} />
        <Route path="/:categoryId/task/new" component={CreateTaskPage} />
        <Route path="/:categoryId/task/:id/edit" component={EditTaskPage}/>
    </Route>
);

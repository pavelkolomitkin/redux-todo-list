import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const TaskListItem = ({task}) => {
    return (
        <div className="task-item">
            <Link to={`/${task.category.id}/task/${task.id}/show`}>{task.title}</Link>
            <Link to={`/${task.category.id}/task/${task.id}/edit`} className="btn btn-primary">Edit</Link>
            <span className="btn btn-danger">Delete</span>
        </div>
    );
};

TaskListItem.propTypes = {
    task: PropTypes.object.isRequired
};

export default TaskListItem;
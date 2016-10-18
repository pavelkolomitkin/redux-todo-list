import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const TaskListItem = ({task, onDelete}) => {
    return (
        <div className="task-item">
            <Link to={`/${task.category.id}/task/${task.id}/show`}>{task.title}</Link>
            <Link to={`/${task.category.id}/task/${task.id}/edit`} className="btn btn-primary">Edit</Link>
            <span className="btn btn-danger" onClick={(event) => {onDelete(task)}}>Delete</span>
        </div>
    );
};

TaskListItem.propTypes = {
    task: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default TaskListItem;
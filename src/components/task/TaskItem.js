import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const TaskItem = ({task}) => {
    return (
        <div className="task-item">
            {task.title}
            <Link to={`/${task.category.id}/task/${task.id}/edit`} className="btn btn-primary   ">Edit</Link>
            <span className="btn btn-danger">Delete</span>
        </div>
    );
};

TaskItem.propTypes = {
    task: PropTypes.object.isRequired
};

export default TaskItem;
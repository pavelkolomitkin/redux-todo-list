import React, {PropTypes} from 'react';

const TaskItem = ({task}) => {
    return (
        <div className="task-item">
            {task.title}
            <span className="btn btn-danger">Delete</span>
        </div>
    );
};

TaskItem.propTypes = {
    task: PropTypes.object.isRequired
};

export default TaskItem;
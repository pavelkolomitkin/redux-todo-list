import React, {PropTypes} from 'react';

class TaskItemForm extends React.Component
{


    render()
    {
        const {taskItem, onDelete} = this.props;
        return (
            <div>
                <input type="text" placeholder="Describe item..." />
                <span className="btn btn-danger" onClick={(event) => { onDelete(taskItem); }}>Delete</span>
            </div>
        );
    }
}

TaskItemForm.propTypes = {
    taskItem: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default TaskItemForm;
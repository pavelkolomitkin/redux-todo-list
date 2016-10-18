import React, {PropTypes} from 'react';

class TaskItemForm extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.onTitleChange = this.onTitleChange.bind(this);
    }

    onTitleChange(event)
    {
        this.props.taskItem.title = event.target.value;
    }

    render()
    {
        const {taskItem, onDelete} = this.props;
        return (
            <div>
                <input type="text" placeholder="Describe item..." defaultValue={taskItem.title} onChange={this.onTitleChange} />
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
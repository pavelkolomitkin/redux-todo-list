import React, {PropTypes} from 'react';

class TaskStatusForm extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.onStatusChange = this.onStatusChange.bind(this);

        const {task, statuses} = this.props;
        if (!task.status)
        {
            task.status = statuses[0];
        }

        this.state = {
            task: task
        };

    }

    onStatusChange(event)
    {
        const task = this.state.task;
        task.status = this.props.statuses.filter((status) => {return status.id == event.target.value})[0];

        this.setState(
            {
                task: task
            }
        );
    }

    render()
    {
        const {statuses} = this.props;
        const {task} = this.state;

        return (
            <select onChange={this.onStatusChange} defaultValue={task.status.id}>
                {statuses.map((status, index) => {
                    return (<option key={status.id} value={status.id}>{status.title}</option>);
                })}
            </select>
        );
    }
}

TaskStatusForm.propTypes = {
    statuses: PropTypes.array.isRequired,
    task: PropTypes.object.isRequired
};

export default TaskStatusForm;
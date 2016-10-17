import React, {PropTypes} from 'react';

class TaskStatusForm extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.onStatusChange = this.onStatusChange.bind(this);
        this.getStatusOption = this.getStatusOption.bind(this);

        this.state = {
            task: this.props.task
        };

    }

    onStatusChange(event)
    {
        this.state.task.status = {id : event.target.value, title: event.target.innerHTML};
    }

    getStatusOption(status, index)
    {
        const currentStatus = this.state.task.status;

        if (currentStatus && currentStatus.id == status.id)
        {
            return (<option key={status.id} value={status.id} selected="selected">{status.title}</option>);
        }
        else
        {
            return (<option key={status.id} value={status.id}>{status.title}</option>);
        }
    }

    render()
    {
        const {statuses} = this.props;

        return (
            <select onChange={this.onStatusChange}>
                {statuses.map(this.getStatusOption)}
            </select>
        );
    }
}

TaskStatusForm.propTypes = {
    statuses: PropTypes.array.isRequired,
    task: PropTypes.object.isRequired
};

export default TaskStatusForm;
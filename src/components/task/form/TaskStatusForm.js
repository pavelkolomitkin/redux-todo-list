import React, {PropTypes} from 'react';

class TaskStatusForm extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.onStatusChangeHandler = this.onStatusChangeHandler.bind(this);

        let {currentStatus, statuses} = this.props;
        if (!currentStatus)
        {
            currentStatus = statuses[0];
        }

        this.state = {
            currentStatus
        };

    }

    onStatusChangeHandler(event)
    {
        const newStatus = this.props.statuses.filter((status) => { return status.id == event.target.value })[0];

        this.setState(
            {
                currentStatus: newStatus
            }
        );

        this.props.onStatusChange(newStatus);
    }

    render()
    {
        const {statuses} = this.props;
        const {currentStatus} = this.state;

        return (
            <select onChange={this.onStatusChangeHandler} defaultValue={currentStatus.id}>
                {statuses.map((status, index) => {
                    return (<option key={status.id} value={status.id}>{status.title}</option>);
                })}
            </select>
        );
    }
}

TaskStatusForm.propTypes = {
    statuses: PropTypes.array.isRequired,
    onStatusChange: PropTypes.func.isRequired
};

export default TaskStatusForm;
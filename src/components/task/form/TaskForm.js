import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import TaskStatusForm from './TaskStatusForm';
import TaskItemCollectionForm from './TaskItemCollectionForm';

class TaskForm extends React.Component {

    constructor(state, context)
    {
        super(state, context);

        this.formSubmit = this.formSubmit.bind(this);
        this.onTaskStatusChange = this.onTaskStatusChange.bind(this);

        this.state = {
            task: this.props.task,
            category: this.props.category,
            status: this.props.task.status ? this.props.task.status : null
        };
    }

    formSubmit(event)
    {
        event.preventDefault();

        const task = Object.assign(
            {},
            this.state.task,
            {
                title: ReactDOM.findDOMNode(this.refs.taskTitle).value,
                category: this.props.category,
                status: this.state.status
            }
        );

        this.props.onFormSubmit(task);
    }

    onTaskStatusChange(status)
    {
        this.setState(
            {
                status
            }
        );
    }

    render()
    {
        const {category, status, task} = this.state;
        const { statuses } = this.props;

        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <div className="form-group">
                        <label>Category: </label>
                        <b>{category.title}</b>
                    </div>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" ref="taskTitle" defaultValue={task.title} />
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <TaskStatusForm currentStatus={status} statuses={statuses} onStatusChange={this.onTaskStatusChange} />
                    </div>
                    <div className="form-group">
                        <TaskItemCollectionForm task={task} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

TaskForm.propTypes = {
    category: PropTypes.object.isRequired,
    statuses: PropTypes.array.isRequired,
    task: PropTypes.object.isRequired,
    onFormSubmit: PropTypes.func.isRequired
};

export default TaskForm;
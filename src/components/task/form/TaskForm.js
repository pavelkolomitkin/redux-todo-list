import React, {PropTypes} from 'react';
import TaskStatusForm from './TaskStatusForm';
import TaskItemCollectionForm from './TaskItemCollectionForm';

class TaskForm extends React.Component {

    constructor(state, context)
    {
        super(state, context);

        this.onTitleChange = this.onTitleChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);

        this.state = {
            task: this.props.task
        };
    }

    onTitleChange(event)
    {
        this.state.task.title = event.target.value;
    }

    formSubmit(event)
    {
        event.preventDefault();
        this.state.task.category = this.props.category;
        this.props.onFormSubmit(this.state.task);
    }

    render()
    {
        const {category, statuses, task} = this.props;

        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" onChange={this.onTitleChange} />
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <TaskStatusForm task={task} statuses={statuses} />
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
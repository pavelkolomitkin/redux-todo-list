import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TaskForm from './form/TaskForm';
import {bindActionCreators} from 'redux';
import * as taskActions from '../../actions/taskActions';
import {browserHistory} from 'react-router';

class EditTaskPage extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(task)
    {
        this.props.actions.editTask(task);
        browserHistory.push(`/${task.category.id}`);
    }

    render()
    {
        const {task, taskStatuses} = this.props;

        return (
            <div>
                <h1>Edit task</h1>
                <TaskForm task={task} category={task.category} statuses={taskStatuses} onFormSubmit={this.onFormSubmit} />
            </div>
        );
    }
}

EditTaskPage.propTypes = {
    task: PropTypes.object.isRequired,
    taskStatuses: PropTypes.array.isRequired
};

function mapStateToProps(state, {params: {categoryId, id}}) {

    const task = state.tasks.filter(function(task, index){
        return (task.id == id && task.category.id == categoryId);
    })[0];

    return {
        task: task,
        taskStatuses: state.taskStatuses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(taskActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskPage);
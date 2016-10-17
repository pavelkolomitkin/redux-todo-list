import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TaskForm from './form/TaskForm';
import {bindActionCreators} from 'redux';
import * as taskActions from '../../actions/taskActions';

import {browserHistory} from 'react-router';

class CreateTaskPage extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(task)
    {
        this.props.actions.addTask(task);
        browserHistory.push(`/${task.category.id}`);
    }

    render()
    {
        const {category, taskStatuses, task} = this.props;

        return (
            <div>
                <h1>Create new task!</h1>
                <TaskForm task={task} category={category} statuses={taskStatuses} onFormSubmit={this.onFormSubmit} />
            </div>
        );
    }
}

CreateTaskPage.propTypes = {
    category: PropTypes.object.isRequired,
    taskStatuses: PropTypes.array.isRequired
};

function mapStateToProps(state, {params: {categoryId}}) {

    const category = state.categories.filter(function (category) {
        return category.id == categoryId
    })[0];

    return {
        category: category,
        taskStatuses: state.taskStatuses,
        task: {
            title: '',
            items: []
        }
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(taskActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskPage);

import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/taskActions';
import TaskList from './TaskList';
import {browserHistory} from 'react-router';



class TaskListPage extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.onTaskDelete = this.onTaskDelete.bind(this);
    }

    onTaskDelete(task)
    {
        this.props.actions.deleteTask(task);
        browserHistory.push('/');
    }

    getHeader()
    {
        const {category} = this.props;

        if (category)
        {
            return (
                <h1>Tasks of "{category.title}"</h1>
            );
        }
        else
        {
            return (<h1>All tasks</h1>);
        }
    }


    render()
    {
        const { tasks, category } = this.props;
        return (
            <div>
                { this.getHeader() }
                { category &&
                    <Link to={`/${category.id}/task/new`} className="btn btn-primary">+ Add task</Link>
                }
                <TaskList tasks={tasks} onDelete={this.onTaskDelete} />
            </div>
        );
    }
}

TaskListPage.propTypes = {
    tasks: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, {params: {categoryId}})
{
    let tasks;
    let category;
    if (typeof categoryId !== 'undefined')
    {
        category = state.categories.filter((category) => { return category.id == categoryId; })[0];
        tasks = state.tasks.filter((task) => { return task.category.id == categoryId; });
    }
    else
    {
        tasks = state.tasks;
    }

    return {
        tasks,
        category
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListPage);
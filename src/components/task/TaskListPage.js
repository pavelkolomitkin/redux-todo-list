import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import TaskList from './TaskList';

class TaskListPage extends React.Component
{
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
                <TaskList tasks={tasks} />
            </div>
        );
    }
}

TaskListPage.propTypes = {
    tasks: PropTypes.array.isRequired
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

export default connect(mapStateToProps)(TaskListPage);
import React, {PropTypes} from 'react';

import TaskListItem from './TaskListItem';

class TaskList extends React.Component
{
    render() {
        const {tasks} = this.props;

        if (tasks.length > 0)
        {
            return (
                <div>
                    {tasks.map(function (task, index) {
                        return <TaskListItem task={task} key={task.id} />
                    })}
                </div>
            );
        }
        else
        {
            return (
                <div>
                    <p className="alert alert-info">
                        No tasks yet
                    </p>
                </div>
            );
        }
    }
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired
};


export default TaskList;
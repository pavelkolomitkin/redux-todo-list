import React, {PropTypes} from 'react';
import TaskItemForm from './TaskItemForm';

class TaskItemCollectionForm extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.state = {
            task: this.props.task
        };

        this.onNewItemAdd = this.onNewItemAdd.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
    }

    onNewItemAdd(event)
    {
        const newItem = {
            id: +new Date,
            title: ''
        };

        let task = this.state.task;
        task.items = task.items.concat([newItem]);

        this.setState(
            {
                task: task
            }
        );
    }

    onDeleteItem(taskItem)
    {
        let task = this.state.task;
        task.items = task.items.filter((item) => { return item.id != taskItem.id });

        this.setState(
            {
                task: task
            }
        );
    }

    render()
    {
        const taskItems = this.state.task.items || [];
        const onDeleteItem = this.onDeleteItem;

        return (
            <div>
                <h4>Task items</h4>
                <div>
                { taskItems.map(function(taskItem){
                    return <TaskItemForm key={taskItem.id} taskItem={taskItem} onDelete={onDeleteItem} />
                })}
                </div>
                <div>
                    <span className="btn btn-default" onClick={this.onNewItemAdd}>+ Add item</span>
                </div>
            </div>
        );
    }
}

TaskItemCollectionForm.propTypes = {
    task: PropTypes.object.isRequired
};


export default TaskItemCollectionForm;
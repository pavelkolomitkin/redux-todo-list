import React, {PropTypes} from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/taskActions';

class ShowTaskPage extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.onItemEdit = this.onItemEdit.bind(this);

        this.state = {
            task: this.props.task
        };
    }

    onItemEdit(item)
    {
        this.props.actions.editTaskItem(this.state.task, item);
    }

    render()
    {
        const {task} = this.state;
        const {onItemEdit} = this;

        return (
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Title: </td>
                            <td><b>{task.title}</b></td>
                        </tr>
                        <tr>
                            <td>Status: </td>
                            <td>{task.status.title}</td>
                        </tr>
                        <tr>
                            <td>Items</td>
                            <td>
                                <div>
                                    {task.items.map(function(item, index){
                                        return (<TaskItem onItemEdit={onItemEdit} key={index} item={item}/>);
                                    })}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

ShowTaskPage.propTypes = {
    task: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, {params: {categoryId, id}})
{
    return {
        task: state.tasks.filter((task) => {return task.id == id;})[0]
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTaskPage);
import React from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';

class ShowTaskPage extends React.Component
{
    render()
    {
        const {task} = this.props;

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
                                        return (<TaskItem key={index} item={item}/>);
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

function mapStateToProps(state, {params: {categoryId, id}})
{

    return {
        task: state.tasks.filter((task) => {return task.id == id;})[0]
    };
}

export default connect(mapStateToProps)(ShowTaskPage);
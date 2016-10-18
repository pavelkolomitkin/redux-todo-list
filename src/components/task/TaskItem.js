import React, {PropTypes} from 'react';

class TaskItem extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.state = {
            item: this.props.item
        };

        this.onInputBlur = this.onInputBlur.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onInputTitleChange = this.onInputTitleChange.bind(this);
        this.onCheckboxStateChange = this.onCheckboxStateChange.bind(this);

    }

    onInputBlur(event)
    {
        this.setState(
            {
                isEdit: false
            }
        );
    }

    onEditClick(event)
    {
        this.setState(
            {
                isEdit: true
            }
        );
    }

    onInputTitleChange(event)
    {
        const {item} = this.state;
        item.title = event.target.value;

        this.setState(
            {
                item
            }
        );

        this.props.onItemEdit(item);
    }

    onCheckboxStateChange(event)
    {
        const {item} = this.state;
        item.isComplete = event.target.checked;

        this.setState({
            item
        });

        this.props.onItemEdit(item);
    }

    getItemBody()
    {
        const {isEdit, item} = this.state;

        if (isEdit)
        {
            return (
                <input type="text" defaultValue={item.title} onBlur={this.onInputBlur} onChange={this.onInputTitleChange} />
            );
        }
        else
        {
            return (
                <span>
                    <span style={{textDecoration: item.isComplete && 'line-through'}}>{item.title}</span>
                    <span className="btn btn-default" onClick={this.onEditClick}>Edit</span>
                </span>
            );
        }
    }

    render()
    {
        const {item} = this.state;

        return (
            <div>
                <label>
                    <input type="checkbox" checked={item.isComplete} onChange={this.onCheckboxStateChange} />
                    {this.getItemBody()}
                </label>

            </div>
        );
    }
}

TaskItem.propTypes = {
    item: PropTypes.object.isRequired,
    onItemEdit: PropTypes.func.isRequired
};

export default TaskItem;


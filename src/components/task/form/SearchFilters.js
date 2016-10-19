import React, {PropTypes} from 'react';
import TaskStatusForm from './TaskStatusForm';

class SearchFilters extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.onTextChange = this.onTextChange.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);

        this.state = {
            text: '',
            state: null
        };
    }

    onTextChange(event)
    {
        this.setState(Object.assign({}, this.state, {'text': event.target.value}));
        this.props.onFilterChange(this.state);
    }

    onStatusChange(status)
    {
        this.setState(Object.assign({}, this.state, {'status': status}));
        this.props.onFilterChange(this.state);
    }

    render()
    {
        const {statuses} = this.props;
        const {text, status} = this.state;

        return (
            <div>
                <input type="text" onChange={this.onTextChange} defaultValue={text} placeholder="Title of task..." />
                <TaskStatusForm statuses={statuses} status={status} onStatusChange={this.onStatusChange} />
            </div>
        );
    }
}

SearchFilters.propTypes = {
    statuses: PropTypes.array.isRequired,
    onFilterChange: PropTypes.func.isRequired
};

export default SearchFilters;

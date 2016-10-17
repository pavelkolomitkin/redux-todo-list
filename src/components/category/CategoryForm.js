import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

class CategoryForm extends React.Component {

    constructor(props, context)
    {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event)
    {
        event.preventDefault();

        let category = {
            title: ReactDOM.findDOMNode(this.refs.categoryName).value
        };
        this.props.onAddCategory(category);
    }

    render()
    {
        return <form className="form" onSubmit={this.onSubmit}>
            <input type="text" placeholder="Category name..." ref="categoryName" required="true"/>
            <br />
        </form>
    }
}

CategoryForm.propTypes = {
    onAddCategory: PropTypes.func.isRequired
};

export default CategoryForm;

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../actions/categoryActions';

import CategoryList from './CategoryList';
import CategoryForm from './CategoryForm';

import {browserHistory} from 'react-router';

class CategoryManager extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.onAddNewCategory = this.onAddNewCategory.bind(this);
        this.onCategoryDelete = this.onCategoryDelete.bind(this);
        this.onFormShow = this.onFormShow.bind(this);

        this.state = props;
    }

    onAddNewCategory(category)
    {
        category.id = +new Date;
        this.props.actions.addCategory(category);

        browserHistory.push(`/${category.id}`);
    }

    onCategoryDelete(category)
    {
        this.props.actions.deleteCategory(category);
        browserHistory.push(`/`);
    }

    onFormShow(event)
    {
        this.setState({
            isFormVisible: true
        });
    }

    render()
    {
        let {isFormVisible} = this.state;
        let {categories} = this.props;

        return (
            <div id="category-manager">
                <h2>Categories</h2>
                <div>
                    <span className="btn btn-success" onClick={this.onFormShow}>+ New</span>
                </div>
                <CategoryList categories={categories} onCategoryDelete={this.onCategoryDelete} />
                { isFormVisible && <CategoryForm onAddCategory={this.onAddNewCategory}/> }
            </div>
        );
    }
}

CategoryManager.propTypes = {
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, router)
{
    return {
        categories: state.categories,
        isFormVisible: false
    }
}

function mapDispatchToProps(dispatch)
{
    return {
        actions: bindActionCreators(categoryActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryManager);
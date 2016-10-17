import React, {PropTypes} from 'react';
import CategoryItem from './CategoryItem';
import {Link} from 'react-router';

const CategoryList = ({ categories, onCategoryDelete }) => {

    return (<div>
        <div>
            <Link to="/">All categories</Link>
        </div>
        {categories.map(function(category, index){
            return <CategoryItem category={category} key={ category.id } onDelete={ onCategoryDelete } />
        })}
    </div>);

};

CategoryList.propTypes = {
    categories: PropTypes.array.isRequired,
    onCategoryDelete: PropTypes.func.isRequired
};

export default CategoryList;
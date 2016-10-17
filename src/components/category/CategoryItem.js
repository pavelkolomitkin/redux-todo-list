import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CategoryItem = ({category, onDelete}) => {
    return (
        <div>
            <Link to={`/${category.id}`}>{category.title}</Link>
            <a href="#" className="btn btn-danger" onClick={ event => { onDelete(category) }}>Delete</a>
        </div>
    );
};

CategoryItem.propTypes = {
    category: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default CategoryItem;
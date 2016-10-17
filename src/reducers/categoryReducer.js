import * as types from '../actions/actionTypes';

export default function (state = [], action) {

    switch (action.type)
    {
        case types.CATEGORY_ADD:

            return [
                ...state,
                Object.assign({}, action.category)
            ];

        case types.CATEGORY_DELETE:

            return state.filter(function(category){
                return category.id != action.category.id;
            });

        default:
            return state || [];
    }
};
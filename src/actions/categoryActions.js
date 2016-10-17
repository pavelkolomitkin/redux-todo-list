import * as types from './actionTypes';

export function addCategory(category)
{
    return { type: types.CATEGORY_ADD, category: category };
}

export function deleteCategory(category)
{
    return { type: types.CATEGORY_DELETE, category: category }
}
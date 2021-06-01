import { CREATE_CATEGORY } from '../actionTypes'

export const createCategory = (category) =>{
    return {
        type: CREATE_CATEGORY,
        category
    }
}
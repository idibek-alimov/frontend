import { CREATE_CATEGORY } from '../actionTypes';

export default function categoryReducer (state = '',action ) {
    switch (action.type){
        case CREATE_CATEGORY: {
            const {type , category } = action
            return category
            
        }
        default:
            return state
    }
}
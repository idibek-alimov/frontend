import { REFRESH_THE_SEARCH } from '../actionTypes';

export default function searchReducer (state = [],action ) {
    switch (action.type){
        case REFRESH_THE_SEARCH: {
            const {type , category, name } = action
            return {
                'categoryID':category,
                'searchText':name
            }
            
        }
        default:
            return state
    }
}
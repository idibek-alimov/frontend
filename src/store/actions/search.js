import { REFRESH_THE_SEARCH } from '../actionTypes'

export const refreshTheSearch = (category,name) =>{
    return {
        type: REFRESH_THE_SEARCH,
        category,
        name 
    }
}
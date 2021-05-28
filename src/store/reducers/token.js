import { ADD_TOKEN } from '../actionTypes';

export default function tokenReducer (state = [],action ) {
    switch (action.type){
        case ADD_TOKEN: {
            const {type , token } = action
            return token
            
        }
        default:
            return state
    }
}
import { ADD_USERNAME } from '../actionTypes';

export default function userReducer (state = [],action ) {
    switch (action.type){
        case ADD_USERNAME: {
            const {type , username } = action
            return {
                'username':username
            }
            
        }
        default:
            return state
    }
}
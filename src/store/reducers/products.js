import { CREATE_PRODUCT } from '../actionTypes';

export default function productReducer (state = [],action ) {
    switch (action.type){
        case CREATE_PRODUCT: {
            const {type , ...product } = action
            return [
                ...state,
                product
            ]
        }
        default:
            return state
    }
}
import { ADD_TO_CART,REMOVE_FROM_CART } from '../actionTypes';

export default function cartReducer (state = [],action ) {
    switch (action.type){
        case ADD_TO_CART: {
            const {type , ...product} = action
            let contains = false;
            state.map(product=>{if(product.id === action.id){contains =true}})
            if (contains){
                return state
            }
            else {
                return [
                    ...state,
                    product
                ]

            }
            
        }
        case REMOVE_FROM_CART:{
            const {type,id} = action
            return state.filter((product) =>
                action.id !== product.id
      )
        }
        default:
            return state
    }
}
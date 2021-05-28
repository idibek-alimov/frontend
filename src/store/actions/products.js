import { CREATE_PRODUCT } from '../actionTypes'

export const createProduct = (name,price) =>{
    //const { typname,price} = product

    return {
        type: CREATE_PRODUCT,
        name,
        price,
    }
}
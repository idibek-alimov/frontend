import { ADD_TO_CART,REMOVE_FROM_CART } from '../actionTypes'

export const addToCart = (product) =>{
    return {
        type: ADD_TO_CART,
        category : product.category,
        id : product.id,
        name : product.name,
        price : product.price,
        size: product.size,
        image : product.image,
        description : product.description,
        author : product.author,
        likes_product : product.likes_product
    }
}

export const removeFromCart = (id) =>{
    return {
        type:REMOVE_FROM_CART,
        id
    }
}


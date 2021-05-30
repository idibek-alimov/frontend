import React from 'react'

const CartCount = ({ products }) => {
    let cart = [];
    products.map(id=>cart.push(id))
    
    return <div className='cartLink'>
        <span className='cartLink'>{ cart.length }</span>
    </div>

}
export default CartCount
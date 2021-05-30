import React from 'react'

const CartCount = ({ products }) => {
    let cart = [];
    products.map(id=>cart.push(id))
    console.log(cart)
    return <div className='cartLink'>
        <span className='cartLink'>{ cart.length }</span>
    </div>

}
export default CartCount
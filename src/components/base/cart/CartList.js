import React from 'react'
import Product from './Product'

const CartList = ({ products }) =>
  <div>
    {products.map(
      (product, i) =>
        <div key={i.toString()}>
          <Product {...product} />
        </div>
    )}
    
  </div>

export default CartList
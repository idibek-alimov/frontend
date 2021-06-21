import React from 'react'
import Product from './Product'
import CheckOut from './CheckOut'
const CartList = ({ products }) =>{
  let ids = []
  products.map(product=>{
    ids.push(product.id)
    
  })
  console.log(ids)
  return  <div>
    
    {products.map(
      (product, i) =>
        <div key={i.toString()}>
          <Product {...product} />
        </div>
    )}
    <CheckOut products={products}/>
  </div>
}
export default CartList
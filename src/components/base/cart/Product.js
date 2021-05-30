import React from 'react'
import {store} from '../../../store/store'
import {removeFromCart} from '../../../store/actions'

const Product = ({category,id,name,price,image,description,author,likes_product  }) =>
  <div className='sectionProduct' key={id}>            
    <img className='sectionImage' src={image} />
    <img className='sectionImageZoom' src={image} />
    <div className='sectionDesctioption'>
      <span className='sectionName'>{name}</span>
      <span className='sectionPrice'>{price} cc.</span>
    </div> 
    <button className='addToCart' onClick={()=>store.dispatch(removeFromCart(id))}>remove from cart</button>
  </div>

export default Product
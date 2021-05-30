import React from 'react'
import axios from 'axios'
import {store} from '../../../../store/store'
import './Product.css'
import {Link} from 'react-router-dom'
import {addToCart} from '../../../../store/actions'
const Product = (props) => {
    
    
    return <div>
      <div className='productBox'>
        <Link className='productLink' to={`/detail/${props.product.id}`} >
          <div className='productPic'>

          </div>
        </Link>
        <Link className='productLink' to={`/detail/${props.product.id}`} >   
          <div className='productDetail'>
              
                  <p className='productName'>{props.product.name}</p>
                  <span className='productPrice'>{props.product.price}</span>
              
              
          </div>
          </Link>
          <button className='addToCart' onClick={()=>{
                  store.dispatch(addToCart(props.product))
                  }}>
                 add to the cart
          </button>
      </div>
    </div>  
}
export default Product
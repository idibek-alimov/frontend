import React from 'react'
import axios from 'axios'
import {store} from '../../../../store/store'
import './Product.css'

const Product = (props) => {
    
    
    return <div>
      <div className='productBox'>
        <div className='productPic'>

        </div>
        <div className='productDetail'>
        <p className='productName'>{props.product.name}</p>
        <span className='productPrice'>{props.product.price}</span>

        </div>
      </div>
    </div>
}
export default Product
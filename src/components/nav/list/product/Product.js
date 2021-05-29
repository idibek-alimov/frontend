import React from 'react'
import axios from 'axios'
import {store} from '../../../../store/store'
import './Product.css'
import {Link} from 'react-router-dom'

const Product = (props) => {
    
    
    return <div>
      <div className='productBox'>
        <Link className='registerLink' to={`/detail/${props.product.id}`} >
          <div className='productPic'>

          </div>
          <div className='productDetail'>
          <p className='productName'>{props.product.name}</p>
          <span className='productPrice'>{props.product.price}</span>

          </div>
        </Link> 
      </div>

    </div>
}
export default Product
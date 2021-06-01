import React from 'react'
import axios from 'axios'
import {store} from '../../../../store/store'
import './Product.css'
import {Link} from 'react-router-dom'
import {addToCart} from '../../../../store/actions'
import ShoppingCartOutlinedIcon from '../../../../../node_modules/@material-ui/icons/ShoppingCartOutlined';


const Product = (props) => {
    
    return <div>
      <div className='productBox'>
        
        <Link className='productLink' to={`/detail/${props.product.id}`} >
          <div className='productPic'>
            <img className='productPicImage' src={props.product.image} alt='https://storage.googleapis.com/maryam-photo-bucket/photos/about.jpg?Expires=1622480499&GoogleAccessId=idibke-alimov%40maryam-315312.iam.gserviceaccount.com&Signature=E6tXdMWmFTMcYMcwoXXNvu83mclukMTXP5D%2BZ%2FFqKs0ZRluE%2FDXg%2BCIsj%2FhhY60jNgsFmXbqSP36duxPTSPWU6JM%2FBRKB%2BMWL9wpxY6Z1LTCXoVztqf%2BIAfgMdBE6NZGpZnWvZk3ns3d4UWaErrw2QrI3uaUSM4RtFt998hNXiNuPlYOEEdu5igYemyekQ5pH%2BkzQUnmE5gx5r%2B5QFTait1IQYr334EJitFhzwunGz8Wuw4KN%2BtVFMR1igbum%2B8OJfBf3t3xOqITZmhQYl%2FuUFlYZ%2FIE1XOzsiEyvF2ju9VGn04SP9K2MSQ5HLTsVvbXXzXeAz%2F6ejheGsCPXoVAAw%3D%3D' />            
          </div>
        </Link>
        <Link className='productLink' to={`/detail/${props.product.id}`} >   
          <div className='productDetail'>     
                  <p className='productName'><b>{props.product.name}</b></p>
                  <span className='productPrice'>{props.product.price}</span>
          </div>
          </Link>
          <div className='cartAndLikeBox'>
          
          
          </div>
      </div>
    </div>  
}
export default Product
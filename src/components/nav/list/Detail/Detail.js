import React,{useState,useEffect} from 'react'
import './Detail.css'
import axios from 'axios'
import ShoppingCartOutlinedIcon from '../../../../../node_modules/@material-ui/icons/ShoppingCartOutlined';
import {store} from '../../../../store/store'
import {addToCart} from '../../../../store/actions'


const Detail = ({match}) => {
    //console.log(match.params.id)
    const [product,setProduct] = useState()

    useEffect(()=>{
        axios.get(`https://maryam-backend.herokuapp.com/${match.params.id}`)
             .then(res=>setProduct(res.data))
             .catch(err=>console.log(err)) 

    },[])
    
    return <div>
        {product ?
        <div className='detailBox'>
            <div className='detailPic'>
                <img className='detailPicImage' src={product.image}/>
            </div>
            <div className='detailData'>
                <div className='detailNamePrice'>
                    <span>Name: {product.name}</span>
                    <span>Price:{product.price} .cc</span>
                </div>
                <div className='detailSize'>
                    <span> Sizes: {product.size.map(size=>{
                        return <span> { size }  </span>
                        }
                        )
                        }
                    </span>
                </div>
                <div className='detailDescription'>
                    <p>{product.description}</p>
                </div>
            </div>
            <div>
              <button className='addToCart' onClick={()=>{
                  store.dispatch(addToCart(product))
                  }}>
                 <ShoppingCartOutlinedIcon className=''/>
              </button>
            </div>    
        </div>
        : 'this product is no longer awailable'}
    </div>
}
export default Detail
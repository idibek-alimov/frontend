import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './MyProducts.css'
import {store} from '../../../store/store'
import Product from '../../nav/list/product/Product'
const MyProducts = () => {
    const [myProducts,setMyProducts] = useState()

    useEffect(()=>{
        axios.get(`https://maryam-backend.herokuapp.com/myproducts`,store.getState().token)
             .then(res=>setMyProducts(res.data.results))
             .catch(err=>console.log(err))

    },[])

    return <div>
        <div className='listBox'>
        {myProducts ? 
        myProducts.map(product=>{
            return <div key={product.id}>
              <Product product={product}/>
            </div>
        }):
        'there are no products yet'}
      </div>
    </div>
}
export default MyProducts

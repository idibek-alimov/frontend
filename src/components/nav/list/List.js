import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Product from './product/Product'
import './List.css'
import {store} from '../../../store/store'

const List = () => {
    const [products,setProducts] = useState()
    useEffect(()=>{
        axios.get('https://maryam-backend.herokuapp.com',store.getState().token)
             .then(res=>setProducts(res.data.results))
             .catch(err=>console.log('failed'))      
    },[])
    
    return <div>
        <div className='listBox'>
        {products ? 
        products.map(product=>{
            return <div key={product.id}>
              <Product product={product}/>
            </div>
        }):
        'there are no products yet'}
      </div>
    </div>

}
export default List
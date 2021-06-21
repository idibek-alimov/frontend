import React,{useEffect} from 'react'
import axios from 'axios'
import './Cart.css'
import {store} from '../../../store/store'

const CheckOut = ({products}) => {
    let ids = []
    //  {
    //     "product": []
    //   }
    useEffect(()=>{
      products.map(product=>ids.push(product.id))
    },[])
    
    const onCheckOutHandle = () =>{
        axios.post('https://maryam-backend.herokuapp.com/toorder',{"product":ids},store.getState().token)
             .then(res=>console.log(res))
             .catch(err=>console.log(err))
        
    }
    return <div>
        <button onClick={onCheckOutHandle}>CheckOut</button>
    </div>
} 
export default CheckOut
import React,{useState,useEffect} from 'react'
import Product from '../nav/list/product/Product'
import axios from 'axios'
import {store} from '../../store/store'
const Search = ({ search }) =>{
  const [products,setProducts]  = useState()
  useEffect(()=>{
      axios.get(`https://young-escarpment-92727.herokuapp.com/${search.categoryID}/${search.searchText}`,store.getState().token)
           .then(res=>setProducts(res.data.results))
           .catch(err=>console.log(err))
           
  },[])
  
 
  return <div>
    <h1>Results for your search</h1>

    { products ? products.map(
      (product, i) =>
        <div key={i.toString()}>
          <Product product={product} />
        </div>
    ) : 'there is nothing for your search'}
     
  </div>
}
export default Search
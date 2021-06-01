import React,{useState,useEffect} from 'react'
import Product from '../nav/list/product/Product'
import axios from 'axios'
import {store} from '../../store/store'
import { useTranslation } from "react-i18next";
import '../../locals/i18n';

const Search = ({ search }) =>{
  const [products,setProducts]  = useState()
  const { t } = useTranslation();
  useEffect(()=>{
      axios.get(`https://maryam-backend.herokuapp.com/${search.categoryID}/${search.searchText}`)
           .then(res=>{setProducts(res.data.results);console.log(res.data.results)})
           .catch(err=>console.log(err))
           
  },[])
  
 
  return <div>
    <h1>{t("searchResults")}</h1>

    { products ? products.map(
      (product, i) =>
        <div key={i.toString()}>
          <Product product={product} />
        </div>
    ) : 'there is nothing for your search'}
     
  </div>
}
export default Search
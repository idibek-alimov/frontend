import React,{useState,useEffect} from 'react'
import './Detail.css'
import axios from 'axios'
import ShoppingCartOutlinedIcon from '../../../../../node_modules/@material-ui/icons/ShoppingCartOutlined';
import {store} from '../../../../store/store'
import {addToCart} from '../../../../store/actions'
import { useTranslation } from "react-i18next";
import '../../../../locals/i18n';

const Detail = ({match}) => {
    const { t } = useTranslation()
    const [product,setProduct] = useState()

    useEffect(()=>{
        axios.get(`https://maryam-backend.herokuapp.com/${match.params.id}`)
             .then(res=>setProduct(res.data))
             .catch(err=>console.log(err)) 

    },[])
    
    return <div>
        {product ?
        <div className='detailBox'>
            <div >
                <img className='detailPic' src={product.image}/>
            </div>
            <div className='detailData'>
                <div className='detailNamePrice'>
                    <span>{t("name")} : <b>{product.name}</b></span>
                    <span>{t("price")} : <b>{product.price} .cc</b></span>
                </div>
                <div className='detailSize'>
                    <span> {t("size")} : {product.size.map(size=>{
                        return <span> <b>{ size }</b>  </span>
                        }
                        )
                        }
                    </span>
                </div>
                <div className='detailDescription'>
                     <p>{t("description")} : <b>{product.description}</b></p>
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
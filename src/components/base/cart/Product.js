import React from 'react'
import {store} from '../../../store/store'
import {removeFromCart} from '../../../store/actions'
import './Cart.css'
import { useTranslation } from "react-i18next";
import '../../../locals/i18n';
import RemoveShoppingCartTwoToneIcon from '../../../../node_modules/@material-ui/icons/RemoveShoppingCartTwoTone';

const Product = ({category,id,name,price,image,description,size,author,likes_product  }) => {
  const { t } = useTranslation();
  return <div className='sectionProduct' key={id}>
    <div className='detailBox'>
            <div >
                <img className='detailPic' src={image}/>
            </div>
            <div className='detailData'>
                <div className='detailNamePrice'>
                    <span>{t("name")} : <b>{name}</b></span>
                    <span>{t("price")} : <b>{price} .cc</b></span>
                </div>
                <div className='detailSize'>
                    <span> {t("size")} : {size.map(size=>{
                        return <span> <b>{ size }</b>  </span>
                        }
                        )
                        }
                    </span>
                </div>
                <div className='detailDescription'>
                     <p>{t("description")} : <b>{description}</b></p>
                </div>
            </div>   
        </div> 
    <button className='addToCart' onClick={()=>store.dispatch(removeFromCart(id))}><RemoveShoppingCartTwoToneIcon/></button>
  </div>
}
export default Product
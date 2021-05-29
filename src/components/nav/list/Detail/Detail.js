import React,{useState,useEffect} from 'react'
import './Detail.css'
import axios from 'axios'

const Detail = ({match}) => {
    //console.log(match.params.id)
    const [product,setProduct] = useState()

    useEffect(()=>{
        axios.get(`https://young-escarpment-92727.herokuapp.com/${match.params.id}`)
             .then(res=>setProduct(res.data))
             .catch(err=>console.log(err)) 

    },[])
    
    return <div>
        {product ?
        <div className='detailBox'>
            <div className='detailPic'>
                this is where the pic will be
            </div>
            <div className='detailData'>
                <div className='detailNamePrice'>
                    <span>{product.name}</span>
                    <span>{product.price} .cc</span>
                </div>
                <div className='detailSize'>
                    <span>{product.size}</span>
                </div>
                <div className='detailDescription'>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
        : 'this product is no longer awailable'}
    </div>
}
export default Detail
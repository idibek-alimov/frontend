import React from 'react'
import './AddProduct.css'
import axios from 'axios'
import {store} from '../../store/store'

const AddProduct = () => {
    let config = {};
    if (localStorage.getItem('token')){ 
         config = {
         headers: {
         'Content-Type': 'application/json',
         Authorization: `Token ${JSON.parse(localStorage.getItem('token')).key}`,
         }
       };
       }
    let product = {
            "name": "",
            "description": "",
            "price": null,
            "size": [39,41],
            "subcategory": 1
    }
    const onSubmitForm = (evt) =>{
        evt.preventDefault()
        axios.post('https://young-escarpment-92727.herokuapp.com/',product,config)
             .then(res=>console.log(res))
             .catch(err=>console.log(err))
        //console.log(`Token ${JSON.parse(localStorage.getItem('token')).key}`)
    }
    const onInputChange = (evt) => {
        product[evt.target.name] = evt.target.value
        console.log(product)

    }
    return <div>
        <div className='addProductBox'>
            <h1>add You product here</h1>
            <div className='addProductInput'>
                <form onSubmit={onSubmitForm}>
                    <label>
                        <p>name</p>
                        <input name='name' onChange={onInputChange} placeholder='name' />
                    </label>
                    <label>
                        <p>description</p>
                        <input name='description' onChange={onInputChange} placeholder='description'  />
                    </label>
                        
                    <label>
                        <p>price</p>
                        <input name='price' onChange={onInputChange} placeholder='price'  />
                    </label>
                    {/* <label>
                        <p>size</p>
                        <input name='size' onChange={onInputChange} placeholder='size' />
                    </label> */}
                    <p></p>
                    <button className='addProductSubmit' type='submit'>submit</button>
                </form>
            </div>
        </div>
    </div>
}
export default AddProduct
import React,{useState,useEffect} from 'react'
import './AddProduct.css'
import axios from 'axios'
import {store} from '../../store/store'


let config = {};
if (localStorage.getItem('token')){ 
 config = {
    headers: {
      'Content-Type': 'multipart/form-data', //'application/json',
      Authorization: `Token ${JSON.parse(localStorage.getItem('token')).key}`,
    }
  };
}
const AddProduct = () => {
    const [url,setUrl] = useState()
    const [category,setCategory] = useState();
    const [newCategory,setNewCategory]  = useState()
    const [name,setName] = useState();
    const [price,setPrice] = useState();
    const [image,setImage] = useState();
    const [description,setDescription] = useState();
    
    useEffect(()=>{
        axios.get('https://maryam-backend.herokuapp.com/subcategory/')
         .then(res=>{
           setCategory(res.data.results); 
          })


    },[])
    
    const onSubmitForm = (evt) =>{
        evt.preventDefault()
        let form_data = new FormData();
        form_data.append('image',image,image.name);
        form_data.append('name',name);
        form_data.append('subcategory',1);//parseInt(newCategory));
        form_data.append('price',price);
        form_data.append('description',description);
        form_data.append('size',[30,40])
        axios.post('https://maryam-backend.herokuapp.com/',form_data,store.getState().token)
             .then(res=>console.log(res))
             .catch(err=>console.log(err))
    }
    return <div>
        <div className='addProductBox'>
            <h1>add You product here</h1>
            <div className='addProductInput'>
                <form onSubmit={onSubmitForm}>
                  <h2>Add your product</h2>
		          <label>
			        <p>Category</p>
                    <select onChange={evt=>{setNewCategory(evt.target.value)}} className='input'>
                      {category ? category.map(category=><option value={category.id}>{category.name}</option>) : ''}
                    </select>
  		          </label>
                  <label>
			        <p>Name</p>
			        <input type="text"  className='input' name='name' onChange={evt=>{setName(evt.target.value)}}/>
                  </label> 
                  <label>
			        <p>Price</p>
			        <input type="text"  className='input' name='price' onChange={evt=>{setPrice(evt.target.value)}}/>
                    </label>
                    <div>
                      {/* <img className="listImage" src={url} alt='some pic'/> */}
                    </div>
                    <label>
			          <p>Image</p>
			          <input type="file" 
                             name='image' 
                             accept="image/png, image/jpeg" 
                             onChange={evt=>{setImage(evt.target.files[0]);setUrl(URL.createObjectURL(evt.target.files[0]))}}/>
                      </label>
	 	              <label>
			            <p>Description</p>
			            <textarea type="text" className='input' name='description' onChange={evt=>{setDescription(evt.target.value)}}/>
                      </label>
		              <div>
			            <button className='submitButton' type="submit">Submit</button>
		              </div>
                </form>
            </div>
        </div>
    </div>
}
export default AddProduct
import React,{useState,useEffect} from 'react'
import './Search.css'
import {store}from '../../../store/store'
import {refreshTheSearch} from '../../../store/actions'
import {Redirect,useHistory} from 'react-router-dom'
import axios from 'axios'
import SearchIcon from '../../../../node_modules/@material-ui/icons/Search';

const Search = () => {
    let search='';
    let categoryID = 0;
    let history = useHistory();
    const [category,setCategory] = useState()
    
    useEffect(()=>{
        axios.get('https://maryam-backend.herokuapp.com/subcategory')
             .then(res=>setCategory(res.data.results))
             .catch(err=>console.log(err))
    },[])

    
    const onInputChange = (evt) => {
        search= evt.target.value
    }
    const onCategoryHandle = (evt) => {
        categoryID = evt.target.value 
    }
   
    const onFormSubmit = (evt) => {
        evt.preventDefault()
        store.dispatch(refreshTheSearch(categoryID,search));
        history.push('/search')
        window.location.reload()
        
    }
    return <div>
        <div className='searchBox'>
            <form className='searchBox' onSubmit={onFormSubmit}> 
                <select  className='selectCategory'  onChange={onCategoryHandle}>
                    <option value={0}>all</option>
                    {category ? category.map(category=>
                        <option value={category.id} key={category.id}>
    	                   {category.name}
                        </option>
                    ) : ''}
              
                </select>
                <input className='searchInput' onChange={onInputChange} />
                <button className='searchSubmit' type='submit' >
                    <SearchIcon/>
                </button>
            </form>
        </div>
    </div>

}
export default Search
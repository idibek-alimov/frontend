import React,{useState} from 'react'
import './Search.css'
import {store}from '../../../store/store'
import {refreshTheSearch} from '../../../store/actions'
import {Redirect,useHistory} from 'react-router-dom'
const Search = () => {
    let search='';
    let history = useHistory();
    const onInputChange = (evt) => {
        search= evt.target.value
    

    }
   
    const onFormSubmit = (evt) => {
        evt.preventDefault()
        store.dispatch(refreshTheSearch(0,search));
        history.push('/search')
        window.location.reload()
        
    }
    return <div>
        <div className='searchBox'>
            <form className='searchBox' onSubmit={onFormSubmit}> 
                <button className='all'>All</button>
                <input className='searchInput' onChange={onInputChange} />
                <button className='searchSubmit' type='submit' >Submit</button>
            </form>
        </div>
    </div>

}
export default Search
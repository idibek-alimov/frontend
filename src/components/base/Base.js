import React from 'react'
import {Link} from 'react-router-dom'
import './Base.css'
import Search from './search/Search'
import Register from './register/Register'
import Profile from './profile/Profile'

const Base = () => {
    return <div>
        <div className='baseBox'>
            <div className='maryamBox'>
                <h2><Link className='maryamLink' to={'/'}>Maryam</Link></h2>
            </div>
            <Search className='search'/>
            {localStorage.getItem('token') ? <Profile/> : <Register/>} 
        </div>

    </div>
}

export default Base
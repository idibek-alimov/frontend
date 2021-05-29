import React from 'react'
import {Link} from 'react-router-dom'
import './Base.css'
import Search from './search/Search'
import Register from './register/Register'
import Profile from './profile/Profile'

const Base = () => {
    return <div>
        <div className='baseBox'>
            <div className='baseTop'>
                <div className='maryamBox'>
                    <h2><Link className='maryamLink' to={'/'}>Maryam</Link></h2>
                </div>
                <div className='profileOrRegister'>
                  {localStorage.getItem('token') ? <Profile className='baseProfileBox'/> : <Register/>} 
                </div>
            </div>
            <div className='baseBottom'>
              <Search className='search'/>
            </div>
            
        </div>
    </div>
}

export default Base
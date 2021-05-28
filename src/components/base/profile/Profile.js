import React from 'react'
import './Profile.css'
import {Link} from 'react-router-dom'

const Profile = () => {
    const onLogout = () => {
        localStorage.removeItem('token');
        window.location.reload() 
    }
    return <div>
        <div className='productAdd'>
            <span><Link to='/add'>add product </Link></span>
            <button onClick={onLogout}>logout</button>
        </div>
        
    </div>
}
export default Profile
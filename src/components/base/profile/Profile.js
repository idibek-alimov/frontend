import React from 'react'
import './Profile.css'
import {Link} from 'react-router-dom'

const Profile = () => {
    const onLogout = () => {
        localStorage.removeItem('token');
        window.location.reload() 
    }
    return <div>
        <div className='profileDrop'>
                <div className='profileDropHover'>
                    <h2>profile</h2>
                </div>
                <div className='profileDropContent'>
                    <span className='addProductLink'><Link className='addProductLink' to='/add'>add product </Link></span>
                    <p></p>
                    <span onClick={onLogout}>logout</span> 
                    <p></p>
                    <span className='addProductLink'><Link className='addProductLink' to='/myproducts'>my product </Link></span>
                </div>
                
        </div>
        
    </div>
}
export default Profile
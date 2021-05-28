import React from 'react'
import {Link} from 'react-router-dom'
import './Register.css'
const Register = () => {
    return <div>
        <Link className='registerLink' to='/login'>Log In</Link>
        <Link className='registerLink' to='/signup'>Sign Up</Link>
    </div>
}
export default Register
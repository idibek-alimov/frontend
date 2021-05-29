import React from 'react'
import axios from 'axios'
import useToken from './useToken'
import {Redirect} from 'react-router-dom'

const Signup = () => {

    const { token ,setToken} = useToken();
    let credentials = {
        'username':'',
        'email':'',
        'password1':'',
        'password2':''
    };
    const onInputChange = (evt) =>{
        credentials[evt.target.name] = evt.target.value
        //console.log(credentials)

    }
    const onFormSubmit = (evt) => {
        evt.preventDefault()
        //console.log(credentials)
        axios.post('https://maryam-backend.herokuapp.com/rest-auth/registration/',credentials)
             .then(res=>setToken(res.data))
             .catch(err=>console.log(err))
             window.location.reload()      
    }
    if (localStorage.getItem('token')){
        return <Redirect to='/'/>
    }
    
    return <div>
        <div>
            <h1>Please log in</h1>
            <div>
                <form onSubmit={onFormSubmit}>
                  <input name='username' onChange={onInputChange} placeholder='username'/>
                  <input name='email' type='email' onChange={onInputChange} placeholder='email'/>
                  <input name='password1' type='password' onChange={onInputChange} placeholder='password'/>
                  <input name='password2' type='password' onChange={onInputChange} placeholder='password confirm'/>
                  <button type='sumbit'>sumbit</button>
                </form>
            </div>
        </div>
    </div>
}
export default Signup
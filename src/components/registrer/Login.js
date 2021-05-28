import React from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import useToken from './useToken'

import {store} from '../../store/store'
import {addToken} from '../../store/actions'

const Login = () => {

    const { token ,setToken} = useToken();
    let credentials = {
        'username':'',
        'password':''
    };
    const onInputChange = (evt) =>{
        credentials[evt.target.name] = evt.target.value
        //console.log(credentials)

    }
    
    const onFormSubmit = (evt) => {
        evt.preventDefault()
        
        axios.post('https://young-escarpment-92727.herokuapp.com/rest-auth/login/',credentials)
             .then(res=>{setToken(res.data);
                         store.dispatch(addToken({
                            headers: {
                                'Content-Type': 'multipart/form-data',//'application/json',
                                Authorization: `Token ${res.data.key}`,
                                }
                            }));
                            window.location.reload() ;
                         })
                    
              .catch(err=>console.log(err))
               
    
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
                  <input name='password' type='password' onChange={onInputChange} placeholder='password'/>
                  <button type='sumbit'>sumbit</button>
                </form>
            </div>
        </div>
    </div>
}
export default Login
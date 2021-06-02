import React from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import useToken from './useToken'
import './Register.css'
import {store} from '../../store/store'
import {addToken} from '../../store/actions'
import { useTranslation } from "react-i18next";
import '../../locals/i18n';

const Login = () => {
    const { t } = useTranslation()
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
        
        axios.post('https://maryam-backend.herokuapp.com/rest-auth/login/',credentials)
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
        <div className='loginBox'>
            <h1>{t("loginpage")}</h1>
            <div>
                <form onSubmit={onFormSubmit}>
                  <label>
                      <p><h3>{t("username")}</h3></p>  
                    <input className='input' name='username' onChange={onInputChange} placeholder={t("username")}/>
                  </label>
                  <label>
                      <p><h3>{t('password')}</h3></p>
                    <input className='input' name="password"type='password' onChange={onInputChange} placeholder={t("password")}/>
                  </label>
                  <label>
                      <p></p>
                    <button className='submitButton' type='sumbit'>sumbit</button>
                  </label> 
                </form>
            </div>
        </div>
    </div>
}
export default Login
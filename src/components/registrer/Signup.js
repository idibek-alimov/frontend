import React from 'react'
import axios from 'axios'
import useToken from './useToken'
import {Redirect} from 'react-router-dom'
import { useTranslation } from "react-i18next";
import '../../locals/i18n';

const Signup = () => {

    const { t } = useTranslation()
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
        <div className='loginBox'>
            <h1>{t('signuppage')}</h1>
            <div>
                <form onSubmit={onFormSubmit}>
                    <label>
                        <p><h3>{t("username")}</h3></p>
                        <input className='input' name='username' onChange={onInputChange} placeholder={t("username")} />     
                    </label>
                    <label>
                        <p><h3>{t("email")}</h3></p>
                        <input className='input' name='email' type='email' onChange={onInputChange} placeholder={t("email")}/>
                    </label>
                    <label>
                        <p><h3>{t("password")}</h3></p>
                        <input className='input' name='password1' type='password' onChange={onInputChange} placeholder={t('password')} />
                    </label>  
                    <label>
                        <p><h3>{t("passwordconfirm")}</h3></p>
                        <input className='input' name='password2' type='password' onChange={onInputChange} placeholder={t('passwordconfirm')} />
                    </label>
                    <p></p>
                 <button className='submitButton' type='sumbit'>sumbit</button>
                </form>
            </div>
        </div>
    </div>
}
export default Signup
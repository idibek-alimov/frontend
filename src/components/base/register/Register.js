import React from 'react'
import {Link} from 'react-router-dom'
import './Register.css'
import { useTranslation } from "react-i18next";
import '../../../locals/i18n';

const Register = () => {
    const { t } = useTranslation(); 
    return <div>
        <Link className='registerLink' to='/login'>{t("login")}</Link>
        <Link className='registerLink' to='/signup'>{t("signup")}</Link>
    </div>
}
export default Register
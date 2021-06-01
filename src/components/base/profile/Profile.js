import React from 'react'
import './Profile.css'
import {Link} from 'react-router-dom'
import DehazeIcon from '../../../../node_modules/@material-ui/icons/Dehaze';
import { useTranslation } from "react-i18next";
import '../../../locals/i18n';
import Trans from '../translation/Trans'

const Profile = () => {
    const { t } = useTranslation(); 

    const onLogout = () => {
        localStorage.removeItem('token');
        window.location.reload() 
    }
    return <div>
        <div className='profileDrop'>
                <div className='profileDropHover'>
                    <DehazeIcon />
                </div>
                <div className='profileDropContent'>
                    <span className='addProductLink'><Link className='addProductLink' to='/add'>{t("addProduct")}</Link></span>
                    <p></p>
                    <span onClick={onLogout}>{t("logout")}</span> 
                    <p></p>
                    <span className='addProductLink'><Link className='addProductLink' to='/myproducts'>{t("myProducts")}</Link></span>
                    <div className='profileTrans'>
                        <Trans  />
                    </div>
                </div>
                
        </div>
        
    </div>
}
export default Profile
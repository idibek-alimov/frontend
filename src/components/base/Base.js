import React from 'react'
import {Link} from 'react-router-dom'
import './Base.css'
import Search from './search/Search'
import Register from './register/Register'
import Profile from './profile/Profile'
import ShoppingCartOutlinedIcon from '../../../node_modules/@material-ui/icons/ShoppingCartOutlined';
import ConnectedCartCount from './cart/ConnectedCartCount'
import Trans from './translation/Trans'
import {store} from '../../store/store'
import { useTranslation } from "react-i18next";
import '../../locals/i18n';

const Base = () => {
    const { t } = useTranslation();  
    return <div>
        <div className='baseBox'>
            <div className='baseTop'>
                <div className='maryamBox'>
                    <h2><Link className='maryamLink' to={'/'}>Maryam</Link></h2>
                </div>
                <div className='baseCart'>
                    <Link className='cartLink' to={'/cart'}>
                        <ShoppingCartOutlinedIcon  style={ {height: 40, width: 40} } />
                    </Link>
                    <ConnectedCartCount className='baseCartCount' />
                </div>
                <div>
                    <Trans />
                </div>
                <div>
                  { localStorage.getItem('token') ? 
                  <div>
                      {t("hello")},<b>{store.getState().username}</b>
                  </div>
                  : ''} 
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
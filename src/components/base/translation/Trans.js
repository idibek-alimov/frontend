import React from 'react'
import './Trans.css'
import {store} from '../../../store/store'
import {changeTheLanguage} from '../../../store/actions'
const Trans = () => {
    return <div className='transBox'>
        <select className='transSelector' value={store.getState().language} onChange={evt=>store.dispatch(changeTheLanguage(evt.target.value))}>
            <option value='en' >english</option>
            <option value='tj' >tajik</option>
            <option value='ru' >Russian</option>
            {/* data-img_src */}
        </select>
    </div>
}
export default Trans
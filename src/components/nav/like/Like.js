import React,{useState,useEffect} from 'react'
import './Like.css'
import FavoriteIcon from '../../../../node_modules/@material-ui/icons/Favorite';
import FavoriteBorderIcon from '../../../../node_modules/@material-ui/icons/FavoriteBorder';
import { FavoriteBorder } from '@material-ui/icons';

const Like = ({likes}) => {
    const [likes_it,setLikes_it] = useState(likes)

    return <span onClick={evt=>{setLikes_it(0)}}>
            {likes_it === 1 ?
               <FavoriteIcon/>
               : <FavoriteBorderIcon/>} 
    </span>

}
export default Like
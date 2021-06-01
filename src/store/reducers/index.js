import { combineReducers } from 'redux';

import productReducer from './products';
import cartReducer from './cart';
import languageReducer from './language';
import searchReducer from './search';
import userReducer from './user';
import tokenReducer from './token'
import categoryReducer from './category'

const appReducer = combineReducers({
    product:productReducer,
    category:categoryReducer,
    cart: cartReducer,
    language: languageReducer,
    search: searchReducer,
    username: userReducer,
    token:tokenReducer,
})

export default appReducer
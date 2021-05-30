import { connect } from 'react-redux'
import CartList from './CartList';
//import store from '../App';
import {store} from '../../../store/store'

const mapStateToProps = (state) => {
   const products = state.cart
   return {
      products
}
}

const ConnectedCart = connect(mapStateToProps)(CartList)
export default ConnectedCart;
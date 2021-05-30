import { connect } from 'react-redux'
import CartCount from './CartCount';
import store from '../../../store/store'

const mapStateToProps = (state) => {
   const products = state.cart
   return {
    //products: [{name:'nike',price:'00'},{name:'rebook',price:'00'}]
      products
}
}

const ConnectedCartCount = connect(mapStateToProps)(CartCount)

export default ConnectedCartCount
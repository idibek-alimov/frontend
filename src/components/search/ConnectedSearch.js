import { connect } from 'react-redux'
import Search from './Search'
import store from '../../store/store'

const mapStateToProps = (state) => {
   const search = state.search
   return {
       search
}
}

const ConnectedSearch = connect(mapStateToProps)(Search)
export default ConnectedSearch;
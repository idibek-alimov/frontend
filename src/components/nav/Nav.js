import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import List from './list/List'
import AddProduct from '../addProduct/AddProduct'
import ConnectedSearch from '../search/ConnectedSearch'
import Detail from './list/Detail/Detail'
import MyProducts from '../Profile/myProducts/MyProducts'
import ConnectedCart from '../base/cart/ConnectedCart'

const Nav = () => {
    return <div>
        <Switch>
          <Route path='/add/' exact>
            <AddProduct/>
          </Route>
          <Route path='/search/' exact>
              <ConnectedSearch />
          </Route>
          <Route path='/myproducts/'>
              <MyProducts />
          </Route> 
          <Route path='/cart'>
              <ConnectedCart/>
          </Route>


          <Route path='/detail/:id/' component={Detail}/>
          <Route path='/'>
              <List/>
          </Route>

        </Switch>
    </div>

}
export default Nav
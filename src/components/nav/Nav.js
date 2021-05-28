import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import List from './list/List'
import AddProduct from '../addProduct/AddProduct'
import ConnectedSearch from '../search/ConnectedSearch'
const Nav = () => {
    return <div>
        <Switch>
          <Route path='/add/' exact>
            <AddProduct/>
          </Route>
          <Route path='/search/'>
              <ConnectedSearch/>
          </Route>
          <Route path='/'>
              <List/>
          </Route>

        </Switch>
    </div>

}
export default Nav
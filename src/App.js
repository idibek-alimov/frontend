
import Base from './components/base/Base'
import Nav from './components/nav/Nav'
import Bottom from './components/base/bottom/Bottom'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './components/registrer/Login'
import Signup from './components/registrer/Signup'
import { store,persistor}  from './store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

const App = () => {
  return <div>
    
    <Router>
        <Provider store={store}>
            <PersistGate loading={null} persistor = {persistor}> 
                <Base />
                <Switch>
                    <Route path='/login/' exact>
                        <Login/>
                    </Route>
                    <Route path='/signup/' exact>
                        <Signup/>
                    </Route>
                    <Route path='/'  >
                        {/* <Provider store={store}>
                          <PersistGate loading={null} persistor = {persistor}>  */}
                        <Nav/>
            {/* </PersistGate> 
          </Provider>    */}
                    </Route>
                </Switch>
            </PersistGate> 
        </Provider> 
    </Router>    
    <Bottom/>
  </div>
}

export default App;

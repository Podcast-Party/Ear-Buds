import React, {Component} from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import {
 Navbar,
 SignIn
} from './components'
import Rooms from './components/Rooms';
import App from './components/App';
import SingleRoom from './components/SingleRoom';

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
        // <BrowserRouter>
        <>
            <Navbar />
            <Switch>
            <Route exact path='/room/:roomId' component={SingleRoom} />
              {/* <Route exact path='/rooms' component={Rooms} /> */}
                <Route exact path="/signin" component={SignIn} />
            </Switch>
          {/* </BrowserRouter> */}
            </>
    )
  }
}
export default Routes

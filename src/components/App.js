import React from 'react';
import '../css/App.css';
import {SideNav, SideNavItem, Button, Collapsible, CollapsibleItem, Collection, CollectionItem} from 'react-materialize'
import io from 'socket.io-client';
import {connect} from 'react-redux'

import Home from './Home'
import Login from './Login'
import {getOrders,setActiveOrder} from '../actions'
import { request, AuthenticationService } from '../helpers'

const App = (props) => {

  request('/auth/token')
      .then(response => {
        AuthenticationService.setAuthState(response.data)

      })

  return (
    <div>
      {props.activePage.id === 0 ? <Home/> : null}
      {props.activePage.id === 1 ? <Login/> : null}
    </div>
  )
}


const mapStateToProps = ({activePage}) => ({activePage})
export default connect(mapStateToProps)(App)

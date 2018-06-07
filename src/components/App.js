import React from 'react';
import '../css/App.css';
import {SideNav, SideNavItem, Button, Collapsible, CollapsibleItem, Collection, CollectionItem} from 'react-materialize'
import io from 'socket.io-client';
import {connect} from 'react-redux'

import Home from './Home'
import Login from './Login'
import { request, AuthenticationService } from '../helpers'

// const token = localStorage.getItem('token') || 12345
// const socket = io.connect(`http://localhost:3000?token=${token}`, {reconnect: true})
//
// const handlePlaceOrder = event => {
//   console.log('hi');
//   // socket.emit('chat message',`${token}`)
// }

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

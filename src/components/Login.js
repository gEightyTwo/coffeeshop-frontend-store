import React from 'react';
import '../css/App.css';
import {SideNav, SideNavItem, Button, Collapsible, CollapsibleItem, Collection, CollectionItem} from 'react-materialize'
import io from 'socket.io-client';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'


import {changeActivePage} from '../actions'
// import { withAuthentication } from '../helpers'
import { request, AuthenticationService, withAuthentication } from '../helpers'


//
// const token = localStorage.getItem('token') || 12345
// const socket = io.connect(`http://localhost:3000?token=${token}`, {reconnect: true})


const handleSignIn = (event, props) => {
  event.preventDefault()
  const { inputEmail, inputPassword } = event.target
  request('/auth/token','post', {
    email: inputEmail.value,
    password: inputPassword.value })
  .then(response => {
    // this.setState({ showErrorMessage: false })
    localStorage.setItem('token', response.data.token)
    props.changeActivePage(3)
  })
  .catch(error => {
    // this.setState({showErrorMessage: true})
  })
}



const Login = (props) => {
  return (
    <div className='container'>
      <section className='register-section'>
        <form className='register-form' id='login-form' onSubmit={event => handleSignIn(event,props)}>
          <input type="email" name='inputEmail' className="validate" placeholder='Email Address'/>
          <input type="password"  name='inputPassword' className="validate" placeholder='Password'/>
          <Button waves='light' className='login-button' type="submit" form="login-form" value="Login">Login</Button>
        </form>
    </section>
    </div>

)}

const mapDispatchToProps = dispatch => bindActionCreators({changeActivePage}, dispatch)
const mapStateToProps = ({activePage, cart}) => ({activePage,cart})
export default connect(mapStateToProps,mapDispatchToProps)(Login)

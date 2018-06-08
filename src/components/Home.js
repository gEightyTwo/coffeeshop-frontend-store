import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import Moment from 'react-moment'
import 'moment-timezone'
import {getOrders,setActiveOrder, updateOrderStatus} from '../actions'
import { request, AuthenticationService, withAuthentication } from '../helpers'


import io from 'socket.io-client';

const token = localStorage.getItem('token') || 12345
const socket = io.connect(`http://localhost:3000?token=${token}`, {reconnect: true})




const handleGetOrders = props => {
  console.log('getting orders');
  const ownerId = props.authState ? props.authState.id : null
  console.log('handleGetOrders',props, ownerId);
  // props.getOrders(ownerId)
  props.getOrders(1)
}

const handleOrderSelection = (props, order) => {
  console.log(order);
  props.setActiveOrder(order)
}

const handleCompleteOrder = (props, is_fulfilled) => {
  props.updateOrderStatus(props.authState.id,props.activeOrder.id, is_fulfilled, false)
}

class Home extends Component {
constructor(props){
  super(props)
}

componentDidMount(){
  const props = this.props
  const {activeOrder} = props
  if (!props.orders.length) handleGetOrders(props)
  // if (props.orders.length && !props.activeOrder.id) handleOrderSelection(props, props.orders[0])
  // socket.on('chat message response', (msg) => {
  //     console.log('hiiiiii')
  //     handleGetOrders(props)
  //     this.forceUpdate()
  // })
}

render(){
  const props = this.props
  socket.on('chat message response', (msg) => {
      // console.log('hiiiiii')
      handleGetOrders(props)
      this.forceUpdate()
  })

    const {activeOrder} = props
    // if (!props.orders.length) handleGetOrders(props)
    if (props.orders.length && !props.activeOrder.id) handleOrderSelection(props, props.orders[0])
    return (
      <div className='container'>
        <section className='order-queue'>
          {/* {console.log(props.orders)} */}
          {props.orders
            .filter(order => order.orderItems.length)
            .sort((a,b) => {
              if (a.is_fulfilled && !b.is_fulfilled) return -1
              if (b.is_fulfilled && !a.is_fulfilled) return 1
              return Date.parse(a.pickup_time)-Date.parse(b.pickup_time)
            })
            .map(order=>(
            <div className={`left-card ${order.is_fulfilled ? 'fulfilled' : null}`} key={order.id} onClick={()=>handleOrderSelection(props, order)}>
              <h1 className='card-order-items'>{
                order.orderItems.map(item=>item.item_name+ ' ' + item.product_size).join(', ').length > 40
                ? order.orderItems.map(item=>item.item_name+ ' ' + item.product_size).join(', ').slice(0,40)+'...'
                : order.orderItems.map(item=>item.item_name+ ' ' + item.product_size).join(', ')
              }</h1>
              <div className='card-content'>
                <h2 className='card-customer-name'>
                  {order.first_name} {order.last_name}
                </h2>
                <div className='card-pickup-time-block'>
                  {order.is_fulfilled
                    ?
                      <div className='card-pickup-time-block'>
                        <i className="far fa-check-circle"></i>
                        <span className='card-pickup-time'>done</span>
                      </div>
                    :
                      <div className='card-pickup-time-block'>
                        <i className="far fa-clock"></i>
                        <span className='card-pickup-time'>{<Moment to={order.pickup_time} >{new Date}</Moment>}</span>
                      </div>
                 }



                </div>
              </div>
              <h3 className='card-order-id'>ORDER ID #{order.order_shortid ? order.order_shortid.toUpperCase() : null}</h3>
          </div>
        ))}
          {/* <div className={`left-card`}>
            <h1 className='card-order-items'>{'sdsds'}</h1>
            <div className='card-content'>
              <h2 className='card-customer-name'>
                Dan Dog
              </h2>
              <div className='card-pickup-time-block'>
                <i className="far fa-check-circle"></i>
                <span className='card-pickup-time'>{'active'}</span>
              </div>
            </div>
            <h3 className='card-order-id'>ORDER ID {'shortid'}</h3>
        </div> */}



        <div className='left-card'></div>
        <div className='left-card'></div>
        <div className='left-card'></div>



        </section>
        <section className='order-item'>


          <header className='order-header'>
            <div>
              <h1 className='order-id'>ORDER #{activeOrder.order_shortid ?activeOrder.order_shortid.toUpperCase() : null }</h1>
              <h1 className='order-customer-name'>{activeOrder.first_name} {activeOrder.last_name}</h1>
            </div>
            <div className='order-pickup-time-block'>
              <i className="far fa-clock"></i>
              <span className='order-pickup-time'>{<Moment to={activeOrder.pickup_time} >{new Date}</Moment>}</span>
            </div>
          </header>

          {activeOrder.orderItems ? activeOrder.orderItems.map(item=>
            <div className='order-card' key={item.id}>
              <h1>{item.item_name+ ' - ' + item.product_size}</h1>
              <ul>
                <li>{item.espresso_shots + item.extra_espresso_shots} SHOTS</li>
                <li>{item.product_milk}</li>
              </ul>
            </div>
          )
          : null
        }


          <footer className='order-footer'>
            {props.activeOrder.is_fulfilled
              ? <div className='order-button' onClick={()=>handleCompleteOrder(props, false)}>Redo Order</div>
              : <div className='order-button' onClick={()=>handleCompleteOrder(props, true)}>Complete Order</div>
              }
          </footer>

        </section>
      </div>
    )
  }
}




const mapDispatchToProps = dispatch => bindActionCreators({getOrders,setActiveOrder, updateOrderStatus}, dispatch)
const mapStateToProps = ({orders, activeOrder}) => ({orders, activeOrder})
export default connect(mapStateToProps,mapDispatchToProps)(withAuthentication(Home))

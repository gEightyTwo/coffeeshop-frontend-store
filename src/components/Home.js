import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import {getOrders} from '../actions'
import { request, AuthenticationService, withAuthentication } from '../helpers'


// import io from 'socket.io-client';

const handleGetOrders = props => {
  const ownerId = props.authState ? props.authState.id : null
  props.getOrders(ownerId)
}

const Home = props => {

    return (
      <div className='container'>
        <section className='order-queue'>
          {props.orders
            .sort((a,b)=> a.orderStatus === 'done' ? false : true)
            .map(el=>(
            <div className={`left-card ${el.orderStatus === 'done' ? 'fulfilled' : null}`}>
            <h1 className='card-order-items'>{el.orderItems[0].count} x {el.orderItems[0].itemName}, {el.orderItems[0].size}</h1>
            <div className='card-content'>
              <h2 className='card-customer-name'>
                {el.orderUserName}
              </h2>
              <div className='card-pickup-time-block'>
                <i className="far fa-check-circle"></i>
                <span className='card-pickup-time'>{el.orderStatus}</span>
              </div>
            </div>
            <h3 className='card-order-id'>ORDER ID {el.orderId}</h3>
          </div>
        ))}

          <div className='left-card'></div>
          <div className='left-card'></div>
          <div className='left-card'></div>
          <div className='left-card'></div>
          <div className='left-card'></div>
          <div className='left-card'></div>
          <div className='left-card'></div>
          <div className='left-card'></div>
          <div className='left-card'></div>
          <div className='left-card'></div>


        </section>
        <section className='order-item'>


          <header className='order-header'>
            <div>
              <h1 className='order-id'>ORDER #AS6ASF876</h1>
              <h1 className='order-customer-name'>Mark Pavlovski</h1>
            </div>
            <div className='order-pickup-time-block'>
              <i className="far fa-clock"></i>
              <span className='order-pickup-time'>5 min</span>
            </div>
          </header>


          <div className='order-card'>
            <h1>1 x Americano - 12 oz</h1>
            <ul>
              <li>2 Shots</li>
              <li>2% Milk</li>
            </ul>
          </div>
          <div className='order-card'>
            <h1>1 x Latte - 16 oz</h1>
            <ul>
              <li>2 Shots</li>
              <li>Extra Shot</li>
              <li>Almond Milk</li>
            </ul>
          </div>



          <footer className='order-footer'>
            <div className='order-button' onClick={()=>handleGetOrders(props)}>Complete Order</div>
          </footer>

        </section>
      </div>
    )
  }




const mapDispatchToProps = dispatch => bindActionCreators({getOrders}, dispatch)
const mapStateToProps = ({orders}) => ({orders})
export default connect(mapStateToProps,mapDispatchToProps)(withAuthentication(Home))




//
// // import io from 'socket.io-client';
//
// class Home extends Component {
//
//   constructor(props){
//     super(props)
//     // this.token = localStorage.getItem('token') || 12345
//     // this.socket = io.connect(`http://localhost:3000?token=${this.token}`, {reconnect: true})
//     // this.socket.on('chat message response', (msg) => {
//     //   console.log('hi!!!!', msg)
//     //   this.setState({orders: [...this.state.orders, {
//     //     orderId: '#AS6ASF876',
//     //     orderUserName: 'Dan Dog',
//     //     orderStatus: '2 min',
//     //     orderTargetTime: new Date(),
//     //     orderItems: [
//     //       {
//     //         itemName: 'Americano',
//     //         count: 1,
//     //         size: '12 oz',
//     //         milk: '2% Milk',
//     //         expresso: 'Double Shot'
//     //       }
//     //     ]
//     //   }]})
//     // })
//   }
//
//   render(){
//     //
//     // const token = localStorage.getItem('token') || 12345
//     // const socket = io.connect(`http://localhost:3000?token=${token}`, {reconnect: true})
//     //
//     // socket.on('chat message response', function(msg){
//     //   const location = currentLocation ? currentLocation : fallbackLocation
//     //   updateCoordinateFeedback()
//     //   getMessages(distanceEl.value, messageContainer, location, toggleEl.checked)
//     // })
//
//     return (
//       <div className='container'>
//         <section className='order-queue'>
//           {this.state.orders
//             .sort((a,b)=> a.orderStatus === 'done' ? false : true)
//             .map(el=>(
//             <div className={`left-card ${el.orderStatus === 'done' ? 'fulfilled' : null}`}>
//             <h1 className='card-order-items'>{el.orderItems[0].count} x {el.orderItems[0].itemName}, {el.orderItems[0].size}</h1>
//             <div className='card-content'>
//               <h2 className='card-customer-name'>
//                 {el.orderUserName}
//               </h2>
//               <div className='card-pickup-time-block'>
//                 <i className="far fa-check-circle"></i>
//                 <span className='card-pickup-time'>{el.orderStatus}</span>
//               </div>
//             </div>
//             <h3 className='card-order-id'>ORDER ID {el.orderId}</h3>
//           </div>
//         ))}
//
//           <div className='left-card'></div>
//           <div className='left-card'></div>
//           <div className='left-card'></div>
//           <div className='left-card'></div>
//           <div className='left-card'></div>
//           <div className='left-card'></div>
//           <div className='left-card'></div>
//           <div className='left-card'></div>
//           <div className='left-card'></div>
//           <div className='left-card'></div>
//
//
//         </section>
//         <section className='order-item'>
//
//
//           <header className='order-header'>
//             <div>
//               <h1 className='order-id'>ORDER #AS6ASF876</h1>
//               <h1 className='order-customer-name'>Mark Pavlovski</h1>
//             </div>
//             <div className='order-pickup-time-block'>
//               <i className="far fa-clock"></i>
//               <span className='order-pickup-time'>5 min</span>
//             </div>
//           </header>
//
//
//           <div className='order-card'>
//             <h1>1 x Americano - 12 oz</h1>
//             <ul>
//               <li>2 Shots</li>
//               <li>2% Milk</li>
//             </ul>
//           </div>
//           <div className='order-card'>
//             <h1>1 x Latte - 16 oz</h1>
//             <ul>
//               <li>2 Shots</li>
//               <li>Extra Shot</li>
//               <li>Almond Milk</li>
//             </ul>
//           </div>
//
//
//
//           <footer className='order-footer'>
//             <div className='order-button'>Complete Order</div>
//           </footer>
//
//         </section>
//       </div>
//     )
//   }
// }

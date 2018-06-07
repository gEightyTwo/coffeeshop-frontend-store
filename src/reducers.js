import { combineReducers } from 'redux'

import {
  GET_ORDERS,
  CHANGE_ACTIVE_PAGE
} from './actions'

const INITIAL_PAGE = {id: 0, pageName: 'home'}
const INITIAL_ORDERS = [
  {
    orderId: '#AS6ASF876',
    orderUserName: 'Dan Dog',
    orderStatus: '5 min',
    orderTargetTime: new Date(),
    orderItems: [
      {
        itemName: 'Latte',
        count: 2,
        size: '16 oz',
        milk: 'Skim Milk',
        expresso: 'Double Shot'
      },
      {
        itemName: 'Americano',
        count: 1,
        size: '12 oz',
        milk: '2% Milk',
        expresso: 'Double Shot'
      }
    ]
  },
  {
    orderId: '#AS6ASF876',
    orderUserName: 'Dan Dog',
    orderStatus: 'done',
    orderTargetTime: new Date(),
    orderItems: [
      {
        itemName: 'Americano',
        count: 1,
        size: '12 oz',
        milk: '2% Milk',
        expresso: 'Double Shot'
      }
    ]
  }
]



const activePage = (state = INITIAL_PAGE, action) => {
  switch(action.type){
    case CHANGE_ACTIVE_PAGE: return action.payload
    default: return state
  }
}


const orders = (state = INITIAL_ORDERS, action) => {
  switch(action.type){
    case GET_ORDERS: {
      console.log(action.payload.data.data)
      return action.payload.data.data}
    default: return state
  }
}


export default combineReducers({ activePage, orders })

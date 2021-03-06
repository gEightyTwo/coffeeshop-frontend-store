import axios from 'axios'
import { request } from './helpers'

export const CHANGE_ACTIVE_PAGE = 'CHANGE_ACTIVE_PAGE'
export const GET_ORDERS = 'GET_ORDERS'
export const SET_ACTIVE_ORDER = 'SET_ACTIVE_ORDER'



const pages = [
  {id: 0, name: 'home'},
  {id: 1, name: 'login'}
]



const API = `${process.env.REACT_APP_BACKEND}`


export const changeActivePage = pageId => (
  dispatch => {
      dispatch({
        type: CHANGE_ACTIVE_PAGE,
        payload: pages.find(el => el.id === pageId)
      })
  }
)


export const getOrders = userId => (
  dispatch => {
    console.log(userId);
    request(`/api/shop/${userId}/orders`)
    .then(orders => {
      console.log('this is dispatching...')
      dispatch({
        type: GET_ORDERS,
        payload: orders
      })
    })
  }
)


export const setActiveOrder = order => (
  dispatch => {
    dispatch({
      type: SET_ACTIVE_ORDER,
      payload: order
    })
  }
)


export const updateOrderStatus = (userId, orderId, is_fulfilled, is_canceled) => (
  dispatch => {
    request(`/api/shop/${userId}/orders/${orderId}`, 'patch', {is_fulfilled, is_canceled})
    .then(() => {
      dispatch(getOrders())
    })
  }
)

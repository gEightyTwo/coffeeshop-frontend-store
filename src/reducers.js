import { combineReducers } from 'redux'

import {
  // GET_ALL_ITEMS,
  CHANGE_ACTIVE_PAGE
} from './actions'

const INITIAL_PAGE = {id: 1, pageName: 'home'}
const INITIAL_ALL_ITEMS = []



const activePage = (state = INITIAL_PAGE, action) => {
  switch(action.type){
    case CHANGE_ACTIVE_PAGE: return action.payload
    default: return state
  }
}


const allItems = (state = INITIAL_ALL_ITEMS, action) => {
  switch(action.type){
    // case GET_ALL_ITEMS: return action.payload
    default: return state
  }
}


export default combineReducers({ activePage, allItems })

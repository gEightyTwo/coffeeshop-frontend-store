import { combineReducers } from 'redux'

import { DO_ACTION } from './actions'

const INITIAL_VALUE = []

const myResource = (state = INITIAL_VALUE, action) => {
  switch(action.type){
    case DO_ACTION: return action.payload
    default: return state
  }
}


export default combineReducers({ myResource })

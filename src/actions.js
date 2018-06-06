import axios from 'axios'
import { request } from './helpers'

export const CHANGE_ACTIVE_PAGE = 'CHANGE_ACTIVE_PAGE'


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

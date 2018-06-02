import axios from 'axios'
import { request } from './helpers'

export const DO_ACTION = 'DO_ACTION'




const API = `${process.env.REACT_APP_BACKEND}`


export const doAction = () => (
  dispatch => {
    axios.get(`${API}/api/`)
    .then((response) => {
      dispatch({
        type: DO_ACTION,
        payload: response.data.data
      })
    })
  }
)

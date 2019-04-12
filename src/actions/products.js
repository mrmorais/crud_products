import fetch from 'node-fetch'

import * as Action from './constants'
import { SERVER_URL } from '../config'

export function setProducts(data) {
  return ({
    type: Action.SET_PRODUCTS,
    data
  })
}

export function loadProducts() {
  return (dispatch) => {
    fetch(`${SERVER_URL}/product`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then((body) => {
      dispatch(setProducts(body.data.reverse()))
    })
  }
}

export function createNewProduct(body, success, error) {
  return (dispatch) => {
    fetch(`${SERVER_URL}/product`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(() => {
      dispatch(loadProducts())
      success()
    })
    .catch(error)
  }
}

export function removeProduct(productId) {
  return (dispatch) => {
    fetch(`${SERVER_URL}/product/${productId}`, {
      method: 'DELETE',
      mode: 'cors'
    })
    .then(() => {
      dispatch(loadProducts())
    })
  }
}
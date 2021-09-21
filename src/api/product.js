import apiUrl from '../apiConfig'
import axios from 'axios'

export const viewProducts = () => {
  return axios({
    url: apiUrl + '/products',
    method: 'GET'
  })
}

export const showOneProduct = (id) => {
  return axios({
    method: 'GET',
    url: apiUrl + `/product/${id}`
  })
}

export const createOrder = (user, order) => {
  console.log('print', order)
  return axios({
    method: 'POST',
    url: apiUrl + '/orders/',
    headers: {
      Authorization: `Token ${user.token}`
    },
    data: JSON.stringify(order)
  })
}

export const viewOrderProducts = (user, order) => {
  console.log('this is order from API', order)
  return axios({
    url: apiUrl + `/order/${order.id}`,
    method: 'GET',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const updateOrder = (user, product, order) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + `/order/${order.id}/product/${product.id}`,
    headers: {
      Authorization: 'Token ' + user.token
    },
    data: JSON.stringify(product)
  })
}

export const deleteOrder = (user) => {
  return axios({
    url: apiUrl + '/order/',
    method: 'DELETE',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const createCart = (user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/cart/',
    headers: {
      Authorization: `Token ${user.token}`
    },
    data: {}
  })
}

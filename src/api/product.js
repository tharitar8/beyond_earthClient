import apiUrl from '../apiConfig'
import axios from 'axios'

// show all products on firstPage/HomePage no Token needed
export const viewProducts = () => {
  return axios({
    url: apiUrl + '/products',
    method: 'GET'
  })
}

// show OneProduct when click  on product name at firstPage
export const showOneProduct = (id) => {
  return axios({
    method: 'GET',
    url: apiUrl + `/product/${id}`
  })
}

// When Sign-in order created
export const createOrder = (user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/orders/',
    headers: {
      Authorization: `Token ${user.token}`
    },
    data: {}
  })
}

// have to make an patch route when add to cart
export const updateOrder = (user, order, product) => {
  // debugger
  return axios({
    method: 'PATCH',
    url: apiUrl + `/order/${order.id}/product/${product.id}/`,
    headers: {
      Authorization: `Token ${user.token}`
    },
    data: JSON.stringify(product)
  })
}

// get all orders
export const showAllOrders = (user, order) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/orders/',
    headers: {
      Authorization: `Token ${user.token}`
    },
    data: JSON.stringify(order)
  })
}
// get specific order to show
export const showOneOrder = (user, order) => {
  console.log('this is order from API', order)
  return axios({
    url: apiUrl + `/order/${order.id}`,
    method: 'GET',
    headers: {
      Authorization: `Token ${user.token}`
    },
    data: JSON.stringify(order)
  })
}

// delete whole order
export const deleteOrder = (user, order) => {
  return axios({
    url: apiUrl + `/order/${order.id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

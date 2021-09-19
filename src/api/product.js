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
    url: apiUrl + `/products/${id}`
  })
}

export const addToCartPage = (product, user) => {
  console.log('send', product)
  return axios({
    method: 'POST',
    url: apiUrl + '/products/cart',
    headers: {
      Authorization: `Token ${user.token}`
    },
    data: { product }
  })
}

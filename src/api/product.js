import apiUrl from '../apiConfig'
import axios from 'axios'

export const viewProducts = (data) => {
  return axios({
    url: apiUrl + '/products/',
    method: 'GET',
    data: { product: data }
  })
}

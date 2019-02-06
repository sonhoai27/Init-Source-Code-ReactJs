import axios from 'axios'

import API_CONFIG from './index'

const apiWithoutToken = () => (
  axios.create({
    baseURL: API_CONFIG().URL,
  })
)

const apiWithToken = token => (
  axios.create({
    baseURL: API_CONFIG().URL,
    headers: {
      Authorization: token,
    },
  })
)

export {
  apiWithToken,
}

export default apiWithoutToken;

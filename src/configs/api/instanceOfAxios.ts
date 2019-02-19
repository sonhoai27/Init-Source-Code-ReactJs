import axios from 'axios'

import API_CONFIG from './index'

const apiWithoutToken = () => (
  axios.create({
    baseURL: API_CONFIG().URL,
  })
)

const apiWithHeaderToken = token => (
  axios.create({
    baseURL: API_CONFIG().URL,
    headers: {
      Authorization: token,
    },
  })
)

export {
  apiWithHeaderToken,
}

export default apiWithoutToken;

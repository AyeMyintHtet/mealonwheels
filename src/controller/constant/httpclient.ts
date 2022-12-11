import axios from 'axios'

import { configKey } from './config'
const client: any = axios.create()

client.interceptors.request.use(async (config?: any) => {
  config.baseURL = configKey.apiUrl

  let res = await localStorage.getItem('auth-store')

  config.headers['auth-token'] = res || ''

  return config
}, (error?: any) => {
  return Promise.reject(error)
}
)

client.interceptors.response.use(async (response?: any) => {
  if (!response.data) {
    return Promise.reject(response)
  }
  return response
}, async (error?: any) => {
  return Promise.reject(error)
}
)

export default client
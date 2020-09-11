import Axios from 'axios'

const instance = Axios.create({
  baseURL: 'https://127.0.0.1/api',
  timeout: 10000,
  params: {}
})


export default instance

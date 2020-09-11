import Axios from 'axios'

const instance = Axios.create({
  baseURL: 'https://souschef.stevenwenzel.com/api',
  timeout: 10000,
  params: {}
})


export default instance

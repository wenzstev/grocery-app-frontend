import Axios from 'axios'

const instance = Axios.create({
  baseURL: 'https://162.243.165.107/api',
  timeout: 10000,
  params: {}
})


export default instance

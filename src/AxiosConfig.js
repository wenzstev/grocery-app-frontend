import Axios from 'axios'

const instance = Axios.create({
  timeout: 10000,
  params: {}
})


export default instance

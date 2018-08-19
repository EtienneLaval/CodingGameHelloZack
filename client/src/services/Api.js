import axios from 'axios'
const {server} = require('../../config/index')

export default() => {
  return axios.create({
    baseURL: 'http://' + server.host + ':' + server.port
  })
}

const axios = require('axios')
const { LOCALHOST_URL } = require('../defs')

const request = axios.create({
  baseURL: LOCALHOST_URL
})

module.exports = request

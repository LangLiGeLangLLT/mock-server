const path = require('path')

const PORT = 4000
const LOCALHOST_URL = `http://localhost:${PORT}`
const API_PREFIX = '/api'
const STATIC_DIR = path.resolve('public')

module.exports = {
  PORT,
  LOCALHOST_URL,
  API_PREFIX,
  STATIC_DIR
}

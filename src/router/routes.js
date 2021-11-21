const {
  articleController,
  userController
} = require('../controllers')

const ROUTES = [
  { method: 'GET', path: '/articles', staticJsonPath: '/articles/list.json' },
  { method: 'GET', path: '/articles/:id', resolve: articleController.one },
  { method: 'POST', path: '/articles', resolve: articleController.create },
  { method: 'PUT', path: '/articles/:id', resolve: articleController.update },
  { method: 'DELETE', path: '/articles/:id', resolve: articleController.delete },
  { method: 'GET', path: '/users', staticJsonPath: '/users/list.json' },
  { method: 'GET', path: '/users/:id', resolve: userController.one }
]

module.exports = ROUTES

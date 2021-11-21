const koaRouter = require('koa-router')
const {
  articleController
} = require('../controllers')

const router = new koaRouter()

router.get('/articles', articleController.list)
  .get('/articles/:id', articleController.one)
  .post('/articles', articleController.create)
  .put('/articles/:id', articleController.update)
  .delete('/articles/:id', articleController.delete)

module.exports = router

const Koa = require('koa')
const cors = require('@koa/cors')
const logger = require('koa-logger')
const staticDir = require('koa-static')
const bodyParser = require('koa-bodyparser')
const koaRouter = require('koa-router')
const onerror = require('koa-onerror')
const router = require('./router')
const {
  PORT,
  LOCALHOST_URL,
  API_PREFIX,
  STATIC_DIR
} = require('./defs')

const app = new Koa()
const appRouter = new koaRouter()

appRouter.use(API_PREFIX, router.routes(), router.allowedMethods())

onerror(app)

app.use(cors())
  .use(logger())
  .use(bodyParser())
  .use(staticDir(STATIC_DIR))
  .use(appRouter.routes())
  .use(appRouter.allowedMethods())

app.listen(PORT, () => {
  console.log(`Server is running in ${LOCALHOST_URL}`);
})

const koaRouter = require('koa-router')
const routes = require('./routes')
const { request } = require('../utils')

const router = new koaRouter()

function initRouter(router, routes) {
  if (!routes?.length) {
    throw new Error('Please init routes.')
  }

  for (const route of routes) {
    const method = route.method?.toLowerCase()
    const path = route.path
    const staticJsonPath = route.staticJsonPath
    const resolve = route.resolve

    if (
      method !== 'get' &&
      method !== 'post' &&
      method !== 'put' &&
      method !== 'delete' &&
      typeof path === 'undefined'
    ) {
      throw new Error('Please give request method or path.')
    }

    if (
      typeof staticJsonPath === 'undefined' &&
      typeof resolve === 'undefined'
    ) {
      throw new Error('Please give request staticDir or resolve.')
    }

    const jsonResolve = async (ctx, next) => {
      try {
        const { data } = await request({
          method,
          url: staticJsonPath
        })
        ctx.response.body = data
      } catch (e) {
        ctx.throw('Resolve JSON Error', 400)
      }
    }

    router[method](path, resolve || jsonResolve)
  }
}

initRouter(router, routes)

module.exports = router

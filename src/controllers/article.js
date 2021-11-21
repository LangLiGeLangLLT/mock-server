const { request } = require('../utils')

exports.list = async (ctx, next) => {
  try {
    const { data } = await request({
      method: 'GET',
      url: '/articles/list.json'
    })
    ctx.response.body = data
  } catch (e) {
    ctx.throw('GET Articles Error', 400)
  }
}

exports.one = async (ctx, next) => {
  const { data } = await request({
    method: 'GET',
    url: '/articles/Tank.jpg',
    responseType: 'arraybuffer'
  })
  ctx.response.body = data
  ctx.response.type = 'arraybuffer'
}

exports.create = async (ctx, next) => {
  ctx.response.body = {
    success: true,
    message: `article create`
  }
}

exports.update = async (ctx, next) => {
  const id = ctx.request.params.id
  ctx.response.body = {
    success: true,
    message: `article ${id} update`
  }
}

exports.delete = async (ctx, next) => {
  const id = ctx.request.params.id
  ctx.response.body = {
    success: true,
    message: `article ${id} delete`
  }
}

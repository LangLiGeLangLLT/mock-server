const { request } = require('../utils')

exports.one = async (ctx, next) => {
  const { data } = await request({
    method: 'GET',
    url: '/users/Tank.jpg',
    responseType: 'arraybuffer'
  })
  ctx.response.body = data
  ctx.response.type = 'arraybuffer'
}

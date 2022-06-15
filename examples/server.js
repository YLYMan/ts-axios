/*
 * @Descripttion: 
 * @version: 
 * @Author: yanlingyun 1278259092@qq.com
 * @Date: 2022-06-13 15:45:38
 * @LastEditors: yanlingyun 1278259092@qq.com
 * @LastEditTime: 2022-06-15 11:50:24
 */
const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')

const app = express()
const compiler = webpack(WebpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

// 注意： bodyParser 要在接口的上面，否则 请求返回的数据为空
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// 自定义接口
const router = express.Router()
router.get('/simple/get', function(req, res) {
  res.json({
    mes: 'hello world'
  })
})

router.get('/base/get', function(req, res){
  res.json(req.query)
})

router.post('/base/post', function(req, res) {
  res.json(req.body)
})

router.post('/base/buffer', function(req, res) {
  let msg = []
  req.on('data', (chunk) => {
    if (chunk) {
      msg.push(chunk)
    }
  })
  req.on('end', () => {
    let buf = Buffer.concat(msg)
    res.json(buf.toJSON())
  })
})

app.use(router)

const port = process.env.PORT || 9000
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})

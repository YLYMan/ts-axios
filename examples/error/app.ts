import axios from '../../src/index'

axios({
  method: 'get',
  url: '/error/get1'
}).then(res => {
  console.log(res)
}).catch(e => {
  console.log(e)
})

axios({
  method: 'get',
  url: '/error/get'
}).then(res => {
  console.log(res)
}).catch(e => {
  console.log(e)
})

setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/get'
  }).then(res => {
    console.log(res)
  }).catch(e => {
    console.log(e)
  })
}, 5000)

axios({
  method: 'get',
  url: '/error/get',
  timeout: 3000
}).then(res => {
  console.log(res)
}).catch(e => {
  console.log(e)
})
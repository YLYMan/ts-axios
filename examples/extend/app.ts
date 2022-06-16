import axios from '../../src/index'

axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hi'
  }
})

// axios.request({
//   url: '/extend/post',
//   method: 'post',
//   data: {
//     msg: 'hii'
//   }
// })

// axios.get('/extend/get')
// axios.options('/extend/options')
// axios.delete('/extend/delete')
// axios.head('/extend/head')
// axios.post('/extend/post', { msg: '123' })
// axios.put('/extend/put', { msg: '123' })
// axios.patch('/extend/patch', { msg: '123' })

axios('/extend/post', {
  method: 'post',
  data: {
    msg: '444444'
  }
})
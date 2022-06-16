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

// axios('/extend/post', {
//   method: 'post',
//   data: {
//     msg: '444444'
//   }
// })

interface ResponseData<T = any> {
  /**
   * 状态码 
   * @type {number}
   */
  code: number

  /**
   * 数据 
   * @type {T}
   */
  result: T

  /**
   * 消息 
   * @type {string}
   */
  message: string
}

interface User {
  name: string
  age: number
}

export function getUser<T>() {
  return axios.get<ResponseData<T>>('/extend/user')
          .then(res => res.data)
          .catch(err => console.error(err) )
}

async function test() {
  const user = await getUser<User>()
  if (user) {
    console.log(user);
    
  }
}

test()
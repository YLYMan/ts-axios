/*
 * @Descripttion: 
 * @version: 
 * @Author: yanlingyun 1278259092@qq.com
 * @Date: 2022-06-13 17:07:47
 * @LastEditors: yanlingyun 1278259092@qq.com
 * @LastEditTime: 2022-06-20 15:53:21
 */
const toString = Object.prototype.toString

export function isDate (val: any): val is Date {
  return toString.call(val) === '[object Date]'
}


// export function isObject (val: any): val is Object {
//   return val !== null && typeof val === 'object'
// }

// isObject 的判断方式，对于 FormData、ArrayBuffer 这些类型，isObject 判断也为 true，但是这些类型的数据我们是不需要做处理的，
// 而 isPlainObject 的判断方式，只有我们定义的普通 JSON 对象才能满足。
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

// 用到了交叉类型，并且用到了类型断言, 目的是把 from 里的属性都扩展到 to 中，包括原型上的属性。
export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}

export function deepMerge(...objs: any[]): any {
  const result = Object.create(null)

  objs.forEach(obj => {
    if (obj) {
      Object.keys(obj).forEach(key => {
        const val = obj[key]
        if (isPlainObject(val)) {
          if (isPlainObject(result[key])) {
            result[key] = deepMerge(result[key], val)
          } else {
            result[key] = deepMerge({}, val)
          }
        } else {
          result[key] = val
        }
      })
    }
  })

  return result
}
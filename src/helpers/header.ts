/*
 * @Descripttion: 
 * @version: 
 * @Author: yanlingyun 1278259092@qq.com
 * @Date: 2022-06-14 11:00:03
 * @LastEditors: yanlingyun 1278259092@qq.com
 * @LastEditTime: 2022-06-20 16:09:06
 */
import { deepMerge, isPlainObject } from "./util";

// 因为请求 header 属性是大小写不敏感的，比如我们之前的例子传入 header 的属性名 content-type 就是全小写的，所以我们先要把一些 header 属性名规范化
function normalizeHeaderName (headers: any, normalizedName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders (headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')
  
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}

export function parseHeaders (headers: string): any {
  let parsed = Object.create(null)
  if (!headers) {
    return parsed
  }
  headers.split('\r\n').forEach(line => {
    let [key, value] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (value) {
      value = value.trim()
    }
    parsed[key] = value
  })
  return parsed
}

export function flattenHeaders(headers: any, method: any): any {
  if (!headers) {
    return headers
  }

  headers = deepMerge(headers.common || {}, headers[method] || {}, headers)

  const methodsToDelete = ['delete', 'get', 'head', 'options', 'post', 'put', 'patch', 'common']

  methodsToDelete.forEach(method => {
    delete headers[method]
  })

  return headers
}
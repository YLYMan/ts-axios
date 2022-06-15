/*
 * @Descripttion: 
 * @version: 
 * @Author: yanlingyun 1278259092@qq.com
 * @Date: 2022-06-14 11:00:03
 * @LastEditors: yanlingyun 1278259092@qq.com
 * @LastEditTime: 2022-06-15 11:03:04
 */
import { isPlainObject } from "./util";

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
/*
 * @Descripttion: 
 * @version: 
 * @Author: yanlingyun 1278259092@qq.com
 * @Date: 2022-06-14 10:27:09
 * @LastEditors: yanlingyun 1278259092@qq.com
 * @LastEditTime: 2022-06-14 17:56:20
 */
import { isPlainObject } from "./util"

export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
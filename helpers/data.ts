/*
 * @Descripttion: 
 * @version: 
 * @Author: yanlingyun 1278259092@qq.com
 * @Date: 2022-06-14 10:27:09
 * @LastEditors: yanlingyun 1278259092@qq.com
 * @LastEditTime: 2022-06-14 10:28:42
 */
import { isPlainObject } from "./util"

export function transformReuquest (data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
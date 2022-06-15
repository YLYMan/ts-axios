import { AxiosRequestConfig, AxiosPromise, AxiosResponse  } from "./types";
import { parseHeaders } from "./helpers/header";
import { rejects } from "assert";
// export default function xhr(config: AxiosRequestConfig): void {
// 	const { data = null, url, method = 'get', headers } = config
// 	const request = new XMLHttpRequest()
// 	request.open(method.toUpperCase(), url, true)

//   Object.keys(headers).forEach((name) => {
// 		// 当我们传入的 data 为空的时候，请求 header 配置 Content-Type 是没有意义的，于是我们把它删除
//     if (data === null && name.toLowerCase() === 'content-type') {
//       delete headers[name]
//     } else {
//       request.setRequestHeader(name, headers[name])
//     }
//   })
	
// 	request.send(data)
// }

export default function xhr(config: AxiosRequestConfig): AxiosPromise {

	return new Promise((resolve, reject) => {
		const { data = null, url, method = 'get', headers, responseType, timeout } = config

		const request = new XMLHttpRequest()
		if (timeout) {
			request.timeout = timeout
		}
		if (responseType) {
			request.responseType = responseType
		}

		request.open(method.toUpperCase(), url, true)

		request.onreadystatechange =  function handleLoad() {
			if (request.readyState !== 4) {
				return
			}

			if (request.status === 0) {
				return
			}

			const responseHeaders = parseHeaders(request.getAllResponseHeaders())
			const responseData = responseType && responseType !== 'text' ? request.response : request.responseText
			const response: AxiosResponse = {
				data: responseData,
				status: request.status,
				statusText: request.statusText,
				headers: responseHeaders,
				config,
				request
			}

			handleResponse(response)
		}

		request.onerror = function handleError() {
			reject(new Error('Network Error'))
		}

		request.ontimeout = function heandleTimeout() {
			reject(new Error(`Timeout of ${timeout} ms exceeded`))
		}

		Object.keys(headers).forEach((name) => {
			// 当我们传入的 data 为空的时候，请求 header 配置 Content-Type 是没有意义的，于是我们把它删除
			if (data === null && name.toLowerCase() === 'content-type') {
				delete headers[name]
			} else {
				request.setRequestHeader(name, headers[name])
			}
		})
		
		request.send(data)

		function handleResponse(response: AxiosResponse) {
			if (response.status >= 200 && response.status < 300) {
				resolve(response)
			} else {
				reject(new Error(`Request faild width status code ${response.status}`))
			}
		}
	})
}

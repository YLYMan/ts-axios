
export type Method = 'get' | 'GET'
	| 'delete' | 'DELETA'
	| 'head' | 'HEAD'
	| 'options' | 'OPTIONS'
	| 'post' | 'POST'
	| 'put' | 'PUT'
	| 'patch' | 'PATCH'


export interface AxiosRequestConfig {
	url: string
	method?: Method
	data?: any
	params?: any
	headers?: any
	responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponse {
	data: any
	status: any
	statusText: any
	headers: any
	config: AxiosRequestConfig
	request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {}

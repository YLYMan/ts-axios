
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
	timeout?: number
}

export interface AxiosResponse {
	data: any
	status: any
	statusText: any
	headers: any
	config: AxiosRequestConfig
	request: any
}

export interface AxiosError extends Error {
	config: AxiosRequestConfig
	code?: string
	request?: any
	response?: AxiosResponse
	isAxiosError: boolean
}

export interface AxiosPromise extends Promise<AxiosResponse> {}

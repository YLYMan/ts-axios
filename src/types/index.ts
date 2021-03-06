
export type Method = 'get' | 'GET'
	| 'delete' | 'DELETA'
	| 'head' | 'HEAD'
	| 'options' | 'OPTIONS'
	| 'post' | 'POST'
	| 'put' | 'PUT'
	| 'patch' | 'PATCH'


export interface AxiosRequestConfig {
	url?: string
	method?: Method
	data?: any
	params?: any
	headers?: any
	responseType?: XMLHttpRequestResponseType
	timeout?: number
	[propName: string]: any // 字符串索引签名
}

export interface AxiosResponse<T = any> {
	data: T
	status: any
	statusText: any
	headers: any
	config: AxiosRequestConfig
	request: any
}

export interface AxiosError<T> extends Error {
	config: AxiosRequestConfig
	code?: string
	request?: any
	response?: AxiosResponse
	isAxiosError: boolean
}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {}

export interface Axios {
	defaults: AxiosRequestConfig
	interceptors: {
		request: AxiosInterceptorManager<AxiosRequestConfig>
		response: AxiosInterceptorManager<AxiosResponse>
	}

	request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>

	get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

	delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

	head<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

	options<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

	post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>

	put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>

	patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
}

export interface AxiosInstance extends Axios {
	<T = any>(config: AxiosRequestConfig): AxiosPromise<T>
	<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
}

export interface AxiosInterceptorManager<T> {
	use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number

	eject(id: number): void
}

export interface ResolvedFn<T = any> {
	(val: T): T | Promise<T>
}

export interface RejectedFn {
	(error: any): any
}

import { AxiosRequestConfig } from "./types"
import xhr from "./xhr";

import { bulidURL } from "../helpers/url";
import { transformReuquest } from "../helpers/data";

function axios(config: AxiosRequestConfig): void {
	processConfig(config)
	xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
	config.url = transformUrl(config)
	config.data = transformReuquestData(config)
}

function transformUrl(config: AxiosRequestConfig): string {
	const { url, params } = config
	return bulidURL(url, params)
}

function transformReuquestData(config: AxiosRequestConfig): any {
	return transformReuquest(config.data)
}


export default axios
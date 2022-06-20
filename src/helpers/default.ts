import { AxiosRequestConfig } from "../types";

const defaults: AxiosRequestConfig = {
  method: 'get',
  timeout: 1000,
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*'
    }
  }
}

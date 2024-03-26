/**
 * @Author: Hgh
 * @Date: 2024-03-04 16:32:17
 * @LastEditTime: 2024-03-26 14:45:35
 * @LastEditors: Hgh
 * @Description:
 */
import axios from "axios";
import { getToken } from './token'

const http = axios.create({
    baseURL: 'http://geeek.iteheima.net/v1_0',
    timeout: 5000,
})

// 请求拦截器
http.interceptors.request.use((config) => {
    const token = getToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

// 响应拦截器
http.interceptors.response.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error)
})

export { http }
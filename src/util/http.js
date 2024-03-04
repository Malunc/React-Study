/**
 * @Author: Hgh
 * @Date: 2024-03-04 16:32:17
 * @LastEditTime: 2024-03-04 16:36:02
 * @LastEditors: Hgh
 * @Description:
 */
import axios from "axios";

const http = axios.create({
    baseURL: 'http://geeek.iteheima.net/v1_0',
    timeout: 5000,
})

http.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

http.interceptors.response.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error)
})

export { http }
/**
 * @Author: Hgh
 * @Date: 2024-03-26 14:31:28
 * @LastEditTime: 2024-03-26 14:34:03
 * @LastEditors: Hgh
 * @Description:
 */

const key = 'token-key'

const setToken = (token) => {
    return window.localStorage.setItem(key, token)
}

const getToken = () => {
    return window.localStorage.getItem(key)
}

const removeToken = () => {
    return window.localStorage.removeItem(key)
}

export {
    setToken,
    getToken,
    removeToken
}
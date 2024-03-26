/**
 * @Author: Hgh
 * @Date: 2024-03-01 15:57:26
 * @LastEditTime: 2024-03-11 10:21:34
 * @LastEditors: Hgh
 * @Description:
 */
import React from "react"
import LoginStore from "./login.Store"
class RootStore {
    constructor() {
        this.loginStore = new LoginStore()
    }
}


// 实例化根store
const rootStore = new RootStore()
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)

export {
    useStore
}
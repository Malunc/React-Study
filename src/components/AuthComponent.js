/**
 * @Author: Hgh
 * @Date: 2024-03-26 14:51:02
 * @LastEditTime: 2024-03-26 14:58:28
 * @LastEditors: Hgh
 * @Description: 路由鉴权高阶组件
 */
import { getToken } from "@/util";
import { Navigate } from "react-router-dom";

function AuthComponent({ children }) {
    const isToken = getToken()
    if (isToken) {
        return <>{children}</>
    } else {
        return <Navigate to='/login' replace />
    }
}


// <AuthComponent> < Layout> </AuthComponent>
// 登录 <><Layout></Layout></>
// 未登录 <Navigate to='/login' replace />


export { AuthComponent }
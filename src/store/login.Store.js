/**
 * @Author: Hgh
 * @Date: 2024-03-04 17:45:57
 * @LastEditTime: 2024-03-26 14:37:50
 * @LastEditors: Hgh
 * @Description:
 */
import { makeAutoObservable } from "mobx"
import { setToken, getToken } from '@/util'


class LoginStore {
    token = getToken() || ''
    constructor() {
        makeAutoObservable(this)
    }

    getLogin = ({ mobile, code }) => {
        // const res = await http.post('http://geeek.iteheima.net/v1_0/authorizations', {
        //     mobile,
        //     code
        // })
        this.token = 'asiufasibufkaufkjnsdklfgftihu2wburieungiueikdfbuj'
        setToken(this.token)
    }
}


export default LoginStore
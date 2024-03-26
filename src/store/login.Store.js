/**
 * @Author: Hgh
 * @Date: 2024-03-04 17:45:57
 * @LastEditTime: 2024-03-26 14:29:14
 * @LastEditors: Hgh
 * @Description:
 */
import { makeAutoObservable } from "mobx"
// import { http } from '@/util'


class LoginStore {
    token = ''
    constructor() {
        makeAutoObservable(this)
    }

    getToken = ({ mobile, code }) => {
        // const res = await http.post('http://geeek.iteheima.net/v1_0/authorizations', {
        //     mobile,
        //     code
        // })
        this.token = 'asiufasibufkaufkjnsdklfgftihu2wburieungiueikdfbuj'
    }
}


export default LoginStore
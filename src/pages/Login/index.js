/**
 * @Author: Hgh
 * @Date: 2024-03-04 13:46:44
 * @LastEditTime: 2024-03-26 11:40:52
 * @LastEditors: Hgh
 * @Description:
*/
import { Card, Button, Checkbox, Form, Input, message } from "antd"
import './index.scss'
import { useStore } from '@/store'
import { useNavigate } from "react-router-dom"

const Login = () => {
    const { loginStore } = useStore()
    const navigate = useNavigate()


    const onFinish = (values) => {
        console.log('Success:', values);
        loginStore.getToken({
            mobile: values.mobile,
            code: values.code,
        })
        message.success('登录成功')
        navigate('/', { replace: true })
    };

    return (
        <>
            <div className="Login">
                <Card>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{
                            remember: true,
                            mobile: '15212345678',
                            code: '123456'
                        }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Mobile"
                            name="mobile"
                            rules={[{ required: true, message: 'Please input your mobile!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Code"
                            name="code"
                            rules={[{ required: true, message: 'Please input your code!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{ offset: 8, span: 16 }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </>
    )
}


export default Login

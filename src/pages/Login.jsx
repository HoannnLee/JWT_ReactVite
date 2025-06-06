
import { Button, Form, Input, notification } from 'antd';
import { loginAPI } from '../utils/api';
import { useNavigate } from 'react-router-dom';



function Login() {

    const navigate = useNavigate();
    const onFinish = async (values) => {

        const {email, password} = values;

        const res = await loginAPI(email, password);

        if(res && res.EC === 0){
            localStorage.setItem('access_token', res.access_token); 
            notification.success({
                message: 'Đăng nhập thành công',
                description: 'Bạn đã đăng nhập tài khoản thành công',
            })
            navigate('/')
        }
        else {
            notification.error({
                message: 'Đăng nhập thất bại',
                description: res?.EM ?? 'Đã xảy ra lỗi trong quá trình đăng nhập. Vui lòng thử lại sau.',
            });

        }

        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (

        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 ,marginTop: '50px', marginLeft: '20px' }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout='vertical'
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Vui lòng nhập email của bạn!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Đăng nhập
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Login;
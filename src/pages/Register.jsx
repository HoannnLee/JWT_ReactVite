
import { Button, Form, Input, notification } from 'antd';
import { createUserAPI } from '../utils/api';
import { useNavigate } from 'react-router-dom';



function Register() {

    const navigate = useNavigate();
    const onFinish = async (values) => {

        const {email, password, name} = values;

        const res = await createUserAPI(email, password, name);

        if(res){
            notification.success({
                message: 'Đăng ký thành công',
                description: 'Bạn đã đăng ký tài khoản thành công. Vui lòng đăng nhập để tiếp tục.',
            })
            navigate('/login')
        }
        else {
            notification.error({
                message: 'Đăng ký thất bại',
                description: 'Đã xảy ra lỗi trong quá trình đăng ký. Vui lòng thử lại sau.',
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

             <Form.Item
                label="Tên"
                name="name"
                rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
            >
                <Input />
            </Form.Item>


            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Gửi
                </Button>
            </Form.Item>
        </Form>
    );
}
export default Register;

import { Button, Col, Divider, Form, Input, notification, Row } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { loginAPI } from '../utils/api';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../components/context/auth.context';

function Login() {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    const onFinish = async (values) => {
        const { email, password } = values;
        const res = await loginAPI(email, password);

        if (res && res.EC === 0) {
            localStorage.setItem('access_token', res.access_token);
            notification.success({
                message: 'Đăng nhập thành công',
                description: 'Bạn đã đăng nhập tài khoản thành công',
            });
            setAuth({
                isAuthenticated: true,
                user: {
                    email: res?.email ?? '',
                    name: res?.name ?? '',
                },
            });
            console.log('email: ', res?.user?.email, 'name: ', res?.user?.name);
            navigate('/');
        } else {
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
        <Row justify={'center'} style={{ marginTop: '30px' }}>
            <Col xs={24} md={16} lg={8}>
                <fieldset
                    style={{
                        padding: '15px',
                        margin: '5px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                    }}
                >
                    <legend>Đăng Nhập</legend>

                    <Form
                        name='basic'
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        layout="vertical"
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

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Đăng nhập
                            </Button>
                        </Form.Item>
                    </Form>
                    <Link to={"/"}><ArrowLeftOutlined /> Quay lại trang chủ</Link>
                    <Divider />
                    <div style={{ textAlign: "center" }}>
                        Chưa có tài khoản? <Link to={"/register"}>Đăng ký tại đây</Link>
                    </div>

                </fieldset>
            </Col>
        </Row>
    );
}

export default Login;

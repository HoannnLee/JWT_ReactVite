import { Button, Col, Divider, Form, Input, notification, Row } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { createUserAPI } from '../utils/api';


function Register() {
    const navigate = useNavigate();
    const onFinish = async (values) => {
        const { email, password, name } = values;

        const res = await createUserAPI(email, password, name);

        if (res && res.EC === 0) {
            notification.success({
                message: 'Đăng ký thành công',
                description: res.EM,
            });
            navigate('/login');
        } else {
            notification.error({
                message: 'Đăng ký thất bại',
                description: res?.EM ?? 'Vui lòng thử lại sau.',
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
                    <legend>Đăng Ký Tài Khoản</legend>

                    <Form
                        name="basic"
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

                        <Form.Item label="Tên" name="name" rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Gửi
                            </Button>
                        </Form.Item>
                    </Form>

                    <Link to={"/"}><ArrowLeftOutlined /> Quay lại trang chủ</Link>
                    <Divider />
                    <div style={{ textAlign: "center" }}>
                        Đã có tài khoản? <Link to={"/login"}>Đăng nhập</Link>
                    </div>
                        
                </fieldset>
            </Col>
        </Row>
    );
}
export default Register;

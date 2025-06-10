import React, { useState } from 'react';
import { UserOutlined, HomeOutlined, SettingOutlined, LoginOutlined,LogoutOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {

    const navigate = useNavigate()

    const items = [
        {
            label: <Link to="/">Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: 'Welcome Hoanlee',
            key: 'user',
            icon: <UserOutlined />,
            children: [
                { label: <Link to="/register">Đăng Ký</Link>, key: 'register', icon: <LoginOutlined /> },
                { label: <Link to="/login">Đăng Nhập</Link>, key: 'login', icon: <LoginOutlined /> },
                { 
                    label: <span onClick={() => {
                        localStorage.clear("access_token");
                        navigate("/")
                    }}>Đăng xuất</span>, 
                    key: 'logout', icon: <LogoutOutlined /> ,
                },
            ],
           
        },
        {
            label: <Link to="/user">Users</Link>,
            key: 'users',
            icon: <SettingOutlined />,
           
        }     
    ];

    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
       
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;

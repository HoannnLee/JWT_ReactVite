import { CrownOutlined } from '@ant-design/icons';
import { Result } from 'antd'


function Home() {
    return (  
        <div style={{ padding: 20 }}>
            <Result
                icon={<CrownOutlined />}
                title="JSON Web Token (React/Node.JS) - createdBy @hoidanit"
            />
        </div>

    );
}

export default Home;
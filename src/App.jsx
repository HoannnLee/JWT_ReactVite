import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import axios from './utils/axios.customize';
import { useContext, useEffect } from 'react';
import { AuthContext } from './components/context/auth.context';
import { AuthWrapper } from './components/context/auth.context';
import { Spin } from 'antd';

function App() {
    const {setAuth,loading,setLoading} = useContext(AuthContext)
    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true)
            const api = await axios.get(`/v1/api/account`);
            console.log("check api" ,api)
            if(api && !api.message){
                setAuth({
                    isAuthenticated: true,
                    user: {
                        name: api.name,
                        email:api.email
                    }
                })
            
            }
            setLoading(false)
            console.log('API Response:', api);
        };
       

        fetchApi();
    }, []);

    return (
        <div> 
        {loading === true ? 
                <div 
                    style={{
                        position:"fixed",
                        top:"50%",
                        left:"50%",
                        transform:"translate(-50%,-50%)"
                    }}
                >
                    <Spin size='large' tip="Đợi xíu nhooo">
                        {"Đang xử lý"}
                    </Spin>
                
                   
                </div>
        :
           <>
                <Header/>            
                <Outlet/>
           </>
        }
            
        </div>
    )
  
}

export default App;

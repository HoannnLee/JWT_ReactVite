import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import axios from './utils/axios.customize';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const fetchApi = async () => {
            const api = await axios.get(`/v1/api/`);
            console.log('API Response:', api);
        };
       

        fetchApi();
    }, []);

    return (
        <> 
            <Header/>            
            <Outlet/>
        </>
    )
  
}

export default App;

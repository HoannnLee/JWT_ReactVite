import { Descriptions, message, notification, Table } from 'antd';
import { useEffect, useState } from 'react';
import { getUserAPI } from '../utils/api';
import { Navigate } from 'react-router-dom';

function User() {

    const [dataUser ,setDataUser] = useState([]);

    useEffect(()=> {
      const fecthApi = async ()=> {

          const res = await getUserAPI();   
       
          
          if(!res?.message){
            setDataUser(res);
          }else{
               
            notification.error({
                message: "Unauthorized",
                description: res.message
            })
            // Navigate("/login")
          }
      }

      fecthApi();
    },[])

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            
        },
        {
            title: 'Email',
            dataIndex: 'email',
            
        },
        {
            title: 'Name',
            dataIndex: 'name',
            
        },
        {
            title: 'Role',
            dataIndex: 'role',
            
        },
    ];

    return (
        <div>
            <Table 
              style={{ margin: '50px' }} 
              bordered 
              dataSource={dataUser} 
              columns={columns} 
              rowKey="_id"
            />
        </div>
    );
}

export default User;

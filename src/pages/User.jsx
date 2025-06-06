import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { getUserAPI } from '../utils/api';

function User() {

    const [dataUser ,setDataUser] = useState([]);

    useEffect(()=> {
      const fecthApi = async ()=> {

          const res = await getUserAPI();
          if(res){
            setDataUser(res);
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
              bordered dataSource={dataUser} 
              columns={columns} 
              rowKey="_id"
            />
        </div>
    );
}

export default User;

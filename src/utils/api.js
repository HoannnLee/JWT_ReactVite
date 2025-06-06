
import axios from "./axios.customize";

const createUserAPI = (email , name , password) =>{
    const URL_API ="/v1/api/register" ;
    const data = {
        email,
        name,
        password
    }

    return axios.post(URL_API , data)
}


const loginAPI = (email , password) =>{
    const URL_API ="/v1/api/login" ;
    const data = {
        email,
        password
    }

    return axios.post(URL_API , data)
}

export {
    createUserAPI,loginAPI
}
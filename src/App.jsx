import axios from "./utils/axios.customize";
import { useEffect } from "react"



function App() {
  
  useEffect(() => {

    const fetchApi = async () => {
      const api = await axios.get(`/v1/api/`)
      console.log("API Response:", api);
    }
    console.log("Environment Variables:");
    
    fetchApi();
  }, []);

  return (
    <>
      Hello, World!
    </>
  )
}

export default App

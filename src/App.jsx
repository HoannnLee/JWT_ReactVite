import axios from "./assets/utils/axios.customize.js";
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

import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  user: {
    name: "",
    email: ""
  }
})

export const AuthWrapper = (props) => {
  const [loading , setLoading] = useState(true)
  const [auth, setAuth] = useState({
        isAuthenticated: false,
        user: {
            name: "",
            email: ""
        },
        loading: true,
    });
  
  // ...
  return (
    <AuthContext.Provider value={{auth,setAuth,loading , setLoading}}>
        {props.children}
    </AuthContext.Provider>
  );
}
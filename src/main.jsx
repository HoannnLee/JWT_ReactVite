import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/styles/global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './pages/register.jsx';
import Error from './pages/Error.jsx';
import User from './pages/User.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import { AuthWrapper } from './components/context/auth.context.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
           {
                index: true,
                element: <Home />,
            },
            {
                path: 'user',
                element: <User />,
            },
        ],
    },
    { path: 'register', element: <Register />, errorElement: <Error /> },
    { path: 'user', element: <User />, errorElement: <Error /> },
    { path: 'home', element: <Home />, errorElement: <Error /> }, 
    { path: 'login', element: <Login />, errorElement: <Error /> },
    {
        path: '*',
        element: <Error />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       <AuthWrapper>
         <RouterProvider router={router} />
       </AuthWrapper>
    </React.StrictMode>,
);

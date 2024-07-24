import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';
import Home from './routes/Home/Home.jsx';
import Products from './routes/Products.jsx';
import CreateProduct from './routes/CreateProduct.jsx';
import Product from './routes/Product.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'products',
        element: <Products/>
      },
      {
        path: 'products/:productId',
        element: <Product/>
      },
      {
        path: 'createProduct',
        element: <CreateProduct/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
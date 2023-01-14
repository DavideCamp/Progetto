import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";


import './App.css';
import ProductEdit from './pages/ProductEdit/ProductEdit';

const queryClient = new QueryClient();


const Layout = () => {
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </div>

  );

}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/product/:id/edit",
        element: <ProductEdit />,
      },
    ],
  },
]);




function App() {
  return (
    <div>
      <RouterProvider router={router} />

    </div>
  );
}

export default App;

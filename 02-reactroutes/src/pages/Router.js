import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Product from "./Product";
import Profile from "./Profile";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,
            children:[
                {
                    path:'/',
                    element: <Home/>,
                    index:true
                },
                {
                    path:'/product/:name',
                    element: <Product/>
                },
                {
                    path:'/profile',
                    element: <Profile/>
                }
            ]
        }
    ]
)

export default router;
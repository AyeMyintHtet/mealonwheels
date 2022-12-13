import Home from "screen/home"
import Login from "screen/auth"
export const RouteConfig =[
    {
        path:'/',
        element: <Home/>,
        protect: true,
    },
    {
        path:'/login',
        element: <Login/>
    },
    {
        path:'/registeradmin',
        element:<Login/>
    },
    {
        path:'/registeruser',
        element:<Login/>
    },

]
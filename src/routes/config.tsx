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
        path:'/register',
        element:<Login/>
    }

]
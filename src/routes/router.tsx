import React, { Suspense } from 'react'
import { RouteConfig } from './config'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from 'hook'


const PrivateRoute = ({ children }: any) => {
    const { UserLogin_data } = useAuth()
    let check = UserLogin_data?.['auth-token'] ? false : true
    console.log('check', check)
    if (check) {
        return <Navigate to='/login' />
    }
    return children
}

const RouteList = () => {
    return (
        <Routes>
            {RouteConfig.map(({ path, element, protect }: any, key) => {
                return (
                    <Route path={path} key={key}
                        element={protect ? <PrivateRoute>{element}</PrivateRoute> : element}
                    />
                )
            })}
        </Routes>
    )
}
export default function AppRoute() {
    return (
        <>
            <Suspense fallback={null}>
                <RouteList />
            </Suspense>
        </>
    )
}


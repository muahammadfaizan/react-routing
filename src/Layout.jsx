// import React from 'react'
import ResponsiveAppBar from './component/Navbar'
import { Outlet } from 'react-router-dom'

function Layout(){
    return(
        <div>
            <ResponsiveAppBar />
            <Outlet />
        </div>
    )
}


export default Layout
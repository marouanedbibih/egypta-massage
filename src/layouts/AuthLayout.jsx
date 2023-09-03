import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSatateContext } from '../contexts/ContextProvider'
import ClientNavbar from '../components/Navbars/ClientNavbar';

function AuthLayout() {
  const {token,role} = useSatateContext();
  if(token){
    if(role === 0){
      return <Navigate to="/profile"/>
    }else if(role === 1){
      return <Navigate to="/colab-profile"/>
    }else if(role === 2){
      return <Navigate to="/admin-profile"/>
    }

  }
  return (
    <div className='bg-auth text-white'>
      <ClientNavbar/>
      <Outlet/>
    </div>
  )
}

export default AuthLayout
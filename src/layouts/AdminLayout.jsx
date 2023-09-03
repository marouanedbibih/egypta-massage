import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSatateContext } from '../contexts/ContextProvider';
import axios from 'axios';
import axiosClient from '../api/axios';

function AdminLayout() {
  const {user,token,role,_setToken,setRole,setUser} = useSatateContext();
  const roleInt = parseInt(role);
  if(!token || roleInt !== 2){
    return <Navigate to="/login"/>
  }

  return (
    <div className='bg-black'>
      <Outlet/>
    </div>

  )
}

export default AdminLayout;
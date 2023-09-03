import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSatateContext } from '../contexts/ContextProvider'

function ColabLayout() {
  const {token,role} = useSatateContext();
  if(!token || role !==1){
    return <Navigate to="/login"/>
  }
  return (
    <div>
      <h1>ColabLayout</h1>
      <Outlet/>
    </div>
  )
}

export default ColabLayout
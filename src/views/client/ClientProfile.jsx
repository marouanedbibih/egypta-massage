import React from 'react'
import { useSatateContext } from '../../contexts/ContextProvider'
import { Navigate } from 'react-router-dom';

function ClientProfile() {
  const {token,role} =useSatateContext();
  if(!token || role !== 0){
    return <Navigate to="/login"/>
  }
  return (
    <div>ClientProfile</div>
  )
}

export default ClientProfile
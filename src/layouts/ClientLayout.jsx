import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSatateContext } from '../contexts/ContextProvider'
import ClientNavbar from '../components/Navbars/ClientNavbar'

function ClientLayout() {


  return (

    <div className=''>
      <Outlet/>
    </div>
  )
}

export default ClientLayout
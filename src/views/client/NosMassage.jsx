import React from 'react'
import ClientNavbar from '../../components/Navbars/ClientNavbar'
import MassageSection from '../../components/Home/MassageSection'


function NosMassage() {

  return (

    <div className='  text-white bg-black font-lato'>
      <ClientNavbar class="bg-black" />
      <div className="bg-nos-massages" >
      </div>
      <div className='grid grid-cols-1 justify-items-center content-center h-1/4 w-full'>
        <h1 className='text-5xl'>Nos Massages</h1>
      </div>
      <div className='grid grid-cols-1 justify-items-center content-center w-full px-4'>
        <MassageSection/>
        <MassageSection/>
        <MassageSection/>
        <MassageSection/>
        <MassageSection/>
        <MassageSection/>
        <MassageSection/>
      </div>
    </div>)
}

export default NosMassage
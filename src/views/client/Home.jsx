import React from 'react';
import { Link } from 'react-router-dom';
import contants from '../../constants/text';
import {FaFacebook, FaInstagram, FaWhatsapp, FaYoutube} from 'react-icons/fa';
import ClientNavbar from '../../components/Navbars/ClientNavbar';
/** Components */
import HeaderHome from '../../components/Headers/HeaderHome';
import CardSectionHome from '../../components/Cards/CardSectionHome';
import Footer from '../../components/Footers/Footer';
function Home() {
  return (
    <div className='bg-black'>
      <ClientNavbar/>
      <HeaderHome />
      <div className=' h-1/2  text-white font-lato grid grid-cols-1 justify-items-center content-center'>
        <div className='w-1/2'>
          <p className='text-2xl text-center'>Massage can assist us in feeling less stressed, enhancing our immune system, and uplifting our mind.</p>
        </div>
      </div>
      <div className=''>
        <CardSectionHome />
      </div>
      <div className=' h-1/2  text-white font-lato grid grid-cols-1 justify-items-center content-center'>
        <div className='w-1/2'>
          <p className='text-2xl text-center'>Massage can assist us in feeling less stressed, enhancing our immune system, and uplifting our mind.</p>
        </div>
      </div>
      <div className='h-2/3 w-full text-white font-lato grid grid-cols-1 justify-items-center content-center'>
        <div className='w-1/2 '>
          <img src="../../../public/img/logo/egypta-massage-logo.png" alt="" />
        </div>
      </div>
      <Footer/>




    </div>

  )
}

export default Home
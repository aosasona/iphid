import React, { Component } from 'react';
import Nav from './Nav'
import Footer from './Footer'
import qr from '../assets/img/qr.png'

export default class Contact extends Component {

  render() {
    return (
    <div className='overflow-x-hidden'>
        <Nav />
        <div className='flex flex-col w-screen h-[80vh] justify-center items-center '>
            <img src={qr} className='w-64' alt='WhatsApp QR Code'/>
            <div className='text-center p-7 text-gray-400 text-sm font-light'>Contact us quickly via WhatsApp or via the phone using any of the links below or by scanning the QR code above.</div>
        <a href='https://wa.link/ay9yic' target='_blank' rel='noreferrer' className='text-green-600 bg-gray-800 p-4 px-6 rounded-3xl hover:bg-white'><i class='fa-brands fa-whatsapp px-2'></i>
        Send Us A Message!</a>

        <a href='tel:+2347033285297' target='_blank' rel='noreferrer' className='text-green-600 bg-gray-800 p-4 px-6 rounded-3xl mt-5 hover:bg-white'><i class='fa-solid fa-phone px-2'></i> 
        Call Us (08:00 - 20:00)</a>
        </div>
        <div className='mb-2 p-4 sm:p-8'> <Footer /></div>
    </div>
        );
  }
}

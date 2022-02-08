import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Logo from '../assets/img/logo.png';
import '../assets/style.css';

export default class nav extends Component {
  render() {
    return (
    <div>
        <div className='flex w-auto justify-between items-center bg-purple-200 p-3 px-5 xl:px-8'>
        <img src={Logo} className="max-h-10 bg-white rounded-full p-2" alt='Logo'/>
        
            <a href='/' className='text-sm text-purple-500 hover:text-purple-700'>Home</a>
            <a href='/gallery' className='text-sm text-purple-500 hover:text-purple-700'>Gallery</a>
            <a href='/contact' className='text-sm text-purple-500 hover:text-purple-700'>Contact Us</a>
        
        </div>
    </div>
    );
  }
}

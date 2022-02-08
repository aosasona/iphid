import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Logo from '../assets/img/logo.png';
import '../assets/style.css';

export default class nav extends Component {
  render() {
    return (
    <div>
        <div className='flex w-auto justify-between items-center bg-purple-200 p-3 px-6 xl:px-8'>
        <img src={Logo} className="max-h-10 bg-white rounded-full p-2" alt='Logo'/>
        
            <Link to='/' className='text-sm text-purple-500 hover:text-purple-700'>Home</Link>
            <Link to='/gallery' className='text-sm text-purple-500 hover:text-purple-700'>Gallery</Link>
            <Link to='/contact' className='text-sm text-purple-500 hover:text-purple-700'>Contact Us</Link>
        
        </div>
    </div>
    );
  }
}

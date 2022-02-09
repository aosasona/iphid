import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Error extends Component {
  render() {
    return (
    <div className='bg-gray-900 flex flex-col w-screen h-screen justify-center items-center'>
       
        <h1 className='font-medium text-5xl sm:text-8xl text-red-600'><i class="fa-solid fa-xmark"></i> Oops!</h1>
        <h2 className='text-gray-500 font-light text-sm mt-4 mb-12'>You landed on the wrong page -- Classic Error 404 LOL</h2>
        <p><Link to='/' className='text-green-600 hover:text-green-800 text-sm'><i class="fa-solid fa-house-chimney"></i> Go To Home</Link></p>
    </div>
    );
  }
}

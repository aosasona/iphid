import React, { Component } from 'react'
import Nav from './Nav'
import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import img4 from '../assets/img/4.jpg'

const dy = new Date;
const thisYear = dy.getFullYear()

export default class Home extends Component {
    constructor(props) {
        super(props); 
            this.mouseEnter = this.mouseEnter.bind(this);
            this.mouseLeave = this.mouseLeave.bind(this);
            this.typingFunc = this.typingFunc.bind(this);
    }
    mouseEnter(){
        var welcomeText = document.getElementById('welcomeText')
        var welcomeImg = document.getElementById('welcomeImage')
        var blink = document.getElementById('blink')

        blink.style.backgroundColor = 'black'
        welcomeText.classList.remove('text-purple-300')
        welcomeText.classList.add('text-black')
        welcomeImg.classList.remove('opacity-30')
        welcomeImg.classList.add('opacity-100')
    }
    mouseLeave() {
        var welcomeText = document.getElementById('welcomeText')
        var welcomeImg = document.getElementById('welcomeImage')
        var blink = document.getElementById('blink')

        blink.style.backgroundColor = 'white'
        welcomeText.classList.remove('text-black')
        welcomeText.classList.add('text-purple-300')
        welcomeImg.classList.remove('opacity-100')
        welcomeImg.classList.add('opacity-30')
    }
    typingFunc() {
        var helloText = document.getElementById('helloText')
        
            setTimeout(() => {
            helloText.innerText = 'Welcome'
        }, 2000)
        setTimeout(() => {
            helloText.innerText = 'To'
        }, 3000)
        setTimeout(() => {
            helloText.innerText = 'Iphid Clothings'
        }, 4000)
    
    }
    
  render() {
    return (
    <div>
    <Nav />
    <div onLoad={this.typingFunc}>
        <div className='h-[94vh] flex justify-center items-center' id='welcomeDiv' onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
            <h1 className='absolute z-0 text-center m-auto text-purple-300 text-4xl lg:text-8xl opacity-100 font-medium' id='welcomeText'><span id='helloText'>Hello</span> <span id='blink'></span></h1>
        <img src={img1} className='w-full h-full object-cover opacity-30' id='welcomeImage' alt='img'/>
        </div>
    </div>

        <div className='bg-white px-7 py-6'>
        <div className='bg-white sm:p-0 sm:pl-0 sm:flex drop-shadow-lg sm:items-center sm:rounded-xl mt-3 mb-12' data-aos='flip-right' data-aos-duration="1500">
        <img src={img2} alt='Img2' className='w-full sm:w-3/6 h-full object-cover sm:rounded-l-xl' />
        
        <div className='px-4 pb-6 sm:px-0 sm:pr-4  sm:pb-0'>
            <h1 className='mt-4 sm:mt-0 sm:ml-4 text-3xl sm:text-4xl text-gray-700 hover:text-gray-300'>Quality Fabrics</h1>
            <p className='mt-2 sm:mt-2 sm:ml-6 text-[14px] font-light text-gray-400 hover:text-gray-700'>We here to hook you up with the good stuff: high-quality fabrics at affordable prices. Whether you're looking for a new wardrobe or just some fabric to make a new throw pillow or curtains, we've got you covered.</p>
        </div>
        </div>


        <div className='bg-white sm:p-0 sm:pr-0 sm:flex drop-shadow-lg sm:items-center sm:rounded-xl mb-12' data-aos='flip-left' data-aos-duration="1500">
         
         <div className='pt-3 px-4 pb-6 sm:px-0 sm:pl-4 sm:pb-0 sm:pt-0 sm:text-right'>
            <h1 className='mt-4 sm:mt-0 sm:mr-4 text-3xl sm:text-4xl text-gray-700 hover:text-gray-300'>Top-Notch Sewing</h1>
            <p className='mt-2 sm:mt-2 sm:mr-6 text-[14px] font-light text-gray-400'>Need a corporate dress? Or is it a family event? First date? Of course, it has to be a special dress for any of those occasions but sometimes.. it's just hard to get that seamstress that would make it how you see it. Well, you have us!</p>
        </div>

       <img src={img3} alt='Img3' className='w-full sm:w-3/6 h-full object-cover sm:rounded-r-xl' />
        </div>


        <div className='bg-white sm:p-0 sm:pl-0 sm:flex drop-shadow-lg sm:items-center sm:rounded-xl mt-3 mb-12' data-aos='flip-down' data-aos-duration="1500">

        <img src={img4} alt='Img4' className='w-full sm:w-3/6 h-full object-cover sm:rounded-l-xl' />
        <div className='px-4 pb-6 sm:px-0 sm:pr-4  sm:pb-0'>
            <h1 className='mt-4 sm:mt-0 sm:ml-4 text-3xl sm:text-4xl text-gray-700 hover:text-gray-300'>100% Customer Satisfaction</h1>
            <p className='mt-2 sm:mt-2 sm:ml-6 text-[14px] font-light text-gray-400 hover:text-gray-700'>We don't just listen to our customers. We listen to you, the customer. It's the only way we can make sure we're giving you a product that's perfectly suited for your needs.</p>
        </div>

        </div>

        <div className='flex justify-between items-center bg-white shadow-lg w-full p-4 px-6 mb-0 h-auto rounded-3xl'>
            <a href='https://twitter.com/hiphedhayor' target='_blank' rel='noreferrer' title='Follow Us on Twitter' className='bg-purple-200 text-purple-600 w-auto p-3 px-5 rounded-3xl font-medium  hover:text-purple-200 hover:bg-purple-600'><i className='fab fa-twitter text-lg'></i> Follow Us</a>

            <span className='text-xs text-purple-700 font-medium'>&copy; {thisYear} Iphid Clothings</span>

            <span className='text-sm font-light'>Built by <a href='https://linktr.ee/realao' target='_blank' rel='noreferrer' className='text-purple-500 underline font-normal'>Ayodeji</a></span>
        </div>
    </div>
    </div>
    );
  }
}
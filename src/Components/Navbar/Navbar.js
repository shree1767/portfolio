import React from 'react'
import icon from './assets/icon.svg'
import './Navbar.module.css'

export const Navbar = () => {
  return (
    <>
<nav className="bg-white px-5 md:px-4 md:py-2 py-5 fixed w-full z-20 top-0 left-0 bg-[#000]" id='navbar'>
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <div className="flex md:order-2">
      <button type="button" className="md:block hidden font-medium rounded-[15px] text-white bg-[#6200EE] text-center text-[12px] rounded-lg text-sm px-4 py-3.5 text-center mr-3 md:mr-0 ">GET IN TOUCH</button>
      <img src={icon} className='md:hidden block'/>
    </div>
    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
        <a href="#about" className="block py-2 pr-4 ml-14 xl:ml-0 text-white text-[14px] md:pl-0">ABOUT</a>
      </li>
      <li>
        <a href="#works" className="block py-2 pr-4 pl-3 text-white text-[14px] md:pl-20">WORKS</a>
      </li>
    </ul>
   </div>
   <button class="md:hidden block space-y-2 group">

    <div class="w-8 h-0.5 bg-white"></div>
    <div class="w-8 h-0.5 bg-white"></div>
    <div class="w-8 h-0.5 bg-white"></div>
    
   <div className='absolute top-0 -right-full h-screen w-3/5 backdrop-blur-xl bg-[#000] opacity-0 group-focus:right-0 group-focus:opacity-100 bg-opacity-40 transition-all duration-500'>
      <ul className='flex flex-col items-center -w-10 bg-[#000] bg-opacity-5 backdrop-blur-xl  cursor-pointer pt-20 mt-20'>
        <li className=' pt-20 px-6 w-full bg-inherit text-white '><a href='#about'>ABOUT</a></li>
        <li className='pt-10 px-6 w-full bg-inherit text-white '><a href='#works'>WORKS</a></li>
        <li className='pt-10 pb-20 px-6 w-full bg-inherit text-white'><a href='#'>RESUME</a></li>
      </ul>
    </div>
  </button>
  </div>
 
 
</nav>
    </>
  )
}

export default Navbar;
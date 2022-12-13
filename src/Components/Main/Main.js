import React from 'react'
import icon from './assets/icon.svg'
import style from './Main.module.css'
import github from './assets/mdi_github.svg'
import linkedin from './assets/mdi_linkedin.svg'
import dribble from './assets/icon-park-outline_dribble.svg'
import twitter from './assets/ion_logo-twitter.svg'
export const Main = () => {
  return (
    <main>
{/* sidebar  */}
  <div className='flex'>
<div className='md:block mb-20 pb-20 hidden ml-20 mt-20 pt-10'>
<div class="flex flex-col items-center mt-20 w-20 h-full overflow-hidden bg-[#121111] rounded-[28px]">
  <div class="flex items-center justify-center mt-10" href="#">
    <img src={icon}/>
  </div>
  <div class="flex flex-col items-center mt-10 bg-transparent">
    <a class="flex items-center justify-center mt-5 " href="https://github.com/shree1767" target='new'>
      <img src={github} className='bg-[#121111]'/>
    </a>
    <a class="flex items-center justify-center mt-10 " href="https://dribbble.com/shree1767" target='new'>
      <img src={dribble} className='bg-[#121111]'/>
    </a>
    <a class="flex items-center justify-center mt-10" href="https://www.linkedin.com/in/shreenidhi1/" target='new'>
      <img src={linkedin} className='bg-[#121111]'/>
    </a>
    <a class="flex items-center justify-center mt-10" href="#">
      <img src={twitter} className='bg-[#121111]'/>
    </a>
  </div>
</div> 
</div>  
{/* main content  */}
<div className='md:mt-20 pt-20 mt-20 mb-20 pb-20 md:pt-10'>
    <div className='md:mt-20 pt-10'> 
      <div className='pt-10 md:pb-0 pb-2 ml-5 md:ml-20 md:pt-0 text-[#fff] lg:text-[30px] md:text-[20px] text-[20px] font-[400] text-left'>
      HELLO, I'M <span className='text-[#6200EE]'>SHREE</span>
      </div>
    </div>
    
    <div className={` md:mt-10 ml-5 xl:pr-5 relative font-[poppins] md:ml-20 text-[white] font-[800] text-left xl:text-[100px] md:text-[80px] text-[40px] ${style.developer}`}>
      DESIGNER
    </div>
    
    <div className={` font-[poppins] ml-6 xl:pr-20 xl:ml-20 md:pl-0 text-[#6200EE] md:pb-10 font-[800] text-left xl:text-[100px] md:text-[80px] text-[40px] ${style.developer}`}>
      <span className='font-[800] text-[#282828]'>+</span>DEVELOPER 
    </div>
    
</div>
</div>
    </main>
  )
}
export default Main;
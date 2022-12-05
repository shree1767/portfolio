import React from 'react'
import { useState } from 'react'
import style from './About.module.css'
import './ProgressBar.css'
import heading from './assets/Group 3.svg'
import mbheading from './assets/mobilehead.svg'
import female from './assets/female.jpg'
import progressbg from './assets/Bar2.svg'
import progressbg2 from './assets/Bar.svg'
import tools2 from './assets/Group 4.svg'
import tools from'./assets/tools.svg'
import tools3 from './assets/Group 5.svg'
import resume from './/assets/My resume.svg'
import resume2 from './/assets/Resume.svg'
import down from './assets/ci_download.svg'
import what from './assets/Group 7.svg'
import what2 from './assets/what2.svg'

export const About = ({width, percent}) => {
  let progress = percent * width;
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    setValue(percent * width);
  });


  return (
    <>
    <div className='md:block hidden mt-20 pt-20' id='about'>
      <img src={heading}/>
    </div>
    <div className='md:hidden block justify-center mt-20 pt-20'>
      <img src={mbheading} className='mx-auto'/>
    </div>
    <div className='md:flex md:mt-2 md:mb-20 md:mx-20'>
        {/* aboutext */}
      <div className='md:mr-20 md:pr-20'>
          <div className='ml-10 pl-10 mt-20 md:pt-20 pr-20 md:pb-10'>
            <div className='text-center md:text-left text-white md:text-[25px] text-[18px]'>I'm a <span className='text-[#6200EE]'> CSE </span>student who loves to design & develop Websites and Apps from scratch.
            </div>
          </div>
      
         
        {/* progressbar */}
          <div className='justify-center'>
          <div className='flex md:ml-20 md:mt-0 mt-5'>
            
            <div className='md:ml-0 md:mx-0 ml-auto md:pr-5'>
              <div className='text-white md:text-[25px] text-[20px] pt-5 md:pt-10'>HTML</div>
              <div className='text-white md:text-[25px] text-[20px] pt-6 md:pt-7'>CSS</div>
              <div className='text-white md:text-[25px] text-[20px] pt-6 md:pt-7'>JS</div>
            </div>

            <div className='md:pt-0 md:pl-5 pt-7 mr-auto'>
              <div className='md:pt-10 md:pl-0 pl-5'><img className='md:block hidden' src={progressbg}/><img className='md:hidden block' src={progressbg2}/></div>
              <div className='md:pt-5 md:pl-0 pt-5 pl-5'><img src={progressbg} className='md:block hidden pt-4'/><img className='md:hidden block pt-4' src={progressbg2}/></div>
              <div className='md:pt-5 md:pl-0 pt-5 pl-5'><img src={progressbg} className=' md:block hidden pt-4'/><img className='md:hidden block pt-4' src={progressbg2}/></div>
            </div>
          </div>
          </div>

        </div>

        {/* image */}
        <div className='pt-20 md:mt-20 justify-center '>
            <img src={female} className='w-2/3 md:px-0 mx-auto'/>
        </div>
    </div>

    <div className='mt-20 block md:hidden justify-center'> 
      <img src={tools2} className='w-1/2 mx-auto'/>
    </div>
    <div className='mt-20 pt-20 hidden md:block justify-center'>
      <img src={tools3} className='mx-auto'/>
    </div>
    <div className='flex hidden md:block mt-20 mr-10 pt-20 pl-20 mb-20'> 
      <img className='absolute right-0 mr-20 pr-10' src={resume}/> <a href='./assets/Resume.pdf' download><img className='absolute right-0 mr-10 pr-8' src={down}/></a>
    </div>
    <div className='flex block md:hidden mt-5 pt-20 pl-20 mb-20'> 
      <a href='./assets/Resume.pdf' download><img className='absolute right-0 mr-4 pr-10 w-1/2 ' src={resume2}/></a>
    </div>
    <div className={'hidden md:block justify-center mx-auto mt-20'}>
      <img src={what} className='mx-auto pt-20'/>
    </div>
    <div className={'relative block md:hidden justify-center mt-20'}>
      <img src={what2} className='mx-auto pl-2.5 pt-10 w-100'/>
    </div>
    
    </>
  )
}

export default About;

import React from 'react'
import ic1 from './assets/icon-park-outline_dribble.svg'
import ic2 from './assets/ion_logo-twitter.svg'
import ic3 from './assets/mdi_github.svg'
import ic4 from './assets/mdi_linkedin.svg'
import './Footer.module.css'

export const Footer = () => {
  return (
    <>
      <div className='relative bg-[#141212] text-center text-[23px] pt-20 text-white w-full h-60'>
      FOLLOW ME 
      <div className='flex gap-5 bg-transparent justify-center mx-auto mt-5 mb-20'>
        <a href='' className=''><img src={ic1} className='w-10 bg-[#141212]'/></a>
        <a href=''><img src={ic2} className='w-10 bg-[#141212]'/></a>
        <a href=''><img src={ic3} className='w-10 bg-[#141212]'/></a>
        <a href=''><img src={ic4} className='w-10 bg-[#141212]'/></a>
      </div>
      </div>
    </>
  )
}

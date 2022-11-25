import React from 'react'
import heading from './assets/WORKS.svg'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Works = () => {
  return (
    <>
    <div className='md:block hidden mt-20 pt-20 pl-20' id='works'>
        <img src={heading}/>
    </div>   
  
    </>
  )
}


export default Works;
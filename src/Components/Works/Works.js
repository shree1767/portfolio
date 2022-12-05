import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import heading from './assets/WORKS.svg'
import card1 from './assets/card1.svg'
import card2 from './assets/card2.svg'
import card3 from './assets/card3.svg'
import card4 from './assets/card4.svg'
import card5 from './assets/card5.svg'
import card6 from './assets/card6.svg'
import style from './Works.module.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Works = () => {
  return (
  <>
    <div className='relative md:block hidden mt-20 pt-20 pl-20' id='works'>
        <div className='absolute text-white text-[50px] font-[600] top-60 left-[43%] bg-transparent'>PORTFOLIO</div>
      
      <Menu as="div" className="absolute top-60 mt-5 right-20 w-40 h-40 inline-block mr-20 bg-transparent">
      <div className='bg-transparent'>
        <Menu.Button className="inline-flex w-full justify-center rounded-[10px]  bg-[#212020] px-4 py-2 text-sm font-medium text-white ">
          ALL
          <ChevronDownIcon className="-mr-1 ml-20 h-5 w-5 bg-transparent" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-[#212020]">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-[#212020]' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  ALL
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-[#212020]' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  WEB DEV
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-[#212020]' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  WEB DESIGN
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
        <img src={heading}/>
    </div> 
    {/* row1 */}
    <div className='md:flex'>
      <div className='md:ml-10 md:pl-20 px-10 mt-20'>
        <a href='https://shurikan-2-0-website.vercel.app/' target='new'><img src={card1}/></a>
        <div className='text-white mt-5 text-[20px]'>Shuriken Wars</div>
        <div className='text-[#777171] text-[20px]'>Web Design</div>
      </div>  
      <div className='md:ml-10 md:pl-10 px-10 mt-20'>
        <a href='https://cnwebsite22-git-fork-shree1767-main-coding-ninjas-club-srm.vercel.app/' target='new'><img src={card2}/></a>
        <div className='text-white mt-5 text-[20px]'>Coding Ninjas SRM</div>
        <div className='text-[#777171] text-[20px]'>Web Dev</div>
      </div>  
      <div className='md:ml-10 md:pl-20 px-10 mt-20'>
        <a href=''><img src={card3}/></a>
        <div className='text-white mt-5 text-[20px]'>Kob Collections</div>
        <div className='text-[#777171] text-[20px]'>Web Dev</div>
      </div>  
    </div>
    {/* row2 */}
    <div className='md:flex mb-20 pb-20'>
      <div className='md:ml-10 md:pl-20 px-10 mt-20'>
        <a href=''><img src={card4}/></a>
        <div className='text-white mt-5 text-[20px]'>Design Agency</div>
        <div className='text-[#777171] text-[20px]'>Web Dev</div>
      </div>  
      <div className='md:ml-10 md:pl-10 px-10 mt-20'>
        <a href=''><img src={card5}/></a>
        <div className='text-white mt-5 text-[20px]'>Woodside</div>
        <div className='text-[#777171] text-[20px]'>Web Design</div>
      </div>  
      <div className='md:ml-10 md:pl-20 px-10 mt-20'>
        <a href=''><img src={card6}/></a>
        <div className='text-white mt-5 text-[20px]'>Medora</div>
        <div className='text-[#777171] text-[20px]'>Web Dev</div>
      </div>  
    </div>
  </>
  )
}


export default Works;
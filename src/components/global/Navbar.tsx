import { useState } from 'react'
import React from 'react'
import * as Icons from 'iconsax-react'
import { Link , useMatch, useResolvedPath } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import MobileNav from './MobileNav'


function Navbar() {

  let NavData = [
    {
      title: 'Home',
      path: '/',
      name: 'menu-item'
    },
    {
      title: 'Works',
      path: '/works',
      name: 'menu-item'
    },
    {
      title: 'About Me',
      path: '/about-me',
      name: 'menu-item'
    }
  ]

  const [showMobileNav, setMobileNav] = useState(false)

  const handleOnClose = () => {
    setMobileNav(false)
  }

  const handleMobileNav = () => {
    setMobileNav(true) 
  }

  return (

      
    // <div className={`sticky ${ direction === "down" ? "-top-[75px]" : "top-0"} w-screen h-[75px] flex flex-row items-center justify-between px-48 bg-accent bg-opacity-20 `}>
    <div className='h-20 w-screen bg-transparent bg-opacity-20 flex flex-row gap-8 px-48 sm:px-10 xs:px-10 md:px-10 lg:px-10'>

      <div className='w-[20%] items-center flex'>
        <img src={Logo} alt='logo' className='h-[25px] w-auto'/>
      </div>

      <div className='w-[60%] flex items-center justify-end md:hidden sm:hidden xs:hidden ' >
        <ul className='flex font-secondary tracking-[0.07em] text-sm text-white'>
          { NavData.map((item, index) => {
            const resolvedPath = useResolvedPath(item.path)
            const isActive = useMatch({ path: resolvedPath.pathname, end: true})
            const [selectedIndex, setSelectedIndex] = React.useState(0);

            return (
              <li key={index} onClick={() => {setSelectedIndex(selectedIndex)}}
              className={` ${ isActive && 'text-accent'} px-8 mx-2 h-11 hover:text-accent ease-in-out duration-300`}>
                  {/* 'px-8 mx-2 h-11 hover:text-accent ease-in-out duration-300'   */}
                <Link to={item.path} className='w-full h-full flex items-center'>
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      <div className='w-[20%] flex items-center justify-end md:hidden sm:hidden xs:hidden' >
        <button className='h-11 w-auto px-6 py-2 font-secondary bg-accent bg-opacity-25 text-white tracking-[.07em] rounded-md hover:bg-accent ease-in-out duration-300'>Get in Touch</button>
      </div>

      <div className='visible flex w-full items-center justify-end lg:hidden xl:hidden 2xl:hidden'>
        <button onClick={handleMobileNav}>
          <Icons.HambergerMenu className='text-[#C2C2C2] h-8 w-auto'/>
        </button>

        <MobileNav onClose={handleOnClose} visible={showMobileNav} />

      </div>

      
    </div>          
  )
}

export default Navbar

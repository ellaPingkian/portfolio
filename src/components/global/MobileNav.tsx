import * as Icons from 'iconsax-react'
import React from 'react'
import { Link , useMatch, useResolvedPath } from 'react-router-dom'

function MobileNav({visible, onClose}: { visible: any; onClose: any }) {
  if (!visible) return null;

  const handleOnCLose = () => {
    onClose()
  }

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

  return (
    <div className='fixed z-20 inset-0 bg-bg bg-opacity-40 backdrop-blur-2xl pt-6'>

      <div className='flex flex-col phone:px-5 tablet:px-10 gap-10'>

        <div className='flex justify-end'>
          <button className='rounded-full flex items-center text-white select-none ml-auto' onClick={handleOnCLose}> <Icons.CloseCircle className='h-10 w-auto'/> </button>
        </div>

        <div className='flex flex-col tablet:px-24 gap-8'>
          <ul className='flex flex-col justify-end gap-6 font-secondary tracking-[0.07em] text-xl text-white text-right'>
            { NavData.map((item, index) => {
              const resolvedPath = useResolvedPath(item.path)
              const isActive = useMatch({ path: resolvedPath.pathname, end: true})
              const [selectedIndex, setSelectedIndex] = React.useState(0);

              return (
                <li key={index} onClick={() => {setSelectedIndex(selectedIndex)}}
                className={` ${ isActive && 'text-accent font-semibold'} flex items-center h-11`}>
                    {/* 'px-8 mx-2 h-11 hover:text-accent ease-in-out duration-300'   */}
                  <Link to={item.path} className='w-full h-full flex items-center' onClick={onClose}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className='flex items-center md:px-48 sm:px-24' >
            <button className='h-11 w-auto px-6 py-2 font-secondary bg-accent bg-opacity-25 text-white tracking-[.07em] rounded-md hover:bg-accent ease-in-out duration-300'>Get in Touch</button>
          </div>


        </div>
        
      </div>
      

    </div>
  )
}

export default MobileNav
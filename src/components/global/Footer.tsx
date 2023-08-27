import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import * as Icons from 'iconsax-react'
// import { BsBehance, BsArrowUpRight } from 'react-icons/Bs'
// import { FaLinkedinIn } from 'react-icons/Fa'
// import { PiGithubLogoFill } from 'react-icons/Pi'
// import { AiFillInstagram } from 'react-icons/Ai'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';


function Footer() {

  let socials = [
    {
      name: 'behance',
      icon: <CIcon icon={icon.cibBehance} className = 'fill-white w-[25px] h-auto phone:w-[20px]'/>,
      path: 'https://www.behance.net/ellapingkian'
    },
    {
      name: 'linkedin',
      icon: <CIcon icon={icon.cibLinkedinIn} className = 'fill-white w-[25px] h-auto phone:w-[20px]'/>,
      path: 'https://www.linkedin.com/in/ella-pingkian/'
    },
    {
      name: 'github',
      icon: <CIcon icon={icon.cibGithub} className = 'fill-white w-[25px] h-auto phone:w-[20px]'/>,
      path: 'https://github.com/ellaPingkian'
    },
    {
      name: 'instagram',
      icon: <CIcon icon={icon.cibInstagram} className = 'fill-white w-[25px] h-auto phone:w-[20px]'/>,
      path: 'https://www.instagram.com/_ellamarrie/'
    }
  ]

  return (
    <div className='phone:gap-8 px-5 tablet:px-10  desktop:px-48 widescreen:px-72  w-screen pt-12 flex flex-col bg-accent bg-opacity-0 overscroll-none'>
      <div className='flex flex-col'>
        <span className='text-neutral font-secondary text-md tracking-[0.07em] phone:text-sm'>I'm</span>
        <div className='py-6 antialiased flex flex-col text-[195px] phone:text-[96px] tablet:text-[125px] font-main text-accent leading-[75%]'>
          <span>One <br/> Email Away</span>
        </div>
        <span className='text-neutral font-secondary text-base tracking-[0.07em] w-[55%] phone:w-full phone:text-sm'>Discover how I turn intricate concepts into seamless user journeys. And let's collaborate to create user-centric designs that make an impact.</span>
      </div>

      <div className='flex flex-row pb-8 phone:pb-0 phone:flex-col-reverse phone:gap-8 '>

        <div className='w-full gap-10 phone:gap-4 flex justify-start items-end phone:justify-center'>
          { socials.map((item) => {
            return (
              <Link to={item.path} target="_blank" className='h-[45px] w-[45px] phone:scale-95  bg-accent opacity-25 text-white rounded-full hover:opacity-100 flex items-center justify-center hover:outline-dashed hover:outline-2 hover:outline-offset-8 hover:scale-110 hover:outline-accent ease-in-out duration-300'>
                {item.icon}
              </Link>
            )
          })}
        </div>

        <Link to='mailto:ellpingkian@gmail.com' className='flex flex-row w-[50%] phone:w-full phone:justify-center items-end gap-8 text-neutral hover:text-accent ease-in-out duration-300'>
          <div className='flex flex-col items-end'>
            <span className=' font-secondary phone:text-xs tracking-[0.07em]'>ellpingkian@gmail.com</span>
            <div className='h-0.5 w-20 rounded-full bg-accent mt-4 hover:w-48'></div>
          </div>

          <div className='h-[110px] w-[110px] phone:w-[60px] phone:h-[60px] rounded-full bg-transparent border-2 border-dashed border-gray-200 opacity-80 flex items-center justify-center'>
            <Icons.ArrowRight className='w-16 h-auto -rotate-45 phone:w-12' />
          </div>
        </Link>
      </div>

      <hr className='border-accent opacity-40'></hr>

      <div className='flex justify-center h-12 items-center gap-4 py-8 phone:py-0 phone:items-start'>
        <span className='text-xs font-secondary text-accent tracking-[0.07em] opacity-50'>Designed and Coded by</span>
        <img src={Logo} alt='logo' className='h-[15px] w-auto'/>
      </div>

    </div>
    
  )
}

export default Footer
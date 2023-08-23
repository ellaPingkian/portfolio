import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { BsBehance, BsArrowUpRight } from 'react-icons/Bs'
import { FaLinkedinIn } from 'react-icons/Fa'
import { PiGithubLogoFill } from 'react-icons/Pi'
import { AiFillInstagram } from 'react-icons/Ai'


function Footer() {

  let socials = [
    {
      name: 'behance',
      icon: <BsBehance className = 'w-[25px] h-auto text-white'/>,
      path: 'https://www.behance.net/ellapingkian'
    },
    {
      name: 'linkedin',
      icon: <FaLinkedinIn className = 'w-[25px] h-auto text-white'/>,
      path: 'https://www.linkedin.com/in/ella-pingkian/'
    },
    {
      name: 'github',
      icon: <PiGithubLogoFill className = 'w-[25px] h-auto text-white'/>,
      path: 'https://github.com/ellaPingkian'
    },
    {
      name: 'instagram',
      icon: <AiFillInstagram className = 'w-[30px] h-auto text-white' />,
      path: 'https://www.instagram.com/_ellamarrie/'
    }
  ]

  return (
    <div className='lg:px-48 xl:px-48 2xl:px-48 px-10 w-screen pt-12 flex flex-col bg-accent bg-opacity-0'>
      <div className='flex flex-col'>
        <span className='text-[#C2C2C2] font-secondary text-xl tracking-[0.07em]'>I'm</span>
        <div className='py-6 antialiased flex flex-col text-[195px] sm:text-8xl xs:text-7xl md:text-[145px] font-main text-accent leading-[75%]'>
          <span>One <br/> Email Away</span>
        </div>
        <span className='text-[#C2C2C2] font-secondary text-md tracking-[0.07em]'>Discover how I turn intricate concepts into seamless user <br/> journeys. And let's collaborate to create user-centric <br/> designs that make an impact.</span>
      </div>

      <div className='flex flex-row pb-8 sm:flex-col-reverse xs:flex-col-reverse sm:gap-8 xs:gap-8'>

        <div className='w-full gap-10 flex justify-start items-end md:justify-center sm:justify-center xs:justify-center'>
          { socials.map((item) => {
            return (
              <Link to={item.path} target="_blank" className='h-[45px] w-[45px] bg-accent opacity-25 rounded-full hover:opacity-100 flex items-center justify-center hover:outline-dashed hover:outline-2 hover:outline-offset-8 hover:scale-110 hover:outline-accent ease-in-out duration-300'>
                {item.icon}
              </Link>
            )
          })}
        </div>

        <Link to='mailto:ellpingkian@gmail.com' className='flex flex-row w-[50%] sm:w-full xs:w-full sm:justify-center xs:justify-center items-end gap-8 text-[#C2C2C2] hover:text-accent ease-in-out duration-300'>
          <div className='flex flex-col items-end'>
            <span className=' font-secondary text-md tracking-[0.07em]'>ellpingkian@gmail.com</span>
            <div className='h-0.5 w-20 rounded-full bg-accent mt-4 hover:w-48'></div>
          </div>

          <div className='h-[110px] w-[110px] rounded-full bg-transparent border-2 border-dashed border-gray-200 opacity-80 flex items-center justify-center'>
            <BsArrowUpRight className='w-14 h-auto' />
          </div>
        </Link>
      </div>

      <hr className='border-accent opacity-40'></hr>

      <div className='flex justify-center h-12 items-center gap-4 py-8'>
        <span className='text-xs font-secondary text-accent tracking-[0.07em] opacity-50'>Designed and Coded by</span>
        <img src={Logo} alt='logo' className='h-[15px] w-auto'/>
      </div>

    </div>
    
  )
}

export default Footer
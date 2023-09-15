// import { Back } from 'iconsax-react'
// import React from 'react'
// import Background from '../components/global/Background'
import Background from "../components/global/Background"
import Footer from "../components/global/Footer"
import * as Icons from "iconsax-react"
import Nomo from '../assets/images/thumbnail/nomoThumbnail.png'
import BoholTravelGuide from '../assets/images/thumbnail/boholtravelguideThumbnail.png'
import { useNavigate } from "react-router-dom"
// import { BsArrowDown } from "react-icons/Bs"
// import Logo from '../assets/images/logoBlack.png'
// import CautionPage from './CautionPage'

function Works() {
  
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-auto w-screen">
      {/* <Footer /> */}

      <Background />

      {/* widescreen:px-72 */}

      <div className="z-10 desktop:px-48 widescreen:px-48 w-screen px-5 tablet:px-10">

        {/* HERO */}
        <div className="w-full flex flex-col gap-4 overflow-x-auto ">
          <div className="flex w-full flex-col font-main text-accent items-center gap-2 py-8 text-5xl phone:text-3xl">
            <span className="opacity-60">Research.</span>
            <span className="opacity-60">Design.</span>
            <span className="opacity-60">Experience.</span>
            <span className="text-[180px] phone:text-7xl italic leading-[90%]">Deliver.</span>
          </div>

          <div className="flex w-full flex-row phone:flex-col tablet:px-20 gap-8 desktop:px-32 widescreen:px-48 py-8 items-end text-[#C2C2C2]">
            <div className="w-[20%] phone:w-full flex phone:justify-center">
              <div className='h-[110px] w-[110px] phone:h-[80px] phone:w-[80px] rounded-full bg-transparent border-2 border-dashed border-gray-500 flex items-center justify-center'>
                <Icons.ArrowDown className='w-14 h-auto' />
              </div>
            </div>

            <div className="w-[80%] pb-4 phone:w-full phone:text-center">
              <span className="font-secondary tracking-[0.10em] text-sm phone:">
              A compilation of my past projects, each telling a unique story of creativity and accomplishment and encapsulates the journey of my professional growth.
              </span>
            </div>
          </div>
        </div>


        {/* PROJECTS */}
        <div className='w-sceen py-32 phone:py-10'>
          <div className='flex flex-col'>
            <span className='text-[#A3A3A3] tracking-[0.07em] text-sm font-secondary pb-2'>Recent Works</span>
            <span className='font-main text-5xl text-accent'>Projects</span>
          </div>


          {/* PROJECT 1 */}
          <div className='flex flex-row my-20 gap-4 h-[70%] justify-between phone:flex-col-reverse'>
            <div className='w-[40%] h-[60vh] flex flex-col justify-center gap-4 phone:w-full phone:h-auto'>
              <div className='flex flex-row items-end'>
                <span className='w-[80%] font-secondary text-accent text-3xl tracking-[0.05em] font-extrabold'>Bohol Travel Guide</span>
                <span className='w-[20%] text-right font-secondary text-neutral text-xs tracking-[0.05em] font-extrabold'>2023</span>
              </div>

              <span className='text-neutral tracking-[0.10em] font-secondary text-base phone:text-sm'>Redesigned the Bohol travel guide homepage aiming to improve user experience and overall usability.</span>

              <button onClick={() => navigate("/projects/bohol-website-redesign")} className='h-11 phone:w-full px-6 py-2 font-secondary bg-accent bg-opacity-25 tracking-[.07em] rounded-md hover:bg-accent mt-6 flex items-center justify-center gap-3 text-neutral hover:text-white ease-in-out duration-300'>
                <span>Read Case Study</span>
                <Icons.ArrowRight className='-rotate-45'/>
              </button>              
            </div>

            <div className='w-[60%] flex items-center justify-center phone:w-full'>
              <img src={BoholTravelGuide} alt='bohol homepage thumbnail' className='h-full w-auto tablet:h-[300px] phone:h-full'/>
            </div>
          </div>

          <hr className='border-accent opacity-40'></hr>


          {/* PROJECT 2 */}
          <div className='flex flex-row my-20 gap-4 h-[70%] justify-between phone:flex-col-reverse'>
            <div className='w-[40%] h-[60vh] flex flex-col justify-center gap-4 phone:w-full phone:h-auto'>
              <div className='flex flex-row items-end'>
                <span className='w-[80%] font-secondary text-accent text-3xl tracking-[0.05em] font-extrabold'>Nomo Space</span>
                <span className='w-[20%] text-right font-secondary text-neutral text-xs tracking-[0.05em] font-extrabold'>2023</span>
              </div>

              <span className='text-neutral tracking-[0.10em] font-secondary text-base phone:text-sm'>A Coffee Space Brand aiming to establish their online presence highlighting their products, services, and space.</span>

              <button onClick={() => navigate("/projects/nomo-studio")} className='h-11 phone:w-full px-6 py-2 font-secondary bg-accent bg-opacity-25 tracking-[.07em] rounded-md hover:bg-accent mt-6 flex items-center justify-center gap-3 text-neutral hover:text-white ease-in-out duration-300'>
                <span>View Case Study</span>
                <Icons.ArrowRight className='-rotate-45'/>
              </button>              
            </div>

            <div className='w-[60%] flex items-center justify-center phone:w-full'>
              <img src={Nomo} alt='nomo thumbnail' className='h-full w-auto tablet:h-[300px] phone:h-full'/>
            </div>
          </div>

          {/* <hr className='border-accent opacity-40'></hr> */}

          {/* PROJECT 2 */}
          {/* <div className='flex flex-row my-20 gap-4 h-[70%] justify-between'>
            <div className='w-[40%] h-[60vh] flex flex-col justify-center gap-4'>
              <div className='flex flex-row items-end'>
                <span className='w-[80%] font-secondary text-accent text-3xl tracking-[0.05em] font-extrabold'>Bohol Travel Guide Website Redesign</span>
                <span className='w-[20%] text-right font-secondary text-[#404B52] text-xs tracking-[0.05em] font-extrabold'>2023</span>
              </div>
              
              <span className='text-neutral tracking-[0.10em] font-secondary font-light text-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus quis soluta eligendi tempora ipsa amet atque eveniet.</span>

              <button onClick={() => navigate("/projects/bohol-website-redesign")} className='h-11 md:w-full sm:w-full xs:w-full px-6 py-2 font-secondary bg-accent bg-opacity-25 tracking-[.07em] rounded-md hover:bg-accent mt-6 flex items-center justify-center gap-3 text-neutral hover:text-white ease-in-out duration-300'>
                <span>View Case Study</span>
                <Icons.ArrowRight className='-rotate-45'/>
              </button>
              
            </div>
            <div>
              <img src={Nomo} alt='nomo thumbnail' className='h-[400px] w-auto md sm xs '/>
            </div>
          </div> */}

          <hr className='border-accent opacity-40'></hr>

        </div>

      </div>

      <div className='z-10 w-sceen pt-8'>
        <Footer />
      </div>

    </div>
  )
}

export default Works
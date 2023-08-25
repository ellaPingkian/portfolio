// import Logo from '../assets/images/logoBlack.png'
// import Hero from '../components/global/Hero';
import Footer from '../components/global/Footer';
// import Navbar from '../components/global/Navbar';
import Background from '../components/global/Background';
// import { BsArrowUp } from 'react-icons/Bs'
import * as Icons from 'iconsax-react'



function AboutMe() {


  return (
    <div className='flex flex-col h-auto w-screen overflow-y-hidden bg-bg'>
      {/* <div className='z-0 absolute '>
        <Background />
      </div> */}

      <Background />

      <div className='z-10'>

      {/* HERO */}
        <div className='w-screen h-auto py-12 flex flex-col gap-8 px-48 bg-opacity-30'>
          <span className='text-[#C2C2C2] font-secondary text-md tracking-[0.07em]'>Hello there, I'm <span className='font-semibold italic'>Ella Pingkian</span></span>

          <div className='flex flex-col text-accent gap-4'>
            <span className='flex gap-4 items-end'>
              <span className='font-secondary text-6xl opacity-60 pb-2 tracking-[0.08em]'>
              And
              </span>
              <span className='font-main text-9xl italic'>
                I Empower
              </span>
            </span>
            
            <span className='font-secondary text-6xl opacity-60 pb-4 leading-[120%] tracking-[0.08em]'>
              User Journeys, <br/> One Design at a Time.
            </span>
            
          </div>

          <div className='flex flex-row w-full'>
            <span className='text-[#C2C2C2] font-secondary text-md tracking-[0.10em] w-[50%]'>An innovative UI/UX designer with a passion for crafting seamless digital experiences.</span>

            <div className='flex flex-row gap-8 w-[50%] items-end justify-end'>
              <span className='text-[#C2C2C2] font-secondary text-md tracking-[0.07em] pb-4'>Explore more <br />
              about <span className='text-accent'>Ella</span></span>
              <div className='h-[110px] w-[110px] rounded-full bg-transparent border-2 border-dashed border-gray-200 opacity-80 flex items-center justify-center'>
                <Icons.ArrowDown className='text-[#C2C2C2] w-14 h-auto' />
              </div>
            </div>
          </div>
        </div>

        <div className='px-48'>

        {/* STATEMENT ABOUT ME */}
          <div className='py-20 flex flex-row'>
            <div className='flex flex-row'>
              <div className='w-[50%] flex flex-col'>
                <span className='text-[#A3A3A3] tracking-[0.07em] text-sm font-secondary pb-2'>My Bio</span>
                <span className='font-main text-5xl text-accent'>A little something <br/> about me</span>
              </div>
              <div className='w-[50%] pt-7'>
                <span className='text-[#C2C2C2] tracking-[0.10em] font-secondary font-normal text-md'>UI and UX, may not always come together in some cases, however, as a UI/UX Designer, I have established a strong understanding of the relationship between the two to make it work together harmoniously that make my design solutions captivating, engaging, and satisfactory to the user needs.</span>
              </div>
            </div>
          </div>

          {/* MORE ABOUT ME */}
          <div className='py-20'>
            <div className='flex flex-col pb-20'>
              <span className='text-[#A3A3A3] tracking-[0.07em] text-sm font-secondary pb-2'>Details</span>
              <span className='font-main text-5xl text-accent'>More About Me</span>
            </div>

            <hr className='border-accent opacity-40 pt-12'></hr>

            {/* Experiences */}
            <div className='flex flex-row'>
              <div className='w-[30%] flex flex-col'>
                <span className='text-[#A3A3A3] tracking-[0.10em] text-lg font-bold font-secondary'>Experience</span>
              </div>

              <div className='w-[65%] flex flex-col gap-8 pb-12'>

                {/* BRITE STUDIO */}
                <div className='flex w- flex-row gap-8 pb-12'>
                  <span className='pt-2 w-[20%] flex justify-end text-[#404E56] tracking-[0.10em] text-sm font-bold font-secondary'>Feb-May 2023</span>
                  <div className='w-[80%] flex flex-col gap-4'>
                    <span className='flex text-[#404E56] tracking-[0.10em] text-xl font-secondary'>Brite Studio</span>
                    <span className='flex text-accent tracking-[0.10em] text-4xl font-bold font-secondary'>UI/UX Intern</span>
                    <span className='text-[#C2C2C2] tracking-[0.10em] font-secondary font-normal text-md'>UI and UX, may not always come together in some cases, however, as a UI/UX Designer, I have established a strong understanding of the relationship between the two to make it work together harmoniously that make my design solutions captivating, engaging, and satisfactory to the user needs.</span>
                  </div>
                </div>
                
                {/* DS WEB SOLUTIONS AND CONSULTANCY */}
                <div className='flex flex-row gap-8 pb-12'>
                  <span className='pt-2 w-[20%] flex justify-end text-[#404E56] tracking-[0.10em] text-sm font-bold font-secondary'>May-July 2022</span>
                  <div className='w-[80%] flex flex-col gap-4'>
                    <span className='flex text-[#404E56] tracking-[0.10em] text-xl font-secondary'>DS Web Solutions and Consultancy INC.</span>
                    <span className='flex text-accent tracking-[0.10em] text-4xl font-bold font-secondary'>Quality Assurance for Mobile Applications</span>
                    <span className='text-[#C2C2C2] tracking-[0.10em] font-secondary font-normal text-md'>UI and UX, may not always come together in some cases, however, as a UI/UX Designer, I have established a strong understanding of the relationship between the two to make it work together harmoniously that make my design solutions captivating, engaging, and satisfactory to the user needs.</span>
                  </div>
                </div>

                {/* TOME PUBLISHING */}
                <div className='flex flex-row gap-8 pb-12'>
                  <span className='pt-2 w-[20%] flex justify-end text-[#404E56] tracking-[0.10em] text-sm font-bold font-secondary'>Feb 2022</span>
                  <div className='w-[80%] flex flex-col gap-4'>
                    <span className='flex text-[#404E56] tracking-[0.10em] text-xl font-secondary'>Tome Publishing and Media LLC</span>
                    <span className='flex text-accent tracking-[0.10em] text-4xl font-bold font-secondary'>Graphic Designer / Illustrator</span>
                    <span className='text-[#C2C2C2] tracking-[0.10em] font-secondary font-normal text-md'>UI and UX, may not always come together in some cases, however, as a UI/UX Designer, I have established a strong understanding of the relationship between the two to make it work together harmoniously that make my design solutions captivating, engaging, and satisfactory to the user needs.</span>
                  </div>
                </div>
              </div>
            </div>

            <hr className='border-accent opacity-40 pt-12'></hr>

            {/* KEY SKILLS */}
            <div className='flex flex-row'>
              <div className='w-[50%] flex flex-col'>
                <span className='text-[#A3A3A3] tracking-[0.10em] text-lg font-bold font-secondary'>Key Skills</span>
              </div>

              <div className='w-[50%] flex flex-col'>
                <ul className='text-[#C2C2C2] tracking-[0.10em] font-secondary font-normal text-md list-disc leading-8'>
                  <li>User Interface Design</li>
                  <li>User Experience Design</li>
                  <li>Frontend Developement</li>
                  <li>Wireframing</li>
                  <li>Prototyping</li>
                  <li>Critical Thinking</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className='border-accent opacity-40 py-20'></hr>
        </div>

        {/* FOOTER */}
        <Footer />


      </div>
    </div>
  )
}

export default AboutMe
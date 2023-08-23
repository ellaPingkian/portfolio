import React from 'react'
import { BsArrowUp } from 'react-icons/Bs'

function Hero() {
  return (
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
            <BsArrowUp className='text-[#C2C2C2] w-14 h-auto rotate-180' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
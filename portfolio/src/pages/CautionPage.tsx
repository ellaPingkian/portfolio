import Navbar from '../components/global/Navbar'
import Logo from '../assets/images/logoBlack.png'
import * as Icons from 'iconsax-react'
import Background from '../components/global/Background'


function CautionPage() {
  return (
    <div className='flex flex-col h-screen w-full bg-bg '>
      {/* background */}
      {/* <Background /> */}
      <div className=''>
        <div className='absolute top-10 left-7 overflow-hidden bg-accent w-[350px] h-[350px] rounded-full blur-[150px] opacity-40'></div>
        <div className='absolute bottom-0 right-48 bg-accent w-[150px] h-[150px] rounded-full blur-[100px] opacity-60'></div>
        <img src={Logo} alt='logo' className='opacity-[10%] w-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
      </div>


      <div className='flex py-20 px-48'>
        <div className='text-[#C2C2C2] text-4xl font-secondary tracking-[.05em] flex flex-col text-center items-center gap-2'>
          <span className='font-main text-accent text-9xl pb-10'>Creativity in progress!</span>
          <Icons.Heart className='text-accent w-12 h-auto'/>
        </div>        
      </div>
    </div>
  )
}

export default CautionPage
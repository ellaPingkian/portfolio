import Background from "../components/global/Background"
import Logo from '../assets/images/logoBlack.png'
import Hero from "../components/global/Hero"
import Footer from "../components/global/Footer"
import { BsArrowDown } from "react-icons/Bs"

function Sample() {
  return (
    <div className="flex flex-col h-auto w-screen bg-opacity-30 bg-bg">
      {/* <Footer /> */}

      {/* HERO */}
      <div className="flex flex-col gap-4 px-48 overflow-x-auto">
        <div className="flex flex-col font-main text-accent items-center gap-2 py-8">
          <span className="text-5xl opacity-60">Research.</span>
          <span className="text-5xl opacity-60">Design.</span>
          <span className="text-5xl opacity-60">Experience.</span>
          <span className="text-[180px] italic leading-[90%]">Deliver.</span>
        </div>

        <div className="flex flex-row gap-8 px-32 py-8 items-end text-[#C2C2C2]">
          <div className="w-[20%]">
            <div className='h-[110px] w-[110px] rounded-full bg-transparent border-2 border-dashed border-gray-700 flex items-center justify-center'>
              <BsArrowDown className='w-14 h-auto' />
            </div>
          </div>

          <div className="w-[80%] pb-4">
            <span className="font-secondary tracking-[0.10em] text-sm">
            A compilation of my past projects, each telling a unique story of creativity and accomplishment and encapsulates the journey of my professional growth.
            </span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
      
    </div>
  )
}

export default Sample
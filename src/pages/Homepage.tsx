import * as Icons from 'iconsax-react'
// import Navbar from '../components/global/Navbar'
// import Background from '../components/global/Background'
import Nomo from '../assets/images/thumbnail/nomoThumbnail.png'
import Footer from '../components/global/Footer'
// import Hero from '../components/global/Hero'
// import { BsArrowUp } from 'react-icons/Bs'
// import { PiSketchLogo } from 'react-icons/Pi'
import { useNavigate } from 'react-router-dom'
import Background from '../components/global/Background';


function Homepage() {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col w-screen h-auto'>
      <Background />
      
      <div className='z-10 lg:px-48 xl:px-48 2xl:px-48 w-screen px-10'>

        {/* HERO */}
        <div className='w-full h-[85vh] flex flex-row '>
          <div className='w-[70%] py-8 antialiased flex flex-col text-9xl sm:text-8xl xs:text-7xl font-main text-accent leading-[75%] gap-4 sm:gap-0 xs:gap-0'>
            <span>Research.</span>
            <span className='italic'>Design.</span>
            <span>Experience.</span>
            <span className='italic'>Deliver.</span>
          </div>

          <div className='flex flex-row gap-8 w-[30%] items-end justify-end'>
              <span className='text-[#C2C2C2] font-secondary text-md tracking-[0.07em] pb-4'>Explore more <br />
              about <span className='text-accent'>Ella</span></span>
              <div className='h-[110px] w-[110px] rounded-full bg-transparent border-2 border-dashed border-gray-200 opacity-80 flex items-center justify-center'>
                <Icons.ArrowDown className='text-[#C2C2C2] w-14 h-auto' />
              </div>
            </div>          
        </div>

        {/* SKILLS */}

        <div className='w-sceen py-20 mt-24'>
          <div className='flex flex-row sm:flex-col xs:flex-col gap-4 sm:gap-4 sm:pb-4 xs:gap-4 xs:pb-4'>
            <div className='w-[50%] sm:w-full xs:w-full flex flex-col'>
              <span className='text-[#A3A3A3] tracking-[0.07em] text-sm font-secondary pb-2 xs:text-xs'>My Skill/s</span>
              <span className='font-main text-5xl text-accent xs:text-4xl'>UI/UX Designer</span>
            </div>
            <div className='w-[50%] sm:w-full xs:w-full pt-7'>
              <span className='text-[#C2C2C2] tracking-[0.10em] font-secondary font-normal text-base xs:text-xs'>UI and UX, may not always come together in some cases, however, as a UI/UX Designer, I have established a strong understanding of the relationship between the two to make it work together harmoniously that make my design solutions captivating, engaging, and satisfactory to the user needs.</span>
            </div>
          </div>

          <div className='my-10 gap-4 flex flex-col'>
            <span className='text-[#A3A3A3] tracking-[0.07em] text-sm xs:text-xs font-secondary'>Tools I Use</span>
            <hr className='border-accent opacity-40'></hr>

            <div className='flex flex-row gap-12 xs:gap-3 justify-between px-32 sm:px-4 xs:px-4 py-12 sm:py-4 xs:py-4'>
              <Icons.Figma className='text-accent w-12 h-auto'/>
              <Icons.Xd className='text-accent w-12 h-auto'/>
              <Icons.Photoshop className='text-accent w-12 h-auto'/>
              <Icons.Illustrator className='text-accent w-12 h-auto'/>
              {/* <PiSketchLogo className='text-accent w-12 h-auto' /> */}
            </div>

            <hr className='border-accent opacity-40'></hr>

          </div>
        </div>

        {/* PROJECTS */}
        <div className='w-sceen py-20'>
          <div className='flex flex-col'>
            <span className='text-[#A3A3A3] tracking-[0.07em] text-sm font-secondary pb-2'>Recent Works</span>
            <span className='font-main text-5xl text-accent'>Projects</span>
          </div>


          {/* PROJECT 1 */}
          <div className='flex flex-row my-20 gap-4 h-[70%] justify-between sm:flex-col-reverse xs:flex-col-reverse'>
            <div className='w-[40%] h-[60vh] flex flex-col justify-center gap-4 sm:w-full xs:w-full'>
              <div className='flex flex-row items-end'>
                <span className='w-[80%] font-secondary text-accent text-3xl tracking-[0.05em] font-extrabold'>Nomo Space</span>
                <span className='w-[20%] text-right font-secondary text-[#404B52] text-xs tracking-[0.05em] font-extrabold'>2023</span>
              </div>

              <span className='text-[#C2C2C2] tracking-[0.10em] font-secondary font-light text-[16px]'>A Coffee Space Brand aiming to establish their online presence highlighting their products, services, and space.</span>

              <button onClick={() => navigate("/projects/nomo-studio")} className='h-11 md:w-full sm:w-full xs:w-full px-6 py-2 font-secondary bg-accent bg-opacity-25 tracking-[.07em] rounded-md hover:bg-accent mt-6 flex items-center justify-center gap-3 text-[#C2C2C2] hover:text-white ease-in-out duration-300'>
                <span>View Case Study</span>
                <Icons.ArrowRight className='-rotate-45'/>
              </button>

              
            </div>
            <div className='w-[60%] flex items-center justify-center sm:w-full xs:w-full'>
              <img src={Nomo} alt='nomo thumbnail' className='h-[400px] w-auto md:h-[300px] sm:h-[300px] xs:h-[300px]'/>
            </div>
          </div>

          <hr className='border-accent opacity-40'></hr>

          {/* PROJECT 2 */}
          {/* <div className='flex flex-row my-20 gap-4 h-[70%] justify-between'>
            <div className='w-[40%] h-[60vh] flex flex-col justify-center gap-4'>
              <div className='flex flex-row items-end'>
                <span className='w-[80%] font-secondary text-accent text-3xl tracking-[0.05em] font-extrabold'>Bohol Travel Guide Website Redesign</span>
                <span className='w-[20%] text-right font-secondary text-[#404B52] text-xs tracking-[0.05em] font-extrabold'>2023</span>
              </div>
              
              <span className='text-[#C2C2C2] tracking-[0.10em] font-secondary font-light text-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus quis soluta eligendi tempora ipsa amet atque eveniet.</span>

              <button onClick={() => navigate("/projects/bohol-website-redesign")} className='h-11 md:w-full sm:w-full xs:w-full px-6 py-2 font-secondary bg-accent bg-opacity-25 tracking-[.07em] rounded-md hover:bg-accent mt-6 flex items-center justify-center gap-3 text-[#C2C2C2] hover:text-white ease-in-out duration-300'>
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
      {/* FOOTER */}
      <div className='z-10 w-sceen pt-8'>
        <Footer />
      </div>   

    </div>
  )
}

export default Homepage
import { useState, useEffect } from 'react'
import Footer from '../../components/global/Footer'
import ScrollOnTop from '../../components/global/ScrollOnTop'
import BoholMockup from '../../assets/images/thumbnail/boholtravelguideThumbnail.png'
import SparkleDark from '../../assets/images/bohol/sparkle-dark.png'
import SparkleLight from '../../assets/images/bohol/sparkle-light.png'
import Age from '../../assets/images/bohol/chart1.png'
import Location from '../../assets/images/bohol/chart2.png'
import Residence from '../../assets/images/bohol/chart3.png'
import Travel from '../../assets/images/bohol/chart4.png'
import TravelCount from '../../assets/images/bohol/chart5.png'
import BeenToBohol from '../../assets/images/bohol/chart6.png'
import SUSResult from '../../assets/images/bohol/susresult.png'
import lofi1 from '../../assets/images/bohol/lofi1.png'
import lofi2 from '../../assets/images/bohol/lofi2.png'
import lofi3 from '../../assets/images/bohol/lofi3.png'
import lofi4 from '../../assets/images/bohol/lofi4.png'
import midfidelity from '../../assets/images/bohol/DesignDecisions.png'
import StyleGuide from '../../assets/images/bohol/styleguide.png'
import Before from '../../assets/images/bohol/before.png'
import After from '../../assets/images/bohol/after.png'
import BackToTop from '../../components/global/BackToTop'


function BoholTravelGuide() {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex flex-col w-screen bg-case-study h-auto'>
      <ScrollOnTop />
      <BackToTop scrollPosition={scrollPosition}/>

      {/* bg-[#e2d7d7] */}
      <div className="w-screen px-24 h-auto phone:px-5 tablet:px-10 font-secondary">

        {/* HERO */}
        <div className='flex flex-row tablet:flex-col phone:flex-col h-[80vh] tablet:h-auto phone:h-auto pt-12 tablet:gap-12 phone:gap-12'>
          <div className='flex flex-col justify-between w-[35%] tablet:w-full phone:w-full tablet:text-center phone:text-center'>
            <div className='flex flex-col justify-between gap-6'>
              <div className='flex flex-col justify-between text-neutrals-dark-600'>
                <span className='font-secondary text-9xl font-extrabold tablet:text-8xl phone:text-7xl'>BOHOL</span> 
                <span className='font-secondary text-6xl font-extrabold tablet:text-8xl phone:text-7xl'>TRAVEL GUIDE</span> 
              </div>
              <span className='font-secondary text-2xl tablet:text-2xl text-neutrals-mid-400'>Homepage Redesign</span>
            </div>
            <span className='font-secondary text-xl tablet:text-base tablet:pt-20 phone:text-sm phone:pt-20 text-neutrals-mid-400'>UI/UX Case Study</span>
          </div>

          <div className='flex items-center justify-end w-[65%] tablet:w-full phone:w-full tablet:justify-center phone:justify-center'>
            <img src={BoholMockup} alt='nomo thumbnail' className='h-[500px] w-auto tablet:h-[300px] phone:h-[250px] '/>
          </div>
        </div>

        {/* Title ad overview */}
        <div className='flex flex-col pt-48 gap-4 phone:pt-24'>
          {/* title */}
          <div className='flex flex-col gap-2 px-32 tablet:px-0 phone:px-0'>
            <span className='font-secondary text-2xl text-neutrals-mid-400 tracking-[0.07em] phone:text-sm '>A UI/UX Case Study:</span>
            <span className='font-secondary font-extrabold text-6xl phone:text-4xl text-neutrals-dark-600 tracking-[0.03em] phone:tracking-[0em]'>Elevating the Travel Experience: A Travel Guide Homepage Redesign</span>
          </div>

          {/* overview */}
          <div className='flex flex-col pt-16'>
            <span className='font-secondary text-sm text-neutrals-mid-400 tracking-[0.07em] px-32 tablet:px-0 phone:px-0'>OVERVIEW</span>

            <hr className='border-[#24303C] mt-6'/>

            <div className='flex flex-row phone:flex-col gap-2 align-middle justify-between py-8 px-32 tablet:px-0 phone:px-10 phone:gap-6'>
              <div className='flex flex-col gap-1'>
                <span className='font-secondary text-xs text-neutrals-mid-400 tracking-[0.07em]'>TIMELINE</span>
                <span className='font-secondary font-semibold text-neutrals-dark-600 tracking-[0.05em]'>August - September 2023</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='font-secondary text-xs text-neutrals-mid-400 tracking-[0.07em]'>MY ROLE</span>
                <span className='font-secondary font-semibold text-neutrals-dark-600 tracking-[0.05em]'>UI/UX Designer</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='font-secondary text-xs text-neutrals-mid-400 tracking-[0.07em]'>TOOLS</span>
                <ul className='font-secondary font-semibold text-neutrals-dark-600 tracking-[0.05em]'>
                  <li>Figma</li>
                  <li>Adobe Photoshop</li>
                </ul>
              </div>
            </div>

            <hr className='border-[#24303C] mt-6'/>
          </div>
        </div>

        {/* description & problem statement */}
        <div className='flex flex-col tablet:flex-col phone:flex-col py-24 gap-24'>

          {/* background */}
          <div className='flex flex-row phone:flex-col gap-24 w-full tablet:w-full phone:w-full'>
            <div className='flex flex-row gap-6 w-[40%] phone:w-full'>
              <img src={SparkleLight} alt='sparkle' className='h-[45px] w-auto' />
              <span className='font-secondary font-semibold text-4xl text-neutrals-dark-600'>The Story Behind the Project</span>
            </div>

            <div className='w-[60%] phone:w-full'>
              <span className='w-[50%] text-neutrals-mid-500 text-lg tracking-[0.03em] phone:text-sm whitespace-pre-wrap'>
                Bohol is such a beautiful place and so much people are adoring its natural wonders. With that, its tourism blossomed in such a way that no one has expected.
                <br/><br/>
                I was a resident of Bohol for almost 6 years before I moved to my permanent residence 10 years ago. As I visited the place last summer, (May of 2022), I saw how it improved in terms of the infrastructure, the people’s way of life there, and the place in general. Yet the sense of belongingness that I’ve felt is still there.
                <br/><br/>
                Just this year, I have decided to pursue this personal project with a goal in mind of radiating belongingness to visitors and tourists who also wants to visit the place by designing a compelling and informative travel guide website.
                <br/><br/>
                But then I’ve found out from my research that it has already a running and live website but the design is very outdated where I instantly thought that it could not pull tourists to visit the place. 
              </span>
            </div>
          </div>

          <hr className='border-[#24303C] opacity-40 mt-6'/>

          {/* Problem Statement */}
          <div className='flex flex-row phone:flex-col gap-24 w-full tablet:w-full phone:w-full'>
            <div className='flex flex-row gap-6 w-[40%] phone:w-full'>
              <img src={SparkleLight} alt='sparkle' className='h-[45px] w-auto' />
              <span className='font-secondary font-semibold text-4xl text-neutrals-dark-600'>The Problem</span>
            </div>

            <div className='w-[60%] phone:w-full'>
              <span className='w-[50%] text-neutrals-mid-500 text-lg tracking-[0.03em] phone:text-sm whitespace-pre-wrap'>
              Scanning through the website, I can say that the design is not very attracting compared to other travel guide website homepages that I have visited before.
              <br/><br/>
              Its current homepage was full of text and other extra unnecessary sections, like the advertisements, which would lead to low engagements and resulting to a bad user experience.
              <br/><br/>
              Also, with having an outdated homepage design, it also results to low conversion rate where the homepage is not effectively guiding the desired actions to the users, such as booking a travel deal or exploring other contents.
              </span>
            </div>
          </div>

          <hr className='border-[#24303C] opacity-40 mt-6'/>

          {/* goals */}
          <div className='flex flex-row phone:flex-col gap-24 w-full tablet:w-full phone:w-full'>
            <div className='flex flex-row gap-6 w-[40%] phone:w-full'>
              <img src={SparkleLight} alt='sparkle' className='h-[45px] w-auto' />
              <span className='font-secondary font-semibold text-4xl text-neutrals-dark-600'>The Goal</span>
            </div>

            <div className='w-[60%] phone:w-full'>
              <span className='w-[50%] text-neutrals-mid-500 text-lg tracking-[0.03em] phone:text-sm whitespace-pre-wrap'>
                To redesign the Bohol Travel Guide homepage and reestablish the brand positioning of the website in order to improve the overall usability and accessibility of the homepage to give visitors with seamless and engaging experience of the homepage.
                <br/><br/>
                Additionally, we want to clearly deliver and communicate the content to the tourists who visit the homepage and increase conversion rates and engagements. Also, to be able to fully highlight the beauty of Bohol. 
              </span>
            </div>
          </div>

          
        </div>

        <hr className='border-[#24303C] opacity-40 mt-6'/>

        {/* user research */}
        <div className='flex flex-col w-full py-16 gap-32'>
          <span className='font-secondary font-semibold text-4xl text-neutrals-dark-600'>User Research</span>

          {/* research overview */}
          <div className='flex flex-col gap-12'>
            <span className='font-secondary font-semibold text-2xl text-neutrals-dark-600'>Research Overview</span>
            <div className='flex flex-row phone:flex-col phone:gap-8 justify-between w-full'>
              <div className='bg-neutrals-light-100 flex flex-col w-[30%] phone:w-full h-[330px] px-8 py-12 gap-6 rounded-2xl'>
                <img src={SparkleLight} alt='sparkle' className='h-[35px] w-[40px]' />
                <span className='font-secondary font-semibold text-xl text-neutrals-dark-600'>Research Objectives</span>
                <span className='font-secondary text-base text-[#5E6B78]'>To gather insights and different perspectives about the live and current Bohol Tours website for the redesigning of the website.</span>
              </div>

              <div className='bg-neutrals-light-100 flex flex-col w-[30%] phone:w-full h-[330px] px-8 py-12 gap-6 rounded-2xl'>
                <img src={SparkleLight} alt='sparkle' className='h-[35px] w-[40px]' />
                <span className='font-secondary font-semibold text-xl text-neutrals-dark-600'>Respondents</span>
                <ul className='font-secondary text-base text-[#5E6B78] list-disc pl-6'>
                  <li>All Genders</li>
                  <li>20 - 35 Years Old</li>
                  <li>Traveler</li>
                </ul>
              </div>

              <div className='bg-neutrals-light-100 flex flex-col w-[30%] phone:w-full h-[330px] px-8 py-12 gap-6 rounded-2xl'>
                <img src={SparkleLight} alt='sparkle' className='h-[35px] w-[40px]' />
                <span className='font-secondary font-semibold text-xl text-neutrals-dark-600'>Research Tools and Methods</span>
                <ul className='font-secondary text-base text-[#5E6B78] list-disc pl-6'>
                  <li>Tools (Google Forms, FigJam, Google Sheets for visualization)</li><br/>
                  <li>Methods (System Usability Scale)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* system usability scale */}
          <div className='flex flex-col gap-12'>
            <span className='font-secondary font-semibold text-2xl text-neutrals-dark-600'>System Usability Scale</span>
            <div className='flex flex-row phone:flex-col phone:gap-8 justify-between w-full gap-8'>
              <div className='bg-white flex flex-col w-[50%] phone:w-full h-auto px-8 py-12 gap-6 rounded-2xl'>
                <div className="flex flex-row gap-4">
                  <img src={SparkleLight} alt='sparkle' className='h-[35px] w-[40px]' />
                  <span className='font-secondary font-semibold text-xl text-neutrals-dark-600'>Questions</span>
                </div>
                

                <div className='flex flex-col gap-4 pl-8'>
                  <div className='flex flex-row gap-8 items-center'>
                    <span className='text-xl font-semibold'>1.</span>
                    <span className='text-base'>I think that I would like to use this website frequently.</span>
                  </div>
                  <div className='flex flex-row gap-8 items-center'>
                    <span className='text-xl font-semibold'>2.</span>
                    <span className='text-base'>I found the website hard to understand.</span>
                  </div>
                  <div className='flex flex-row gap-8 items-center'>
                    <span className='text-xl font-semibold'>3.</span>
                    <span className='text-base'>I thought the website was easy to use.</span>
                  </div>
                  <div className='flex flex-row gap-8 items-center'>
                    <span className='text-xl font-semibold'>4.</span>
                    <span className='text-base'>I think that I would need the support of a technical person to be able to use this website.</span>
                  </div>
                  <div className='flex flex-row gap-8 items-center'>
                    <span className='text-xl font-semibold'>5.</span>
                    <span className='text-base'>I found the various functions in this website were well integrated.</span>
                  </div>
                  <div className='flex flex-row gap-8 items-center'>
                    <span className='text-xl font-semibold'>6.</span>
                    <span className='text-base'>I thought there was too much inconsistency in this website.</span>
                  </div>
                  <div className='flex flex-row gap-8 items-center'>
                    <span className='text-xl font-semibold'>7.</span>
                    <span className='text-base'>I would imagine that most people would learn to use this website very quickly.</span>
                  </div>
                  <div className='flex flex-row gap-8 items-center'>
                    <span className='text-xl font-semibold'>8.</span>
                    <span className='text-base'>I found the website very hard to use.</span>
                  </div>
                  <div className='flex flex-row gap-8 items-center'>
                    <span className='text-xl font-semibold'>9.</span>
                    <span className='text-base'>I felt very confident using the website.</span>
                  </div>
                  <div className='flex flex-row gap-8 items-center'>
                    <span className='text-xl font-semibold'>10.</span>
                    <span className='text-base'>I needed to learn a lot of things before I could get going with this website.</span>
                  </div>
                  
                </div>
              </div>

              <div className='bg-white flex flex-col w-[50%] phone:w-full h-auto px-8 py-12 gap-6 rounded-2xl'>
                <div className="flex flex-row gap-4">
                  <img src={SparkleLight} alt='sparkle' className='h-[35px] w-[40px]' />
                  <span className='font-secondary font-semibold text-xl text-neutrals-dark-600'>How to Solve for SUS</span>
                </div>

                <span className='text-base font-secondary pl-8'>
                  Odd number’s (1, 3, 5, 7, 9) responses should be subtracted by 1 and then added up together to get each of the item’s raw score.
                  <br/><br/>
                  For the even numbers (2, 4, 6, 8, 10), responses should be subtracted to 5 and add up to get each of the item’s raw score, same as to the odd numbers.
                  <br/><br/>
                  After getting the raw scores of each items, in order to get the overall SUS Score, raw scores should be added all up and should be multiplied by 2.5.
                </span>
              </div>

            </div>
          </div>

          {/* SUS Result */}
          {/* Preliminary */}
          <div className='flex flex-col gap-16'>
            <span className='font-secondary font-semibold text-2xl text-neutrals-dark-600'>System Usability Scale</span>

            {/* first row */}
            <div className='flex flex-row phone:flex-col phone:gap-16 gap-8 justify-between'>
              <div className='flex flex-col gap-4 w-[30%] phone:w-full '>
                <span className='italic font-secondary'>"How old are you?"</span>
                <img src={Age} alt="age" className='bg-neutrals-light-100 rounded-xl'/>
              </div>
              <div className='flex flex-col gap-4 w-[30%] phone:w-full '>
                <span className='italic font-secondary'>"Where are you from?"</span>
                <img src={Location} alt="location" className='bg-neutrals-light-100 rounded-xl'/>
              </div>
              <div className='flex flex-col gap-4 w-[30%] phone:w-full '>
                <span className='italic font-secondary'>"Do you live in Bohol?"</span>
                <img src={Residence} alt="residence" className='bg-neutrals-light-100 rounded-xl'/>
              </div>
            </div>

            <div className='flex flex-row phone:flex-col phone:gap-16 gap-8 justify-between items-end'>
              <div className='flex flex-col gap-4 w-[30%] phone:w-full '>
                <span className='italic font-secondary'>"Do You Travel?"</span>
                <img src={Travel} alt="travel" className='bg-neutrals-light-100 rounded-xl'/>
              </div>
              <div className='flex flex-col gap-4 w-[30%] phone:w-full '>
                <span className='italic font-secondary'>"How many places in the Philippines have you visited?"</span>
                <img src={TravelCount} alt="travel count" className='bg-neutrals-light-100 rounded-xl'/>
              </div>
              <div className='flex flex-col gap-4 w-[30%] phone:w-full '>
                <span className='italic font-secondary'>"Have you been to Bohol?"</span>
                <img src={BeenToBohol} alt="have you been to bohol?" className='bg-neutrals-light-100 rounded-xl'/>
              </div>
            </div>
          </div>

          {/* SUS RESULTS */}
          {/* Main Results */}
          <div className='flex flex-col gap-16'>
            <span className='font-secondary font-semibold text-2xl text-neutrals-dark-600'>Main Survey Results</span>
            <img src={SUSResult} alt="sus results" className='rounded-2xl shadow-xl'/>

            <div className='flex flex-col gap-4'>
              <div className='flex flex-row phone:flex-col gap-12 justify-between px-32 py-8 phone:px-8 bg-gray-400 rounded-xl '>
                <div className='flex gap-6 items-center'>
                  <img src={SparkleDark} alt="sparkledark" className='h-[45px] w-auto phone:h-[25px]'/>
                  <span className='text-xl '>SUS Overall Score: <span className='text-3xl font-bold'>60.21</span></span>
                </div>
                <div className='flex gap-6 items-center'>
                  <img src={SparkleDark} alt="sparkledark" className='h-[45px] w-auto phone:h-[25px]'/>
                  <span className='text-xl '>Adjective Rating: <span className='text-3xl font-bold'>Poor</span></span>
                </div>
              </div>

              <span className='font-secondary text-sm text-[#9198A1] tracking-[0.03em] phone:text-xs'>Reference: https://uiuxtrend.com/measuring-system-usability-scale-sus/</span>
            </div>
          </div>

          {/* detailed feedback */}
          <div className='flex flex-col gap-16'>
            <span className='font-secondary font-semibold text-2xl text-neutrals-dark-600 w-[40%] phone:w-full'>Detailed Feedback from Respondents After Navigating the Website</span>
            <div className='flex flex-row phone:flex-col phone:gap-8 gap-12 bg-neutrals-light-100 py-12 px-12 rounded-xl '>
              <div className='flex flex-col w-[50%] gap-8 phone:w-full'>
                <div className='flex gap-6 items-center'>
                  <img src={SparkleDark} alt="sparkledark" className='h-[30px] w-auto opacity-70'/>
                  <span className='text-base '>The design is very stiff and plain.</span>
                </div>
                <div className='flex gap-6 items-center'>
                  <img src={SparkleDark} alt="sparkledark" className='h-[30px] w-auto opacity-70'/>
                  <span className='text-base '>Consistency in all aspect.</span>
                </div>
                <div className='flex gap-6 items-center'>
                  <img src={SparkleDark} alt="sparkledark" className='h-[30px] w-auto opacity-70'/>
                  <span className='text-base '>Too many ads; a little uninviting to visitors of the website. Ads should not distract reading experience.</span>
                </div>
              </div>

              <div className='flex flex-col w-[50%] gap-8 phone:w-full'>
                <div className='flex gap-6 items-center'>
                  <img src={SparkleDark} alt="sparkledark" className='h-[30px] w-auto opacity-70'/>
                  <span className='text-base '>Too many ads; a little uninviting to visitors of the website. Ads should not distract reading experience.</span>
                </div>
                <div className='flex gap-6 items-center'>
                  <img src={SparkleDark} alt="sparkledark" className='h-[30px] w-auto opacity-70'/>
                  <span className='text-base '>Header design is a bit clunky. Apply color theory to Hero.</span>
                </div>
                <div className='flex gap-6 items-center'>
                  <img src={SparkleDark} alt="sparkledark" className='h-[30px] w-auto opacity-70'/>
                  <span className='text-base '>Text on the banner (Hero) is hard to read.</span>
                </div>
              </div>
              
            </div>
          </div>

          {/* Comments */}
          <div className='flex flex-col gap-16'>
            <span className='font-secondary font-semibold text-2xl text-neutrals-dark-600 w-[40%] phone:w-full'>Suggestions from the  Respondents</span>
            <div className='flex flex-row phone:flex-col phone:gap-8 gap-12 bg-white py-12 px-12 rounded-xl shadow-xl shadow-gray-200'>
              <div className='flex flex-col w-[50%] gap-8 phone:w-full'>
                <div className='flex gap-6 items-center'>
                  <img src={SparkleLight} alt="SparkleLight" className='h-[30px] w-auto opacity-70'/>
                  <span className='text-base '>Incorporate Bohol culture through designs, colors, and patterns.</span>
                </div>
                <div className='flex gap-6 items-center'>
                  <img src={SparkleLight} alt="SparkleLight" className='h-[30px] w-auto opacity-70'/>
                  <span className='text-base '>Adhere to web design best practices like WCAG.</span>
                </div>
                <div className='flex gap-6 items-center'>
                  <img src={SparkleLight} alt="SparkleLight" className='h-[30px] w-auto opacity-70'/>
                  <span className='text-base '>More professional navigation bar.</span>
                </div>
              </div>

              <div className='flex flex-col w-[50%] gap-8 phone:w-full'>
                <div className='flex gap-6 items-center'>
                  <img src={SparkleLight} alt="SparkleLight" className='h-[30px] w-auto opacity-70'/>
                  <span className='text-base '>Simpler layout and design for the homepage.</span>
                </div>
                <div className='flex gap-6 items-center'>
                  <img src={SparkleLight} alt="SparkleLight" className='h-[30px] w-auto opacity-70'/>
                  <span className='text-base '>Design should be easy to use and understand.</span>
                </div>
                <div className='flex gap-6 items-center'>
                  <img src={SparkleLight} alt="SparkleLight" className='h-[30px] w-auto opacity-70'/>
                  <span className='text-base '>Apply slightly rounded edges on different parts of the website to improve impression.</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <hr className='border-[#24303C] opacity-40 mt-6'/>

        {/* early ideation */}
        <div className='flex flex-col gap-32 py-16'>

          {/* lofi */}
          <div className='flex flex-col gap-12'>
            <div className='flex flex-row phone:flex-col gap-4'>
              <span className='w-[40%] phone:w-full font-secondary font-semibold text-4xl text-neutrals-dark-600'>Early Ideation</span>
              <span className='w-[60%] phone:w-full text-neutrals-mid-500 text-lg tracking-[0.03em] phone:text-sm'>
                Low-fidelity designs were iterated 4 times to come up with a clean, and well-structured layouts for sections to ensure that I deliver an effective and efficient homepage according to the features and contents planned and revised from the original website.
              </span>
            </div>

            <div className='flex flex-col gap-4'>
              <span className='font-secondary text-sm text-[#747474] tracking-[0.07em]'>LOW-FIDELITY DESIGNS</span>
              
              <div className='px-10 phone:px-3 phone:py-3 py-8 overflow-hidden bg-neutrals-light-100 rounded-xl'>
                <div className='flex flex-row gap-4 h-[100vh] phone:h-auto w-full items-start justify-between'>

                  <div className='w-[25%] h-full flex flex-col gap-2'>
                    <span className='text-xs opacity-70'>Version 1</span>
                    <img src={lofi1} alt='lofi ver1' className='h-auto w-full rounded-xl'/>
                  </div>
                  
                  <div className='w-[25%] h-full flex flex-col gap-2'>
                    <span className='text-xs opacity-70'>Version 1</span>
                    <img src={lofi2} alt='lofi ver1' className='h-auto w-full rounded-xl'/>
                  </div>

                  <div className='w-[25%] h-full flex flex-col gap-2'>
                    <span className='text-xs opacity-70'>Version 1</span>
                    <img src={lofi3} alt='lofi ver1' className='h-auto w-full rounded-xl'/>
                  </div>

                  <div className='w-[25%] h-full flex flex-col gap-2'>
                    <span className='text-xs opacity-70'>Version 1</span>
                    <img src={lofi4} alt='lofi ver1' className='h-auto w-full rounded-xl'/>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* MID FIDELITY */}
          <div className='flex flex-col gap-12'>
            <div className='flex flex-row phone:flex-col gap-4'>
              <span className='w-[40%] phone:w-full font-secondary font-semibold text-4xl text-neutrals-dark-600'>Mid-Fidelity Layout</span>
              <span className='w-[60%] phone:w-full text-neutrals-mid-500 text-lg tracking-[0.03em] phone:text-sm'>
                From the fourth and final low-fidelity layout, I constructed a mid-fidelity layout placing the contents and elements such as buttons and icons to its assigned sections, seeing if the layout goes well with the content at hand. This section also contains a detailed explanation of the design decisions I have made.
              </span>
            </div>

            <div className='px-5 phone:px-3 phone:py-3 py-8 overflow-auto bg-neutrals-light-100 rounded-xl'>
              <div className='flex flex-row h-[70vh] phone:h-auto w-full items-start justify-center'>
                <img src={midfidelity} alt='mid-fidelity layout' className='h-auto w-full rounded-2xl'/>
              </div>
            </div>

          </div>
          
        </div>

        <hr className='border-[#24303C] opacity-40 mt-6'/>

        {/* style guide */}
        <div className='flex flex-col gap-12 py-16'>
          <div className='flex flex-row phone:flex-col gap-4'>
            <span className='w-[40%] phone:w-full font-secondary font-semibold text-4xl text-neutrals-dark-600'>Style Guide</span>
            <span className='w-[60%] phone:w-full text-neutrals-mid-500 text-lg tracking-[0.03em] phone:text-sm'>
              Scanning from the current website, I can clearly see that there is no consistent color palette and typography established in the homepage, and from the research I have done, most of the comments and suggestions was pointing to creating a consistent and clean design, that’s why I created these design kit from scratch, including the logo.
            </span>
          </div>

          <div className='h-auto w-full bg-neutrals-light-100 rounded-2xl'>
            <img src={StyleGuide} alt='style guide' className='h-auto w-full'/>
          </div>

          
        </div>

        <hr className='border-[#24303C] opacity-40 mt-6'/>


        {/* final design */}
        <div className='flex flex-col py-16 gap-16'>
          <div className='flex flex-row phone:flex-col gap-10'>
            <span className='w-[40%] phone:w-full font-secondary font-semibold text-4xl text-neutrals-dark-600'>Final Designs</span>
            <div className='w-[60%] phone:w-full flex flex-col gap-4'>
              <span className='italic font-secondary font-semibold text-2xl text-neutrals-dark-600'>High-fidelity Design</span>
              <span className='text-neutrals-mid-500 text-lg tracking-[0.03em] phone:text-sm'>Creating the early ideation layout thoroughly and iteratively helps in transitioning to creating a seamless and consistent final design. I constructed this final design with a goal in mind of satisfying the customers as I have heard their honest comments and suggestions about the current website through the survey.</span>
            </div>

          </div>

          <div className='flex flex-col gap-4'>
            <span className='font-secondary text-sm text-[#747474] tracking-[0.07em]'>BEFORE AND AFTER COMPARISON</span>
            <div className='px-10 phone:px-3 phone:py-3 py-8 overflow-hidden bg-neutrals-light-100 rounded-2xl'>
                <div className='flex flex-row gap-6 h-[100vh] phone:h-auto w-full items-start justify-between'>

                  <div className='w-[40%] h-full flex flex-col gap-2'>
                    <span className='text-xs opacity-70'>Before</span>
                    <img src={Before} alt='lofi ver1' className='h-auto w-full rounded-2xl'/>
                  </div>
                  
                  <div className='w-[60%] h-full flex flex-col gap-2'>
                    <span className='text-xs opacity-70'>After</span>
                    <img src={After} alt='lofi ver1' className='h-auto w-full rounded-2xl'/>
                  </div>

                </div>
              </div>
          </div>

          <div className='flex flex-col gap-12'>
            <span className='font-secondary font-semibold text-2xl text-neutrals-dark-600'>Design Prototype</span>
            
            <div className='h-full w-full flex flex-col items-center justify-center bg-bg py-12 px-24 phone:px-8 rounded-xl gap-6'>
              <span className='text-accent font-secondary tracking-[0.03em] phone:text-sm'>Navigate through this prototype!</span>

              {/* width="800" height="450" */}
              <iframe className="rounded-[20px] phone:rounded-lg w-[800px] h-[450px] tablet:w-full tablet:h-[350px] phone:w-full phone:h-[180px]" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7gTT0gdYllazWFuDMDESEX%2FBOHOL---Homepage-Redesign%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D103-1211%26viewport%3D495%252C1024%252C0.34%26t%3DAws6O8EC4S6eUDJr-1%26scaling%3Dscale-down-width%26mode%3Ddesign%26hide-ui%3D1" allowFullScreen ></iframe>
            </div>

          </div>

        </div>

        

        <hr className='border-[#24303C] opacity-40 mt-6'/>

        {/* conclusion */}
        <div className='flex flex-col gap-8 pt-16 pb-48 px-48 tablet:px-0 phone:px-0'>
          <span className='font-secondary font-semibold text-4xl text-neutrals-dark-600'>Reflection</span>

          <hr className='border-[#24303C] opacity-40 my-6'/>

          <div className='flex flex-col gap-4'>
            <span className='italic font-secondary font-semibold text-2xl text-neutrals-dark-600'>If I have more time...</span>
            <span className='text-neutrals-mid-500 text-lg tracking-[0.03em] phone:text-sm'>I would continue to complete the whole project and create the remaining screens. I would also like to do an iteration after conducting the usability testing and would collaborate with the owner and administrator of the current website to discuss more about the project. </span>
          </div>

          <hr className='border-[#24303C] opacity-40 my-6'/>

          <div className='flex flex-col gap-4'>
            <span className='italic font-secondary font-semibold text-2xl text-neutrals-dark-600'>What I have learned in doing this project?</span>
            <span className='text-neutrals-mid-500 text-lg tracking-[0.03em] phone:text-sm'>In the few weeks of creating this project, I have learned that designing a website from scratch and redesigning one are composed of different processes. Nevertheless, I can say that both requires extensive research and a strong problem solving skills in order to achieve an effective and efficient design solution regardless of which category a project falls.</span>
          </div>

          <hr className='border-[#24303C] opacity-40 my-6'/>

          <div className='flex flex-col gap-4'>
            <span className='italic font-secondary font-semibold text-2xl text-neutrals-dark-600'>What are the challenges I have faced during the curation of this project?</span>
            <span className='text-neutrals-mid-500 text-lg tracking-[0.03em] phone:text-sm'>In doing this project, getting a response from the target respondents of the survey are the hardest part. Encouraging people to answer a 10-minute long likert scale survey also requires and extensive persuasion skills and also takes a toll on the designer for the waiting hours after sending invitations. </span>
          </div>
        </div>


      </div>

      {/* footer */}
      <div className='bg-bg'>
        <Footer />
      </div>

    </div>
  )
}

export default BoholTravelGuide
// import React from 'react'
import Footer from '../../components/global/Footer'
import Nomo from './../../assets/images/nomo/nomo-mockup.png'
import UserPersona from './../../assets/images/nomo/user-persona.png'
import UserFlow from './../../assets/images/nomo/userflow.png'
import StyleGuide from './../../assets/images/nomo/style-guide.png'
import LofiVer1 from './../../assets/images/nomo/lofi-wireframe-1.png'
import LofiVer2 from './../../assets/images/nomo/lofi-wirefrme-2.png'
import LofiVer3 from './../../assets/images/nomo/lofi-wirefrme-3.png'
import Version1 from './../../assets/images/nomo/v1.png'
import Version2 from './../../assets/images/nomo/v2.png'
import Version3 from './../../assets/images/nomo/v3.png'
import Homepage from './../../assets/images/nomo/Static.png'
import CoffeMenu from './../../assets/images/nomo/menu.jpg'
import DessertMenu from './../../assets/images/nomo/dessert.jpg'
import Dessert from './../../assets/images/nomo/dessert-menu.jpg'
import Coffee from './../../assets/images/nomo/coffee-menu.jpg'
import ScrollOnTop from '../../components/global/ScrollOnTop'


function NomoSpaceProject() {
  return (
    <div className='flex flex-col w-screen bg-[#F4F4F4] h-auto'>
      <ScrollOnTop />
      {/* bg-[#e2d7d7] */}
      <div className="w-screen px-24 h-auto phone:px-5 tablet:px-10 font-secondary">

        {/* HERO */}
        <div className='flex flex-row tablet:flex-col phone:flex-col h-[80vh] tablet:h-auto phone:h-auto pt-12 text-[#24303C] tablet:gap-12 phone:gap-12'>
          <div className='flex flex-col justify-between w-[35%] tablet:w-full phone:w-full tablet:text-center phone:text-center'>
            <div className='flex flex-col justify-between gap-3'>
              <span className='font-secondary text-9xl font-extrabold tablet:text-8xl phone:text-7xl'>NOMO SPACE</span>
              <span className='font-secondary text-3xl tablet:text-2xl'>A Coffee Space Brand</span>
            </div>
            <span className='font-secondary text-xl tablet:text-base tablet:pt-20 phone:text-sm phone:pt-20'>UI/UX Case Study</span>
          </div>

          <div className='flex items-center w-[65%] tablet:w-full phone:w-full tablet:justify-center phone:justify-center'>
            <img src={Nomo} alt='nomo thumbnail' className='h-[500px] w-auto rotate-3 tablet:h-[300px] phone:h-[250px]'/>
          </div>
        </div>

        {/* Title ad overview */}
        <div className='flex flex-col pt-48 gap-4 phone:pt-24'>
          {/* title */}
          <div className='flex flex-col gap-2 px-32 tablet:px-0 phone:px-0'>
            <span className='font-secondary text-2xl text-[#747474] tracking-[0.07em] phone:text-sm '>Crafting the Perfect Blend:</span>
            <span className='font-secondary font-extrabold text-6xl phone:text-4xl text-[#24303C] tracking-[0.03em] phone:tracking-[0em]'>Revitalizing the Coffee Space Brand with a Custom Web Design Solution</span>
          </div>

          {/* overview */}
          <div className='flex flex-col pt-16'>
            <span className='font-secondary text-sm text-[#747474] tracking-[0.07em] px-32 tablet:px-0 phone:px-0'>OVERVIEW</span>

            <hr className='border-[#24303C] mt-6'/>

            <div className='flex flex-row phone:flex-col gap-2 align-middle justify-between py-8 px-32 tablet:px-0 phone:px-10 phone:gap-6'>
              <div className='flex flex-col gap-1'>
                <span className='font-secondary text-xs text-[#747474] tracking-[0.07em]'>TIMELINE</span>
                <span className='font-secondary font-semibold text-[#24303C] tracking-[0.05em]'>Feb - May 2023</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='font-secondary text-xs text-[#747474] tracking-[0.07em]'>MY ROLE</span>
                <span className='font-secondary font-semibold text-[#24303C] tracking-[0.05em]'>UI/UX Designer</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='font-secondary text-xs text-[#747474] tracking-[0.07em]'>PLATFORM</span>
                <span className='font-secondary font-semibold text-[#24303C] tracking-[0.05em]'>Responsive Website</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='font-secondary text-xs text-[#747474] tracking-[0.07em]'>TOOLS</span>
                <span className='font-secondary font-semibold text-[#24303C] tracking-[0.05em]'>Figma</span>
                <span className='font-secondary font-semibold text-[#24303C] tracking-[0.05em]'>Adobe Photoshop</span>
              </div>
            </div>

            <hr className='border-[#24303C] mt-6'/>
          </div>
        </div>

        {/* description & problem statement */}
        <div className='flex flex-row tablet:flex-col phone:flex-col py-24 gap-14'>
          <div className='flex flex-col gap-4 w-[50%] tablet:w-full phone:w-full'>
            <span className='font-secondary font-semibold text-4xl text-[#24303C]'>A little something about the brand...</span>
            <span className='text-[#393939] text-lg tracking-[0.03em] phone:text-base'>
              Nomo Space is a coffee space brand which promotes a safe, friendly, and comfortable workspace for young professionals, freelancers, and students alike while also offering a variety of drinks and snacks including coffees, teas, and desserts.
            </span>
          </div>

          {/* problem */}
          <div className='flex-col flex gap-4 w-[50%] tablet:w-full phone:w-full'>
            <span className='font-secondary font-semibold text-4xl text-[#24303C]'>Problem Statement</span>
            <span className='text-[#393939] text-2xl font-semibold italic'>The absence of an online presence.</span>
            <span className='text-[#393939] text-lg tracking-[0.03em] phone:text-base'>
              In this modern age, the absence of a website greatly affects to its online presence. Without a website, the brand will unable to showcase its cozy space and menu offerings, engage its potential customers, and express its campaign.
              <br/> <br/>
              This problem also contributes to the brand being left behind on the market trend of online ordering, which is also one of the main goals of the brand. 
            </span>
          </div>
        </div>

        <hr className='border-[#24303C] opacity-40 mt-6'/>

        {/* role &goal */}
        <div className='flex flex-row tablet:flex-col phone:flex-col py-24 gap-14'>

          {/* role */}
          <div className='flex flex-col gap-4 w-[50%] tablet:w-full phone:w-full'>
            <span className='font-secondary font-semibold text-4xl text-[#24303C]'>My Role</span>
            <span className='text-[#393939] text-lg tracking-[0.03em] phone:text-base'>
            I was and intern at a local startup company where I was the lead web designer for this entire project to put together the existing brand assets. The brand assets were developed by John, the company’s graphics designer. And also collaborated with our supervisor, Zach, from time to time for feedbacks.
            <br/> <br/>
            I was tasked to develop a responsive website  that is not just compelling but also radiates and attracts audience’s interest that induces creativity, collaboration, and success in them. 
            </span>
          </div>

          {/* Goal */}
          <div className='flex-col flex gap-4 w-[50%] tablet:w-full phone:w-full'>
            <span className='font-secondary font-semibold text-4xl text-[#24303C]'>Goal</span>
            <span className='text-[#393939] text-2xl font-semibold italic'>Express and highlight the brand’s distinctive qualities from other present brands.</span>
            <span className='text-[#393939] text-lg tracking-[0.03em] phone:text-base'>
            It aims to create an impactful online presence and unique identity to detach from the conventional coffee space brand in the market and to stand out from those other existing brands. Also, to effectively communicate and emphasize the brand’s unique selling points, core values, and key features to invite customers to try its products and services.
            </span>
            <span className='text-[#393939] text-2xl font-semibold italic pt-4'>Introduce cashless and hassle free ordering system.</span>
            <span className='text-[#393939] text-lg tracking-[0.03em]'>
            With the current market trend today, we want the brand to also adopt to the cashless system in paying their food and drinks. We also aim to introduce the QR-based menu scanning where customers get to order through their phones.</span>
          </div>
        </div>

        <hr className='border-[#24303C] opacity-40 mt-6'/>

        {/* user persona */}
        <div className='flex flex-col w-full py-16 gap-6'>
          <span className='font-secondary font-semibold text-4xl text-[#24303C]'>User Persona</span>
          <span className='text-[#393939] text-lg tracking-[0.03em] pb-8 phone:text-base'>
            Based on the interview and survey conducted during the preliminary research, this user persona was created  to better understand and put together the needs and and goals of the target group of users. 
          </span>

          {/* user personal profile */}

          <div className='flex flex-row w-full gap-16 phone:flex-col'>
            <div className='w-[40%] phone:w-full'>
              <img src={UserPersona} alt='user persona' className='h-auto w-full rounded-lg shadow-xl'/>
            </div>
            <div className='w-[60%] phone:w-full flex flex-col gap-2'>
              <span className='font-secondary font-semibold text-4xl text-[#24303C]'>Vanessa</span>
              <span className='text-[#24303C] text-lg tracking-[0.03em] pb-4'>Virtual Assistant / Freelancer</span>
              <span className='font-secondary text-xs text-[#747474] tracking-[0.07em]'>BACKGROUND</span>
              <span className='text-[#393939] text-lg tracking-[0.03em] pb-4 phone:text-base'>
                Vanessa is a virtual assistant and a freelancer with a strong entrepreneurial spirit who loves to work remotely. With the nature of work she does, she needs a comfortable and engaging workspace aside form her home that offers the flexibility to work efficiently while enjoying some social interaction. She enjoys the cozy ambiance plus the aroma of the freshly brewed coffee while being productive.
                <br/> <br/>
                However, coffee shops near her are not work friendly spaces because of the different customers it caters resulting to environmental noise that distracts her while doing her work resulting to unproductivity and loss of focus. With that, Nomo Space’s well designed communal spaces and private nooks cater perfectly to Alex's need for both collaborative discussions and moments of solitary concentration.                
              </span>
            </div>
          </div>

          {/* demographics */}
          <div className='flex flex-col pt-16'>
            <span className='font-secondary text-sm text-[#747474] tracking-[0.07em]'>DEMOGRAPHICS</span>

            <hr className='border-[#24303C] mt-6'/>

            <div className='flex flex-row phone:flex-col gap-2 align-middle justify-between py-8 phone:px-10 phone:gap-6'>
              <div className='flex flex-col gap-1'>
                <span className='font-secondary text-xs text-[#747474] tracking-[0.07em]'>AGE</span>
                <span className='font-secondary font-semibold text-[#24303C] tracking-[0.03em]'>25 - 40</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='font-secondary text-xs text-[#747474] tracking-[0.07em]'>GENDER</span>
                <span className='font-secondary font-semibold text-[#24303C] tracking-[0.03em]'>All Gender</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='font-secondary text-xs text-[#747474] tracking-[0.07em]'>LOCATION</span>
                <span className='font-secondary font-semibold text-[#24303C] tracking-[0.03em]'>Iligan City</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='font-secondary text-xs text-[#747474] tracking-[0.07em]'>AVERAGE MONTHLY INCOME</span>
                <span className='font-secondary font-semibold text-[#24303C] tracking-[0.03em]'>20K - 90K</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='font-secondary text-xs text-[#747474] tracking-[0.07em]'>OCCUPATION</span>
                <ul className='font-secondary font-semibold text-[#24303C] tracking-[0.03em] list-disc phone:px-8'>
                  <li>Virtual Assistant</li>
                  <li>Freelancer</li>
                  <li>Remote Workers</li>
                  <li>Students</li>
                </ul>
              </div>
              <div className='flex flex-col gap-1 w-[15%] phone:w-full'>
                <span className='font-secondary text-xs text-[#747474] tracking-[0.07em]'>TECH SAVVINESS</span>
                <span className='font-secondary font-semibold text-[#24303C] tracking-[0.03em]'>Comfortable with digital tools, platform, and social media</span>
              </div>
            </div>

            <hr className='border-[#24303C] mt-6'/>
          </div>
        </div>

        {/* challenges & motivation */}

        <div className='flex flex-row gap-14 pb-8 phone:flex-col'>
          {/* challenges */}
          <div className=' flex flex-col w-[50%] phone:w-full gap-8'>
            <span className='font-secondary font-semibold text-4xl text-[#24303C]'>CHALLENGES</span>
            <ul className='text-[#393939] text-lg tracking-[0.03em] gap-2 list-disc tablet:pl-10 phone:pl-8 phone:text-base'>
              <li>Balancing work responsibilities with the need for social interaction.</li>
              <li>Finding a workspace that fosters both creativity and concentration.</li>
              <li>Staying motivated and avoiding burnout while working independently.</li>
              <li>Ensuring a seamless digital experience within the coffee space.</li>
              <li>Overcoming isolation and craving social interaction.</li>
              <li>Needing a reliable workspace with essential amenities.</li>
            </ul>
          </div>

          {/* motivation */}
          <div className='flex flex-col w-[50%] phone:w-full gap-8'>
            <span className='font-secondary font-semibold text-4xl text-[#24303C]'>MOTIVATION</span>
            <ul className='text-[#393939] text-lg tracking-[0.03em] gap-3 list-disc tablet:pl-10 phone:pl-8 phone:text-base'>
              <li>Find a comfortable and inspiring workspace away from home.</li>
              <li>Increase productivity by working in a focused and creative environment.</li>
              <li>Network and connect with like-minded professionals.</li>
              <li>Enjoy high-quality coffee and nourishing snacks while working.</li>
              <li>Balance work and relaxation during the workday.</li>
            </ul>
          </div>
        </div>

        <hr className='border-[#24303C] opacity-40 mt-6'/>

        {/* user flow */}
        <div className='flex flex-col py-16 gap-6'>
          <span className='font-secondary font-semibold text-4xl text-[#24303C]'>User Flow</span>
          <span className='w-[60%] phone:w-full text-[#393939] text-lg tracking-[0.03em] phone:text-base'>Before proceeding to creating the high fidelity designs, the marketing interns (Barbie and Cristine) first presented the Nomo’s preliminary branding.</span>
          <div className='px-10 w-full h-[150vh] phone:h-auto phone:px-0 rounded-lg shadow-2xl'>
            <img src={UserFlow} alt='user flow' className='h-auto w-full p-10 phone:p-3'/>
          </div>
        </div>

        <hr className='border-[#24303C] opacity-40 mt-6'/>

        {/* style guide */}
        <div className='flex flex-col gap-12 py-16'>
          <div className='flex flex-col gap-4'>
            <span className='font-secondary font-semibold text-4xl text-[#24303C]'>Style Guide</span>
            <span className='text-[#393939] text-lg tracking-[0.03em] phone:text-base'>Primarily, this style guide was created by John and later on collaborated with other designers inside the company in finding the right color combination for the brand. </span>
          </div>
          <div className='flex justify-center px-10 w-full h-auto rounded-lg shadow-2xl'>
            <img src={StyleGuide} alt='style guide' className='h-auto w-[80%]'/>
          </div>
        </div>


        {/* early ideation */}
        <div className='flex flex-col gap-12 py-16'>
          <div className='flex flex-col gap-4'>
            <span className='font-secondary font-semibold text-4xl text-[#24303C]'>Early Ideation</span>
            <span className='text-[#393939] text-lg tracking-[0.03em] phone:text-base'>
              Before proceeding to creating the high fidelity designs, the marketing interns (Barbie and Cristine) first presented the Nomo’s preliminary branding.
              <br/> <br/>
              In ideating, we focused on creating its homepage first after the research was conducted. I mainly used Figma as the collaboration tool where I can easily share to the team the progress of the actual design.
            </span>
          </div>
          

          <div className='flex flex-col gap-4'>
            <span className='font-secondary text-sm text-[#747474] tracking-[0.07em]'>LOW-FIDELITY DESIGNS</span>
            <div className='px-10 phone:px-3 phone:py-3 py-8 overflow-hidden bg-gray-400 bg-opacity-30 rounded-2xl'>
              <div className='flex flex-row gap-2 h-[100vh] phone:h-auto w-full items-start justify-between'>
                <img src={LofiVer1} alt='lofi ver1' className='h-auto w-[30%] rounded-2xl'/>
                <img src={LofiVer2} alt='lofi ver1' className='h-auto w-[30%] rounded-2xl'/>
                <img src={LofiVer3} alt='lofi ver1' className='h-auto w-[30%] rounded-2xl'/>
              </div>
            </div>
          </div>

          {/* high-fidelity designs */}

          <div className='flex flex-col gap-4 py-16 phone:py-10'>
            <span className='text-[#393939] text-lg tracking-[0.03em] w-[60%] phone:w-full phone:text-base'>
              I then converted these wireframes into high-fidelity designs and experimented with the color combinations using the style guide developed by John.
              <br/><br/>
              Multiple versions were created every after internal testing and feedback cycle within the team.
            </span>

            <div className='px-10 phone:px-3 phone:py-3 py-8 overflow-hidden bg-gray-400 bg-opacity-30 rounded-2xl'>
              <div className='flex flex-row gap-2 h-[100vh] phone:h-auto w-full items-start justify-between'>

                <div className='w-[30%] h-full flex flex-col gap-3'>
                  <span className='phone:text-xs phone:opacity-60'>Version 1</span>
                  <img src={Version1} alt='lofi ver1' className='h-auto w-full rounded-2xl'/>
                </div>
                
                <div className='w-[30%] h-full flex flex-col gap-3'>
                  <span className='phone:text-xs phone:opacity-60'>Version 1</span>
                  <img src={Version2} alt='lofi ver1' className='h-auto w-full rounded-2xl'/>
                </div>

                <div className='w-[30%] h-full flex flex-col gap-3'>
                  <span className='phone:text-xs phone:opacity-60'>Version 1</span>
                  <img src={Version3} alt='lofi ver1' className='h-auto w-full rounded-2xl'/>
                </div>
              </div>
            </div>
          </div>
        </div>


        <hr className='border-[#24303C] opacity-40 mt-6'/>


        {/* final design */}
        <div className='flex flex-col py-16 gap-12'>
          <div className='flex flex-col gap-4'>
            <span className='font-secondary font-semibold text-4xl text-[#24303C]'>Final Designs</span>
            <span className='italic font-secondary font-semibold text-2xl text-[#24303C]'>High-fidelity Designs</span>
            <span className='text-[#393939] text-lg tracking-[0.03em] phone:text-base'>After a few rounds of internal testing, revision and feedbacks, I have come up with the design that delivers a seamless, consistent, and user-centric design solution emphasizing how Nomo Space operates, its products and services, and how the place and the drinks offered comfort to others through the customer’s IG posts.</span>
          </div>

          <div className='flex flex-col gap-4'>
            <span className='font-secondary text-xs text-[#747474] tracking-[0.07em]'>Homepage</span>
            <div className='flex justify-center'>
              <img src={Homepage} alt='homepage' className='h-auto w-[70%] rounded-2xl'/>
            </div>
          </div>

          <div className='flex flex-col gap-12 w-full'>
            <div className='flex flex-col gap-4 w-full'>
              <span className='font-secondary text-xs text-[#747474] tracking-[0.07em]'>Menu Pages</span>
              <div className='flex flex-row phone:flex-col gap-8 w-full'>
                <img src={CoffeMenu} alt='coffee-menu' className='h-auto w-[50%] phone:w-full rounded-2xl'/>
                <img src={DessertMenu} alt='dessert-menu' className='h-auto w-[50%] phone:w-full rounded-2xl'/>
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <span className='font-secondary text-xs text-[#747474] tracking-[0.07em]'>Products View</span>
              <div className='flex flex-row phone:flex-col gap-8'>
                <img src={Coffee} alt='coffee-menu' className='h-auto w-[50%] rounded-2xl phone:w-full'/>
                <img src={Dessert} alt='dessert-menu' className='h-auto w-[50%] rounded-2xl phone:w-full'/>
              </div>
            </div>
          </div>
        </div>

        <hr className='border-[#24303C] opacity-40 mt-6'/>

        {/* conclusion */}
        <div className='flex flex-col gap-8 pt-16 pb-48 px-48 tablet:px-0 phone:px-0'>
          <span className='font-secondary font-semibold text-4xl text-[#24303C]'>Reflection</span>

          <hr className='border-[#24303C] opacity-40 my-6'/>

          <div className='flex flex-col gap-4'>
            <span className='italic font-secondary font-semibold text-2xl text-[#24303C]'>If I have more time...</span>
            <span className='text-[#393939] text-lg tracking-[0.03em] phone:text-base'>I would continue the project from completing the whole initial system features and functionalities to testing the prototype until the second iteration of the designing phase. Because of the time restriction and the scope of the project, I was not able to conduct the user testing and the revisions.</span>
          </div>

          <hr className='border-[#24303C] opacity-40 my-6'/>

          <div className='flex flex-col gap-4'>
            <span className='italic font-secondary font-semibold text-2xl text-[#24303C]'>What I have learned in doing this project?</span>
            <span className='text-[#393939] text-lg tracking-[0.03em] phone:text-base'>In the few weeks of creating this project, I have learned that designing a digital product is not only a one-man-job, it also requires a community that collaborates and constantly communicate in order to deliver a design solution that is user-centric and tailored-specific to the needs of the users.</span>
          </div>

          <hr className='border-[#24303C] opacity-40 my-6'/>

          <div className='flex flex-col gap-4'>
            <span className='italic font-secondary font-semibold text-2xl text-[#24303C]'>What are the challenges I have faced during the curation of this project?</span>
            <span className='text-[#393939] text-lg tracking-[0.03em] phone:text-base'>Since this was my first UI/UX project without any prior experience, I would say that starting the project out is one of the hardest thing since the guidance from the company’s main graphic designer provided are only minimal. However, I have delivered this design solution effectively and successfully during my internship. </span>
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

export default NomoSpaceProject
import Logo from '../../assets/images/logoBlack.png'


function Background() {

  return (
    <div className='z-0 fixed h-screen w-screen bg-purple-400 bg-opacity-0 overscroll-none'>
      <div className='absolute top-0 phone:-top-28 left-7 phone:-left-20 bg-accent w-[350px] h-[350px] rounded-full phone:scale-75  filter blur-[150px] opacity-40 '></div>
      <div className='absolute bottom-22 right-32 phone:bottom-10 phone:right-0 phone:scale-75 bg-accent w-[150px] h-[150px] rounded-full blur-[80px] opacity-40'></div>
      <img src={Logo} alt='logo' className='opacity-[10%] w-[60%] phone:w-[90%] absolute right-28 bottom-48 phone:right-5 phone:bottom-48'/>
    </div>
  )
}

export default Background
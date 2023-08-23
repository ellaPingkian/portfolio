import Logo from '../../assets/images/logoBlack.png'


function Background() {

  return (
    <div className='relative h-screen w-screen bg-purple-400 bg-opacity-20'>
      <div className='absolute top-10 left-7 bg-accent w-[350px] h-[350px] rounded-full blur-[150px] opacity-40 '></div>
      <div className='absolute bottom-0 right-48 bg-accent w-[150px] h-[150px] rounded-full blur-[100px] opacity-60'></div>
      <img src={Logo} alt='logo' className='opacity-[10%] w-[60%] absolute right-28 bottom-24'/>
    </div>
  )
}

export default Background
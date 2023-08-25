import Logo from '../../assets/images/logoBlack.png'


function Background() {

  return (
    <div className='z-0 fixed h-screen w-screen bg-purple-400 bg-opacity-0'>
      <div className='absolute top-0 left-7 bg-accent w-[350px] h-[350px] rounded-full filter blur-[150px] opacity-40 '></div>
      <div className='absolute bottom-20 right-48 bg-accent w-[150px] h-[150px] rounded-full blur-[80px] opacity-40'></div>
      <img src={Logo} alt='logo' className='opacity-[10%] w-[60%] absolute right-28 bottom-48'/>
    </div>
  )
}

export default Background
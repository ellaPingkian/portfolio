// import React from 'react'
import * as Icons from 'iconsax-react'


function BackToTop(props:any) {

  const scroll =  props["scrollPosition"] > 1000 ? true : false

  const handleOnclick = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }


  return (
    <>
    {/* 'z-20 fixed bottom-4 right-7 bg-bg h-12 w-20 rounded-full' */}
      <div className={  scroll === true ? 'z-20 fixed bottom-4 right-7 bg-bg h-12 w-20 rounded-full'  : 'hidden' }>
        <button onClick={handleOnclick} className= 'bg-accent h-full w-full flex flex-col items-center justify-center rounded-full hover:-translate-x-1 hover:-translate-y-1 hover:ease-in-out hover:duration-200 active:translate-x-0 active:translate-y-0'>
          <Icons.ArrowUp2 className='text-white'/>
        </button>
      </div>

    </>
  )
}

export default BackToTop
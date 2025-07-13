import React from 'react'

const Header = () => {
  return (
    <>
    <ul className='fixed top-0 left-1/2 -translate-x-1/2 flex gap-4 justify-center items-center h-[70px] text-white bg-black text-opacity-50 z-[5000]'>
        <a href='#'><li className='hover:text-white'>HOME</li></a>
        <a href='#'><li className='hover:text-white'>PORTFOLIO</li> </a>
        <a href='#'><li className='hover:text-white'>CERTIFICATION</li></a>
        <a href='#'><li className='hover:text-white'>ACADEMICS</li></a>
        <a href='#'><li className='hover:text-white'>CONTACT</li></a>
    </ul>
    </>
  )
}

export default Header
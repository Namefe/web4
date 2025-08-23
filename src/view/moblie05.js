import React from 'react'
import { motion } from "framer-motion"

const Moblie05 = () => {
  return (
    <>
    <section id='mcontact' className='relative w-full h-[90vh] text-white px-3'>
    <div className='w-full h-[200px] flex flex-col items-center justify-start text-2xl text-white'>
        <div className='text-white opacity-50 text-[34px] md:text-[48px] -translate-x-10'>LE<span className='font-gridular'>T</span>'S T<span className='font-gridular'>A</span>LK</div>
        <div className='flex items-center gap-2 translate-x-10'>
            <h2 className='text-white leading-none text-[34px] md:text-[48px]'><span className='font-gridular'>T</span>O AB<span className='font-gridular'>O</span>UT <span className='font-gridular'>M</span>E</h2>
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height='24'  fill="none">
                <path d="M19.7247 16.9837C19.7211 16.7786 19.8001 16.5725 19.9617 16.4109L21.275 15.0976C21.5912 14.7814 21.5912 14.295 21.275 13.9788L20.5233 13.1775L20.0127 12.6713C19.868 12.5278 19.7865 12.3324 19.7865 12.1286L19.786 1.33091C19.786 0.908794 20.1282 0.566582 20.5503 0.566558L23.1069 0.56646C23.529 0.566452 23.8712 0.908646 23.8712 1.33077L23.8714 12.1345C23.8714 12.3347 23.7928 12.527 23.6525 12.6699L22.6922 13.6483L22.3937 13.9788C22.0776 14.295 22.0776 14.7814 22.3937 15.0976L23.7142 16.4181C24.0304 16.7342 24.0304 17.2207 23.7142 17.5368L22.4009 18.8501C22.0848 19.1663 22.0848 19.6527 22.4009 19.9689L23.7629 21.3308C24.079 21.647 24.079 22.1334 23.7629 22.4496L22.4496 23.7629C22.1334 24.079 21.647 24.079 21.3309 23.7629L19.9689 22.4009C19.6528 22.0848 19.1663 22.0848 18.8502 22.4009L17.5369 23.7142C17.2207 24.0304 16.7343 24.0304 16.4182 23.7142L15.0977 22.3937C14.7815 22.0776 14.2951 22.0776 13.9789 22.3937L12.6656 23.5796C12.6016 23.6436 12.5306 23.6947 12.4555 23.7328C12.3333 23.8112 12.1902 23.8538 12.0427 23.8538L1.11887 23.854C0.696749 23.854 0.354548 23.5118 0.354548 23.0897V20.5401C0.354548 20.118 0.696751 19.7758 1.11888 19.7758L12.0486 19.776C12.2459 19.776 12.4355 19.8523 12.5778 19.9888L13.2786 20.6612L13.9789 21.275C14.2951 21.5911 14.7815 21.5911 15.0977 21.275L16.411 19.9617C16.5725 19.8001 16.7784 19.7211 16.9834 19.7247C16.9461 19.6307 16.8895 19.5426 16.8135 19.4666L0.223862 2.87683C-0.0746193 2.57834 -0.0746193 2.0944 0.223862 1.79591L1.79589 0.223864C2.09438 -0.0746211 2.57831 -0.0746217 2.87679 0.223864L19.4664 16.8136C19.5425 16.8897 19.6306 16.9464 19.7247 16.9837Z" fill='currentColor'></path>
            </svg>
        </div>
      </div>
    <div
     className="mb-2 text-[27px] font-bold flex items-center gap-2">
        <span>010-3508-9102</span>
      </div>
      <div
    className="w-screen h-[10px] mt-2"
    style={{
      backgroundImage:
        "repeating-linear-gradient(to right, rgba(255, 255, 255, 0.5) 0px, transparent 2px 8px)"
      }}
    ></div>  

<div className="w-full mt-2 mb-2">
<motion.h2
  className="text-[27px] md:text-[40px] relative inline-block leading-none group z-30"
  initial="rest"
  animate="rest"
  whileHover="hover"
>
  <span className="block transition-opacity duration-200 group-hover:cursor-pointer group-hover:opacity-0">NAME</span>
  <motion.span
    className="pointer-events-none block absolute inset-0 flex gap-[2px] whitespace-nowrap"
    variants={{ rest: { opacity: 0 }, hover: { opacity: 1, transition: { staggerChildren: 0.05 } } }}
  >
    {Array.from("성명철").map((ch, i) => (
      <motion.span key={i} variants={{ rest: { opacity: 0, y: 6 }, hover: { opacity: 1, y: 0 } }}>
        {ch}
      </motion.span>
    ))}
  </motion.span>
</motion.h2>

  <div
    className="w-screen h-[8px] mt-2 pointer-events-none -z-10"
    style={{
      backgroundImage:
        "repeating-linear-gradient(to right, rgba(255, 255, 255, 0.5) 0px, transparent 2px 7px)"
    }}
  />
</div>

  <div className="w-full mt-2 mb-2">
<motion.h2
  className="text-[27px] md:text-[40px] relative inline-block leading-none group z-30"
  initial="rest"
  animate="rest"
  whileHover="hover"
>
  <span className="block transition-opacity duration-200 group-hover:cursor-pointer group-hover:opacity-0">E-MAIL</span>
  <motion.span
    className="pointer-events-none block absolute inset-0 flex gap-[2px] whitespace-nowrap"
    variants={{ rest: { opacity: 0 }, hover: { opacity: 1, transition: { staggerChildren: 0.05 } } }}
  >
    {Array.from("smc9102@naver.com").map((ch, i) => (
      <motion.span key={i} variants={{ rest: { opacity: 0, y: 6 }, hover: { opacity: 1, y: 0 } }}>
        {ch}
      </motion.span>
    ))}
  </motion.span>
</motion.h2>   
  <div
    className="w-screen h-[5px] mt-2"
    style={{
      backgroundImage:
        "repeating-linear-gradient(to right, rgba(255, 255, 255, 0.5) 0px, transparent 2px 6px)"
      }}
    ></div> 
      </div>

  <div className="w-full mt-2 mb-2">
<motion.h2
  className="text-[27px] md:text-[40px] relative inline-block leading-none group z-30"
  initial="rest"
  animate="rest"
  whileHover="hover"
>
  <span className="block transition-opacity duration-200 group-hover:cursor-pointer group-hover:opacity-0">GITHUB</span>
  <motion.span
    className="pointer-events-none block absolute inset-0 flex gap-[2px] whitespace-nowrap"
    variants={{ rest: { opacity: 0 }, hover: { opacity: 1, transition: { staggerChildren: 0.04 } } }}
  >
    {Array.from("https://github.com/Namefe").map((ch, i) => (
      <motion.span key={i} variants={{ rest: { opacity: 0, y: 6 }, hover: { opacity: 1, y: 0 } }}>
        {ch}
      </motion.span>
    ))}
  </motion.span>
</motion.h2>
    <div
    className="w-screen h-[3px] mt-2"
    style={{
      backgroundImage:
        "repeating-linear-gradient(to right, rgba(255, 255, 255, 0.5) 0px, transparent 2px 4px)"
      }}
    ></div>   
    </div>

  <div className="w-full mt-2 mb-2">
<motion.h2
  className="text-[27px] md:text-[40px] relative inline-block leading-none group z-30"
  initial="rest"
  animate="rest"
  whileHover="hover"
>
  <span className="block transition-opacity duration-200 group-hover:cursor-pointer group-hover:opacity-0">MBTI</span>
  <motion.span
    className="pointer-events-none block absolute inset-0 flex gap-[2px] whitespace-nowrap"
    variants={{ rest: { opacity: 0 }, hover: { opacity: 1, transition: { staggerChildren: 0.06 } } }}
  >
    {Array.from("ISTJ").map((ch, i) => (
      <motion.span key={i} variants={{ rest: { opacity: 0, y: 6 }, hover: { opacity: 1, y: 0 } }}>
        {ch}
      </motion.span>
    ))}
  </motion.span>
</motion.h2>
    <div
    className="w-screen h-[1px] mt-2"
    style={{
      backgroundImage:
        "repeating-linear-gradient(to right, rgba(255, 255, 255, 0.5) 0px, transparent 2px 1px)"
      }}
    ></div>  
      </div>

      <div className="flex justify-between text-xs text-gray-400 mt-10">
        <span>Privacy & Cookies Policy</span>
        <span>Myeong Chul © 1999</span>
      </div>
    </section>
    </>
  )
}

export default Moblie05
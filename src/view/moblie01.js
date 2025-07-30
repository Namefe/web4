import React from 'react'

const Moblie = () => {
  return (
    <>
    <section className='relative w-full h-auto text-white'>
      {/*라인 윗줄*/}
      <div className="fixed w-full h-auto inset-0 z-50">
      <div className="top absolute top-0 left-0 w-full flex items-start justify-between">
    <div className="top-left-plus relative w-4 h-4 top-2 left-2">
    <div className="top-left-ver absolute left-1/2 top-0 h-4 w-[1px] bg-white opacity-50 -translate-x-1/2"></div>
    <div className="top-left-col absolute top-1/2 left-0 w-4 h-[1px] bg-white opacity-50 -translate-y-1/2"></div>
    </div>

      <div className="top-right-plus relative w-4 h-4 top-2 right-2  ">
      <div className="top-right-ver absolute right-1/2 top-0 h-4 w-[1px] bg-white opacity-50 -translate-x-1/2"></div>
      <div className="top-right-col absolute top-1/2 right-0 w-4 h-[1px] bg-white opacity-50 -translate-y-1/2"></div>
    </div>
</div>
      </div>
      {/*라인 아랫줄*/}
      <div className="fixed w-full h-auto inset-0 z-50">
      <div className="top absolute bottom-0 left-0 w-full flex items-start justify-between">
    <div className="btm-left-plus relative w-4 h-4 bottom-2 left-2">
    <div className="btm-left-ver absolute left-1/2 top-0 h-4 w-[1px] bg-white opacity-50 -translate-x-1/2"></div>
    <div className="btm-left-col absolute top-1/2 left-0 w-4 h-[1px] bg-white opacity-50 -translate-y-1/2"></div>
    </div>
    
<div>
<svg className="absolute bottom-0 left-0 w-full h-auto" viewBox="0 0 300 30" xmlns="http://www.w3.org/2000/svg">
  <path 
    d="M 20 20 H 100 L 120 0 H 180 L 200 20 H 280"
    stroke="white"
    strokeWidth="0.4"
    fill="none"
  />
</svg>
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
    <div className='flex flex-col flex-none justify-between gap-1'>
    <div className="w-[20px] h-[1px] bg-white opacity-70 inline-block"></div>
    <div className="w-[20px] h-[1px] bg-white opacity-70 inline-block"></div>
    </div>
    <span className="text-white text-xs font-bold">MENU</span>
    
  </div>
</div>

      <div className="btm-right-plus relative w-4 h-4 bottom-2 right-2  ">
      <div className="btm-right-ver absolute right-1/2 top-0 h-4 w-[1px] bg-white opacity-50 -translate-x-1/2"></div>
      <div className="btm-right-col absolute top-1/2 right-0 w-4 h-[1px] bg-white opacity-50 -translate-y-1/2"></div>
    </div>
</div>
      </div>
    </section>
    </>
  )
}

export default Moblie
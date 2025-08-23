import React from 'react'
import { motion } from "framer-motion";


const Moblie03 = () => {
  return (
    <>
    <section id='mcertification' className='relative w-full h-[200vh] overflow-hidden '>
    <div  className='w-full  absolute top-[0%] px-[3vw]'>
    <div className="wave-line flex items-end  w-full h-[50px] bg-black">
        {[...Array(300)].map((_, i) => (
          <motion.div
          key={i}
          className="bg-white w-[2px] flex-shrink-0 opacity-50"
          style={{ marginRight: "5px" }}
          animate={{ height: [10, 20, 10] }} 
          transition={{
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.08, 
          }}
        />
        ))}
      </div>


  {/* AWWWWARDS 섹션 */}
  <div className='relative'>
    <div className='text-white text-[clamp(3rem,8vw,8rem)] text-left pt-10 relative z-10'>
    <motion.div>
  <h2 className="text-[clamp(3rem,8vw,8rem)] text-white ">
    <span className='font-gridular'>C</span>ER
    <span className='font-gridular'>T</span>I
    <span className='font-gridular'>F</span>IC
    <span className='font-gridular'>A</span>TION
  </h2>
</motion.div>    
<div className='absolute right-0 top-14 flex gap-2'>
        {[...Array(2)].map((_, i) => (
          <svg key={i} width='1.5rem' viewBox='0 0 33 32' fill='none'>
            <path d='M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z' fill='white' />
          </svg>
        ))}
      </div>
    </div>

<div class="line1">
<div className='line-flex'>
  <div className='linewrapperleft'>
    <div className='line-divider'></div>
  </div>
  <div className='line-divider line2'></div>
</div>
<div className='line-divider column-5'></div>
</div>

    <div className='grid grid-cols-6 '>
      <div className='col-span-3 flex items-start -translate-y-5 md:-translate-y-5 '>
        <svg width='1.5rem' viewBox='0 0 33 32' fill='none' className='mr-1'>
          <path d='M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z' fill='white' />
        </svg>
        <div className='text-white text-[16px] md:text-[32px] md:leading-none leading-1'>AWWWWARDS</div>
      </div>
      <div className='col-span-3 text-white'>
  <div className='w-full border-b border-b-white/40 py-1'>
    <div className='flex justify-between items-center mt-3 mb-3'>
      <span className='text-[16px] md:text-[32px] break-keep'>GTQ</span>
      <span className='opacity-50 text-[13px]'>2010</span>
    </div>
  </div>

  <div className='w-full border-b border-b-white/40 py-1'>
    <div className='flex justify-between items-center mt-3 mb-3'>
      <span className='text-[16px] md:text-[32px] break-keep'>ITQ</span>
      <span className='opacity-50 text-[13px]'>2010</span>
    </div>
  </div>

  <div className='w-full border-b border-b-white/40 py-1'>
    <div className='flex justify-between items-center mt-3 mb-3'>
      <span className='text-[16px] md:text-[32px] break-keep'>워드프로세서</span>
      <span className='opacity-50 text-[13px]'>2020</span>
    </div>
  </div>

  <div className='w-full border-b border-b-white/40 py-1'>
    <div className='flex justify-between items-center mt-3 mb-3'>
      <span className='text-[16px] md:text-[32px] break-keep'>SMAT(서비스경영자격) 3급</span>
      <span className='opacity-50 text-[13px]'>2023</span>
    </div>
  </div>

  <div className='w-full border-b border-b-white/40 py-1'>
    <div className='flex justify-between items-center mt-3 mb-3'>
      <span className='text-[16px] md:text-[32px] break-keep'>ACP PHOTOSHOP</span>
      <span className='opacity-50 text-[13px]'>2024</span>
    </div>
  </div>

  <div className='w-full border-b border-b-white/40 py-1'>
    <div className='flex justify-between items-center mt-3 mb-3'>
      <span className='text-[16px] md:text-[32px] break-keep'>ACP ILLUSTRATION</span>
      <span className='opacity-50 text-[13px]'>2024</span>
    </div>
  </div>

  <div className='w-full border-b border-b-white/40 py-1'>
    <div className='flex justify-between items-center mt-3 mb-3'>
      <span className='text-[16px] md:text-[32px] break-keep'>SQLD</span>
      <span className='opacity-50 text-[13px]'>2025</span>
    </div>
  </div>

  <div className='w-full'>
    <div className='flex justify-between items-center mt-3 mb-3'>
      <span className='text-[16px] md:text-[32px] break-keep'>웹디자인개발 기능사</span>
      <span className='opacity-50 text-[13px]'>2025</span>
    </div>
  </div>
</div>

    </div>
  </div>

  {/* TITLE 섹션 */}
  <div className='relative -translate-y-5'>
  <div class="line1">
<div className='line-flex'>
  <div className='linewrapperleft'>
    <div className='line-divider'></div>
  </div>
  <div className='line-divider line2'></div>
</div>
<div className='line-divider column-5'></div>
</div>

    <div className='grid grid-cols-6'>
      <div className='col-span-3 flex items-start -translate-y-5 md:-translate-y-5'>
        <svg width='1.5rem' viewBox='0 0 33 32' fill='none' className='mr-1'>
          <path d='M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z' fill='white' />
        </svg>
        <div className='text-white text-[16px] md:text-[32px] md:leading-none leading-1'>TITLE</div>
      </div>
      <div className='col-span-3 text-white'>
        <div className='w-full'>
          <div className='flex justify-between items-center mt-3 mb-3'>
            <span className='text-[16px] md:text-[32px] break-keep'>운전면허 1종 보통</span>
            <span className='opacity-50 text-[13px]'>2019</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* TRAINING 섹션 */}
  <div className='relative -translate-y-10'>
  <div class="line1">
<div className='line-flex'>
  <div className='linewrapperleft'>
    <div className='line-divider'></div>
  </div>
  <div className='line-divider line2'></div>
</div>
<div className='line-divider column-5'></div>
</div>

    <div className='grid grid-cols-6'>
      <div className='col-span-3 flex items-start -translate-y-5 md:-translate-y-5'>
        <svg width='1.5rem' viewBox='0 0 33 32' fill='none' className='mr-1'>
          <path d='M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z' fill='white' />
        </svg>
        <div className='text-white text-[16px] md:text-[32px] md:leading-none leading-1'>TRAINING</div>
      </div>
      <div className='col-span-3 text-white'>
        <div className='w-full '>
          <div className='flex justify-between items-center mt-3 mb-3'>
            <span className='text-[16px] md:text-[32px] break-keep'>SBS 컴퓨터 아카데미</span>
            <span className='opacity-50 text-[13px]'>2024~</span>
          </div>
        </div>
      </div>
    </div>
  </div>
        {/*skill영역 */}

        <div className='relative -translate-y-14'>
        <div class="line1">
<div className='line-flex'>
  <div className='linewrapperleft'>
    <div className='line-divider'></div>
  </div>
  <div className='line-divider line2'></div>
</div>
<div className='line-divider column-5'></div>
</div>

        <div className='grid grid-cols-6 '>
      <div className='col-span-3 flex items-start -translate-y-5 md:-translate-y-5'>
        <svg width='1.5rem' viewBox='0 0 33 32' fill='none' className='mr-1'>
          <path d='M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z' fill='white' />
        </svg>
        <div className='text-white text-[16px] md:text-[32px] md:leading-none leading-1'>SKILL</div>
      </div>
      <div className='col-span-3 text-white'>
        {[
          ['HTML'],
          ['CSS'],
          ['JAVA-SCRIPT'],
          ['J-QUERY'],
          ['PHOTOSHOP'],
          ['ILLUSTRATION'],
          ['GITHUB'],
        ].map(([skill], i, arr) => (
          <div key={i} className='w-full border-b border-b-white/40 py-1'>
            <div className='flex justify-between items-center mt-3 mb-3'>
              <span className='text-[16px] md:text-[32px] break-keep'>{skill}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
</div>
</div>
    </section>
    </>
  )
}

export default Moblie03
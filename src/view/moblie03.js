import React from 'react'
import { motion } from "framer-motion";


const Moblie03 = () => {
  return (
    <>
    <section className='relative w-full h-[300vh] overflow-hidden'>
    <div  className='w-full  absolute top-[0%] px-[3vw]'>
    <div className="wave-line flex items-end  w-full h-[50px] bg-black">
        {[...Array(300)].map((_, i) => (
          <motion.div
          key={i}
          className="bg-white w-[2px] flex-shrink-0 opacity-70"
          style={{ marginRight: "5px" }}
          animate={{ height: [5, 10, 5] }} 
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
<div className='absolute right-0 top-0 flex gap-2'>
        {[...Array(2)].map((_, i) => (
          <svg key={i} width='1.5rem' viewBox='0 0 33 32' fill='none'>
            <path d='M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z' fill='white' />
          </svg>
        ))}
      </div>
    </div>

<div class="grid-line grid-layout">
<div className='award-line_flex'>
  <div className='line-wrapper-left cc--awards'>
    <div className='line-divider'></div>
  </div>
  <div className='line-divider cc--slanted'></div>
</div>
<div className='line-divider column-5'></div>
</div>

    <div className='grid grid-cols-6 '>
      <div className='col-span-3 flex items-start'>
        <svg width='1.5rem' viewBox='0 0 33 32' fill='none' className='mr-1'>
          <path d='M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z' fill='white' />
        </svg>
        <div className='text-white text-[clamp(1.25rem,2vw,2rem)] leading-none'>AWWWWARDS</div>
      </div>
      <div className='col-span-3 text-white'>
        {[
          ['GTQ', '2010'],
          ['ITQ', '2010'],
          ['워드프로세서', '2020'],
          ['SMAT 3급', '2023'],
          ['ACP PHOTOSHOP', '2024'],
          ['ACP ILLUSTRATION', '2024'],
          ['SQLD', '2025'],
          ['웹디자인 기능사', '2025']
        ].map(([label, year], i, arr) => (
          <div key={i} className='w-full '>
            <div className='flex justify-between items-center'>
              <span className='text-[clamp(1.5rem,4vw,3.5rem)] break-keep'>{label}</span>
              <span className='opacity-50 text-[clamp(1rem,2vw,1.2rem)]'>{year}</span>
            </div>
         <div className='line-divider'></div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* TITLE 섹션 */}
  <div className='relative'>
<div class="grid-line grid-layout">
<div className='award-line_flex'>
  <div className='line-wrapper-left cc--awards'>
    <div className='line-divider'></div>
  </div>
  <div className='line-divider cc--slanted'></div>
</div>
<div className='line-divider column-5'></div>
</div>
    <div className='grid grid-cols-6'>
      <div className='col-span-3 flex items-start'>
        <svg width='1.5rem' viewBox='0 0 33 32' fill='none' className='mr-1'>
          <path d='M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z' fill='white' />
        </svg>
        <div className='text-white text-[clamp(1.25rem,2vw,2rem)] leading-none'>TITLE</div>
      </div>
      <div className='col-span-3 text-white'>
        <div className='w-full'>
          <div className='flex justify-between items-center'>
            <span className='text-[clamp(1.5rem,4vw,3.5rem)] break-keep'>운전면허 1종 보통</span>
            <span className='opacity-50 text-[clamp(1rem,2vw,1.2rem)]'>2019</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* TRAINING 섹션 */}
  <div className='relative'>
<div class="grid-line grid-layout">
<div className='award-line_flex'>
<div className='line-wrapper-left cc--awards'>
<div className='line-divider'>
</div>
  </div>
  <div className='line-divider cc--slanted'></div>
</div>
<div className='line-divider column-5'></div>
</div>
    <div className='grid grid-cols-6'>
      <div className='col-span-3 flex items-start'>
        <svg width='1.5rem' viewBox='0 0 33 32' fill='none' className='mr-1'>
          <path d='M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z' fill='white' />
        </svg>
        <div className='text-white text-[clamp(1.25rem,2vw,2rem)] leading-none'>TRAINING</div>
      </div>
      <div className='col-span-3 text-white'>
        <div className='w-full '>
          <div className='flex justify-between items-center'>
            <span className='text-[clamp(1.5rem,4vw,3.5rem)] break-keep'>SBS 컴퓨터 아카데미</span>
            <span className='opacity-50 text-[clamp(1rem,2vw,1.2rem)]'>2024~</span>
          </div>
        </div>
      </div>
    </div>
  </div>
        {/*skill영역 */}

        <div className='relative'>
<div class="grid-line grid-layout">
<div className='award-line_flex'>
<div className='line-wrapper-left cc--awards'>
<div className='line-divider'>
</div>
  </div>
  <div className='line-divider cc--slanted'></div>
</div>
<div className='line-divider column-5'></div>
</div>
        <div className='grid grid-cols-6 '>
      <div className='col-span-3 flex items-start'>
        <svg width='1.5rem' viewBox='0 0 33 32' fill='none' className='mr-1'>
          <path d='M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z' fill='white' />
        </svg>
        <div className='text-white text-[clamp(1.25rem,2vw,2rem)] leading-none'>SKILL</div>
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
          <div key={i} className='w-full '>
            <div className='flex justify-between items-center'>
              <span className='text-[clamp(1.5rem,4vw,3.5rem)] break-keep'>{skill}</span>
            </div>
    <div className='line-divider'></div>
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
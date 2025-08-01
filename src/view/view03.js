import { useScroll } from 'framer-motion';
import React, { useRef } from 'react'
import {useTransform,motion, useMotionTemplate } from 'framer-motion';


const View03 = () => {

const imageRef = useRef(null);
const { scrollYProgress: imageProgress } = useScroll({
  target: imageRef,
  offset: ["start end", "end start"],
});

const z1 = useTransform(imageProgress, [0.00, 0.15, 0.30], [-800, 0, 2000]);
const scale1 = useTransform(imageProgress, [0.00, 0.15, 0.30], [0.3, 1.2, 4]);
const opacity1 = useTransform(imageProgress, [0.00, 0.05, 0.10, ], [0, 1, 1, ]);

const z2 = useTransform(imageProgress, [0.10, 0.25, 0.40], [-700, 0, 2200]);
const scale2 = useTransform(imageProgress, [0.10, 0.25, 0.40], [0.3, 1.3, 4.2]);
const opacity2 = useTransform(imageProgress, [0.08, 0.13, 0.25, ], [0, 1, 1, ]);

const z3 = useTransform(imageProgress, [0.20, 0.35, 0.50], [-900, 0, 2400]);
const scale3 = useTransform(imageProgress, [0.20, 0.35, 0.50], [0.3, 1.4, 4.5]);
const opacity3 = useTransform(imageProgress, [0.18, 0.23, 0.35, ], [0, 1, 1, ]);

const nextOpacity = useTransform(imageProgress, [0.4, 0.55], [0, 1]);
const nextScale = useTransform(imageProgress, [0.4, 0.55], [0.6, 1]);
const blurValue = useTransform(imageProgress, [0.4, 0.53], [60, 0]);
const blurStyle = useMotionTemplate`blur(${blurValue}px)`;







  return (
    <>
    <section ref={imageRef} className="relative  w-full h-[1000vh] z-50">
    <div className="pointer-events-none">
    <div className="fixed top-0 left-0 w-full h-screen z-40 overflow-visible pointer-events-none"
         style={{ perspective: "1200px", transformStyle: "preserve-3d" }}>
      {/* 이미지 1 */}
      <motion.div
  className="group relative absolute top-[30%] left-[20%] w-[250px] flex flex-col items-center pointer-events-auto"
  style={{
    transform: useMotionTemplate`translateZ(${z1}px) scale(${scale1})`,
    opacity: opacity1,
    transformOrigin: "center",
  }}
>
  <a href="#" className="relative w-full">
    <div className="w-full">
      <img
        src={`${process.env.PUBLIC_URL}/netmable.png`}
        className="w-full block pointer-events-auto"
        onMouseMove={(e) => {
          const blur = e.currentTarget.querySelector(".blur-circle");
          if (blur) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            blur.style.left = `${x}px`;
            blur.style.top = `${y}px`;
          }
        }}
      />
    </div>

    <div className="relative mt-3 flex flex-col items-start z-10">
  <div className="text-white text-sm font-extralight tracking-wide opacity-40 group-hover:opacity-100 transition-opacity duration-300">
    Netmarble
  </div>

 <div className="flex gap-[2px]">
    {"NETMARBLEGAMES".split("").map((char, i) => (
      <motion.div
        key={i}
        className="text-white font-bold"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: [0, 1],
          y: [10, 0]
        }}
        exit={{
          opacity: 0,
          y: 10
        }}
        transition={{
          delay: i * 0.03,
          duration: 0.3,
          ease: "easeOut"
        }}
        whileHover={{
          opacity: 1,
          y: 0
        }}
      >
        {char}
      </motion.div>
    ))}
  </div>
</div>

    {[
      { className: "bottom-[-8px] left-[-8px]", path: "M7 6V20H21", delay: 0 },
      { className: "bottom-[-8px] right-[-8px]", path: "M20 6V20H6", delay: 0.05 },
      { className: "top-[-15px] left-[-10px]", path: "M7 21V7H21", delay: 0.1 },
      { className: "top-[-15px] right-[-10px]", path: "M20 21V7H6", delay: 0.15 },
    ].map((item, i) => (
      <motion.svg
        key={i}
        className={`absolute ${item.className} w-[20px] h-[20px] text-white opacity-0 group-hover:opacity-100  transition-all duration-500`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        style={{ zIndex: 20 }}
      >
        <path d={item.path} strokeWidth="1.5" />
      </motion.svg>
    ))}
  </a>
</motion.div>



{/* 이미지 2 */}
<motion.div
  className="group relative absolute top-[20%] left-1/2 w-[250px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-auto"
  style={{
    transform: useMotionTemplate`translateZ(${z2}px) scale(${scale2})`,
    opacity: opacity2,
    transformOrigin: "center",
  }}
>
  <a href="#" className="relative w-full">
    <div className="w-full relative">
      <img
        src={`${process.env.PUBLIC_URL}/netmable.png`}
        className="w-full block pointer-events-auto"
        onMouseMove={(e) => {
          const blurImg = e.currentTarget.parentNode.querySelector(".blur-img");
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left - 30;
          const y = e.clientY - rect.top - 30;
          blurImg.style.WebkitMaskPosition = `${x}px ${y}px`;
          blurImg.style.maskPosition = `${x}px ${y}px`;
          blurImg.style.opacity = "1";
        }}
        onMouseLeave={(e) => {
          const blurImg = e.currentTarget.parentNode.querySelector(".blur-img");
          blurImg.style.opacity = "0";
        }}
      />

      <img
        src={`${process.env.PUBLIC_URL}/netmable.png`}
        className="blur-img w-full absolute top-0 left-0 pointer-events-none z-20"
        style={{
          filter: "blur(8px)",
          opacity: 0,
          transition: "opacity 0.3s ease, mask-position 0.1s ease",
          WebkitMaskImage:
            "radial-gradient(circle 60px at center, black 100%, transparent 100%)",
          maskImage:
            "radial-gradient(circle 60px at center, black 100%, transparent 100%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
    </div>

    <div className="relative mt-3 flex flex-col items-start z-10">
  <div className="text-white text-sm font-extralight tracking-wide opacity-40 group-hover:opacity-100 transition-opacity duration-300">
        Netmarble
      </div>

      <div className="flex gap-[2px]">
        {"NETMARBLEGAMES".split("").map((char, i) => (
          <motion.div
            key={i}
            className="text-white font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1], y: [10, 0] }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
              delay: i * 0.03,
              duration: 0.3,
              ease: "easeOut",
            }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            {char}
          </motion.div>
        ))}
      </div>
    </div>

    {[
      { className: "bottom-[-8px] left-[-8px]", path: "M7 6V20H21", delay: 0 },
      { className: "bottom-[-8px] right-[-8px]", path: "M20 6V20H6", delay: 0.05 },
      { className: "top-[-15px] left-[-10px]", path: "M7 21V7H21", delay: 0.1 },
      { className: "top-[-15px] right-[-10px]", path: "M20 21V7H6", delay: 0.15 },
    ].map((item, i) => (
      <motion.svg
        key={i}
        className={`absolute ${item.className} w-[20px] h-[20px] text-white opacity-0 group-hover:opacity-100 transition-all duration-500`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        style={{ zIndex: 20 }}
      >
        <path d={item.path} strokeWidth="1.5" />
      </motion.svg>
    ))}
  </a>
</motion.div>





{/* 이미지 3 */}
<motion.div
  className="group relative absolute top-[40%] left-[75%] w-[250px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-auto"
  style={{
    transform: useMotionTemplate`translateZ(${z3}px) scale(${scale3})`,
    opacity: opacity3,
    transformOrigin: "center",
  }}
>
  <a href="#" className="relative w-full">
    <div className="w-full">
      <img
        src={`${process.env.PUBLIC_URL}/netmable.png`}
        className="w-full block pointer-events-auto"
        onMouseMove={(e) => {
          const blur = e.currentTarget.querySelector(".blur-circle");
          if (blur) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            blur.style.left = `${x}px`;
            blur.style.top = `${y}px`;
          }
        }}
      />
    </div>

    <div className="relative mt-3 flex flex-col items-start z-10">
  <div className="text-white text-sm font-extralight tracking-wide opacity-40 group-hover:opacity-100 transition-opacity duration-300">
        Netmarble
      </div>

      <div className="flex gap-[2px]">
        {"NETMARBLEGAMES".split("").map((char, i) => (
          <motion.div
            key={i}
            className="text-white font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1], y: [10, 0] }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
              delay: i * 0.03,
              duration: 0.3,
              ease: "easeOut",
            }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            {char}
          </motion.div>
        ))}
      </div>
    </div>

    {[
      { className: "bottom-[-8px] left-[-8px]", path: "M7 6V20H21", delay: 0 },
      { className: "bottom-[-8px] right-[-8px]", path: "M20 6V20H6", delay: 0.05 },
      { className: "top-[-15px] left-[-10px]", path: "M7 21V7H21", delay: 0.1 },
      { className: "top-[-15px] right-[-10px]", path: "M20 21V7H6", delay: 0.15 },
    ].map((item, i) => (
      <motion.svg
        key={i}
        className={`absolute ${item.className} w-[20px] h-[20px] text-white opacity-0 group-hover:opacity-100 transition-all duration-500`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        style={{ zIndex: 20 }}
      >
        <path d={item.path} strokeWidth="1.5" />
      </motion.svg>
    ))}
  </a>
</motion.div>

    </div>
  </div>



      <motion.div   style={{opacity: nextOpacity, scale: nextScale,}} className='w-full  absolute top-[50%] px-[3vw]'>
      <div   
      className="wave-line flex items-end gap-[5px] w-full h-[10px]">
  {[...Array(300)].map((_, i) => (
    <motion.div
      key={i}
      className="bg-white w-[1px] origin-bottom opacity-50"
      animate={{
        height: [5, 8, 5], 
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        delay: i * 0.05,
        ease: "easeInOut",
      }}
    />
  ))}
</div>


  {/* AWWWWARDS 섹션 */}
  <div className='relative'>
    <div className='text-white text-[clamp(3rem,8vw,8rem)] text-left pt-10 relative z-10'>
    <motion.div
  style={{filter: blurStyle }}>
  <h2 className="text-[clamp(3rem,8vw,8rem)] text-white font-semibold">
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
<div>
<div class="grid-line grid-layout">
<div className='award-line_flex'>
  <div className='line-wrapper'>
    <div className='line-divider'></div>
  </div>
  <div className='line-divider cc--slanted'></div>
</div>
<div className='line-divider column-5'></div>
</div>



    <div class="grid grid-cols-6 w-full">
  <div class="col-span-3">
    <div class="flex items-start mt-4">
      <svg width="1.5rem" viewBox="0 0 33 32" fill="none" class="mr-4">
        <path d="M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z" fill="white" />
      </svg>
      <div class="text-white text-[clamp(1.25rem,2vw,2rem)] leading-none">AWWWWARDS</div>
    </div>
  </div>
  <div class="col-span-3 text-white">
    <div class="space-y-4">
      <div class="w-full">
        <div class="flex justify-between items-center">
          <span class="text-[32px] leading-loose break-keep">GTQ</span>
          <span class="opacity-50 text-[clamp(1rem,2vw,1.2rem)]">2010</span>
        </div>
        <div className='line-divider'></div>
      </div>
      <div class="w-full">
        <div class="flex justify-between items-center">
          <span class="text-[32px] leading-loose break-keep">ITQ</span>
          <span class="opacity-50 text-[clamp(1rem,2vw,1.2rem)]">2010</span>
        </div>
        <div className='line-divider'></div>
      </div>
      <div class="w-full">
        <div class="flex justify-between items-center">
          <span class="text-[32px] leading-loose break-keep">워드프로세서</span>
          <span class="opacity-50 text-[clamp(1rem,2vw,1.2rem)]">2020</span>
        </div>
        <div className='line-divider'></div>
        </div>
      <div class="w-full">
        <div class="flex justify-between items-center">
          <span class="text-[32px] leading-loose break-keep">SMAT 3급</span>
          <span class="opacity-50 text-[clamp(1rem,2vw,1.2rem)]">2023</span>
        </div>
        <div className='line-divider'></div>
        </div>
      <div class="w-full">
        <div class="flex justify-between items-center">
          <span class="text-[32px] leading-loose break-keep">ACP PHOTOSHOP</span>
          <span class="opacity-50 text-[clamp(1rem,2vw,1.2rem)]">2024</span>
        </div>
        <div className='line-divider'></div>
        </div>
      <div class="w-full">
        <div class="flex justify-between items-center">
          <span class="text-[32px] leading-loose break-keep">ACP ILLUSTRATION</span>
          <span class="opacity-50 text-[clamp(1rem,2vw,1.2rem)]">2024</span>
        </div>
        <div className='line-divider'></div>
        </div>
      <div class="w-full">
        <div class="flex justify-between items-center">
          <span class="text-[32px] leading-loose break-keep">SQLD</span>
          <span class="opacity-50 text-[clamp(1rem,2vw,1.2rem)]">2025</span>
        </div>
        <div className='line-divider'></div>
        </div>
      <div class="w-full">
        <div class="flex justify-between items-center">
          <span class="text-[32px] leading-loose break-keep">웹디자인 기능사</span>
          <span class="opacity-50 text-[clamp(1rem,2vw,1.2rem)]">2025</span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

  </div>

  {/* TITLE 섹션 */}
  <div className='relative top-[-20px]'>
  <div class="grid-line grid-layout">
<div className='award-line_flex'>
  <div className='line-wrapper'>
    <div className='line-divider'></div>
  </div>
  <div className='line-divider cc--slanted'></div>
</div>
<div className='line-divider column-5'></div>
</div>
    <div className='grid grid-cols-6'>
      <div className='col-span-3 flex items-start'>
        <svg width='1.5rem' viewBox='0 0 33 32' fill='none' className='mr-4'>
          <path d='M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z' fill='white' />
        </svg>
        <div className='text-white text-[clamp(1.25rem,2vw,2rem)] leading-none'>TITLE</div>
      </div>
      <div className='col-span-3 text-white'>
        <div className='w-full'>
          <div className='flex justify-between items-center'>
            <span className='text-[32px] leading-loose break-keep'>운전면허 1종 보통</span>
            <span className='opacity-50 text-[clamp(1rem,2vw,1.2rem)]'>2019</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* TRAINING 섹션 */}
  <div className='relative top-[-20px]'>
  <div class="grid-line grid-layout">
<div className='award-line_flex'>
  <div className='line-wrapper'>
    <div className='line-divider'></div>
  </div>
  <div className='line-divider cc--slanted'></div>
</div>
<div className='line-divider column-5'></div>
</div>
    <div className='grid grid-cols-6'>
      <div className='col-span-3 flex items-start'>
        <svg width='1.5rem' viewBox='0 0 33 32' fill='none' className='mr-4'>
          <path d='M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z' fill='white' />
        </svg>
        <div className='text-white text-[clamp(1.25rem,2vw,2rem)] leading-none'>TRAINING</div>
      </div>
      <div className='col-span-3 text-white'>
        <div className='w-full '>
          <div className='flex justify-between items-center'>
            <span className='text-[32px] leading-loose break-keep'>SBS 컴퓨터 아카데미</span>
            <span className='opacity-50 text-[clamp(1rem,2vw,1.2rem)]'>2024~</span>
          </div>
        </div>
      </div>
    </div>
  </div>
        {/*skill영역 */}

        <div className='relative top-[-20px]'>
        <div class="grid-line grid-layout">
<div className='award-line_flex'>
  <div className='line-wrapper'>
    <div className='line-divider'></div>
  </div>
  <div className='line-divider cc--slanted'></div>
</div>
<div className='line-divider column-5'></div>
</div>
        <div className='grid grid-cols-6 '>
      <div className='col-span-3 flex items-start'>
        <svg width='1.5rem' viewBox='0 0 33 32' fill='none' className='mr-4'>
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
              <span className='text-[32px] leading-loose break-keep'>{skill}</span>
            </div>
            <div className='line-divider'></div>
            </div>
        ))}
      </div>
    </div>
</div>
</motion.div>
</section>
    </>
  )
}

export default View03



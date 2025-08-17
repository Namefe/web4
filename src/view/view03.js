import { useScroll } from 'framer-motion';
import React, { useRef,useState } from 'react'
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

const z3 = useTransform(imageProgress, [0.30, 0.35, 0.40], [-900, 0, 2200]);
const scale3 = useTransform(imageProgress, [0.20, 0.35, 0.38], [0.3, 1.4, 4.5]);
const opacity3 = useTransform(imageProgress, [0.18, 0.23, 0.35 ], [0, 1, 1, ]);

const nextOpacity = useTransform(imageProgress, [0.4, 0.5], [0, 1]);
const nextScale = useTransform(imageProgress, [0.4, 0.5], [0.6, 1]);
const blurValue = useTransform(imageProgress, [0.4, 0.53], [60, 0]);
const blurStyle = useMotionTemplate`blur(${blurValue}px)`;

const [hovered, setHovered] = useState(false);
const [hovered2, setHovered2] = useState(false);
const [hovered3, setHovered3] = useState(false);

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, staggerDirection: 1 } },
  hide: { transition: { staggerChildren: 0.06, staggerDirection: -1 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  hide: { opacity: 0, y: 10, transition: { duration: 0.2, ease: "easeIn" } },
};


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
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
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
            Html + CSS + Js
          </div>

          <motion.div
            className="inline-flex gap-[2px] -mt-1"
            variants={container}
            initial="hidden"
            animate={hovered ? "show" : "hide"}
          >
            {"NETMARBLEGAMES".split("").map((char, i) => (
              <motion.span key={i} className="text-white font-bold" variants={item}>
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {[
          { className: "bottom-[-8px] left-[-16px]", path: "M7 6V20H21", delay: 0 },
          { className: "bottom-[-8px] right-[-16px]", path: "M20 6V20H6", delay: 0.05 },
          { className: "top-[-15px] left-[-16px]", path: "M7 21V7H21", delay: 0.1 },
          { className: "top-[-15px] right-[-16px]", path: "M20 21V7H6", delay: 0.15 },
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



{/* 이미지 2 */}
  <motion.div
        className="group relative absolute top-[20%] left-1/2 w-[250px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-auto"
        style={{ transform: useMotionTemplate`translateZ(${z2}px) scale(${scale2})`, opacity: opacity2, transformOrigin: "center" }}
        onHoverStart={() => setHovered2(true)}
        onHoverEnd={() => setHovered2(false)}
      >
        <a href="#" className="relative w-full">
          <div className="w-full relative">
            <img
              src={`${process.env.PUBLIC_URL}/SM.jpg`}
              className="w-full block pointer-events-auto"
            />
            <img
              src={`${process.env.PUBLIC_URL}/SM.jpg`}
              className="blur-img w-full absolute top-0 left-0 pointer-events-none z-20"
            
            />
          </div>

          <div className="relative mt-3 flex flex-col items-start z-10 ">
            <div className="text-white text-sm font-extralight tracking-wide opacity-40 group-hover:opacity-100 transition-opacity duration-300">REACT</div>
            <motion.div className="inline-flex gap-[2px] -mt-1" variants={container} initial="hidden" animate={hovered2 ? "show" : "hide"}>
              {"SM EMTERTAINMENT".split("").map((char, i) => (
                <motion.span key={i} className="text-white font-bold" variants={item}>
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {[
            { className: "bottom-[-8px] left-[-16px]", path: "M7 6V20H21", delay: 0 },
            { className: "bottom-[-8px] right-[-16px]", path: "M20 6V20H6", delay: 0.05 },
            { className: "top-[-15px] left-[-16px]", path: "M7 21V7H21", delay: 0.1 },
            { className: "top-[-15px] right-[-16px]", path: "M20 21V7H6", delay: 0.15 },
          ].map((it, i) => (
            <motion.svg key={i} className={`absolute ${it.className} w-[20px] h-[20px] text-white opacity-0 group-hover:opacity-100 transition-all duration-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ zIndex: 20 }}>
              <path d={it.path} strokeWidth="1.5" />
            </motion.svg>
          ))}
        </a>
      </motion.div>





{/* 이미지 3 */}
  <motion.div
         transition={{ delay: 5, duration: 0.4, ease: "easeOut" }}
        className="group relative absolute top-[15%] left-[25%] w-[250px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-auto"
        style={{ transform: useMotionTemplate`translateZ(${z3}px) scale(${scale3})`, opacity: opacity3, transformOrigin: "center" }}
        onHoverStart={() => setHovered3(true)}
        onHoverEnd={() => setHovered3(false)}
      >
        <a href="#" className="relative w-full">
          <div className="w-full">
            <img src={`${process.env.PUBLIC_URL}/trumacenter.png`} className="w-full block pointer-events-auto" />
          </div>

          <div className="relative mt-3 flex flex-col items-start z-10">
            <div className="text-white text-sm font-extralight tracking-wide opacity-40 group-hover:opacity-100 transition-opacity duration-300">REACT</div>
            <motion.div className="inline-flex gap-[2px]" variants={container} initial="hidden" animate={hovered3 ? "show" : "hide"}>
              {"중증외상센터".split("").map((char, i) => (
                <motion.span key={i} className="text-white font-bold -ml-0.5" variants={item}>
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {[
            { className: "bottom-[-8px] left-[-16px]", path: "M7 6V20H21", delay: 0 },
            { className: "bottom-[-8px] right-[-16px]", path: "M20 6V20H6", delay: 0.05 },
            { className: "top-[-15px] left-[-16px]", path: "M7 21V7H21", delay: 0.1 },
            { className: "top-[-15px] right-[-16px]", path: "M20 21V7H6", delay: 0.15 },
          ].map((it, i) => (
            <motion.svg key={i} className={`absolute ${it.className} w-[20px] h-[20px] text-white opacity-0 group-hover:opacity-100 transition-all duration-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ zIndex: 20 }}>
              <path d={it.path} strokeWidth="1.5" />
            </motion.svg>
          ))}
        </a>
      </motion.div>

    </div>
  </div>



      <motion.div id="certification" style={{opacity: nextOpacity, scale: nextScale,}} className='w-full  absolute top-[50%] px-[3vw]'>
      <div   
      className="pt-[100px] scroll-mt-[0px] wave-line flex items-end gap-[5px] w-full h-[10px]">
  {[...Array(300)].map((_, i) => (
    <motion.div
      key={i}
      className="bg-white w-[1px] origin-bottom opacity-50 shrink-0"
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
  <motion.div  className='relative' style={{filter: blurStyle }}>
    <div className='text-white text-[clamp(3rem,8vw,8rem)] text-left pt-10 relative z-10'>
      <div>
          <h2 className="text-[clamp(3rem,8vw,8rem)] text-white font-semibold">
            <span className='font-gridular'>C</span>ER
            <span className='font-gridular'>T</span>I
            <span className='font-gridular'>F</span>IC
            <span className='font-gridular'>A</span>TION
          </h2>
    </div>    
<div className='absolute right-0 top-0 flex gap-2'>
        {[...Array(2)].map((_, i) => (
          <svg key={i} width='1.5rem' viewBox='0 0 33 32' fill='none'>
            <path d='M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z' fill='white' />
          </svg>
        ))}
      </div>
    </div>
<div>
  <div class="line1">
<div className='line-flex'>
  <div className='linewrapperleft'>
    <div className='line-divider'></div>
  </div>
  <div className='line-divider line2'></div>
</div>
<div className='line-divider column-5'></div>
</div>



    <div class="grid grid-cols-6 w-full">
  <div class="col-span-3">
    <div class="flex items-start mt-4 -translate-y-8">
      <svg width="1.5rem" viewBox="0 0 33 32" fill="none" class="mr-4">
        <path d="M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z" fill="white" />
      </svg>
      <div class="text-white text-[clamp(1.25rem,2vw,2rem)] leading-none">AWWWWARDS</div>
    </div>
  </div>
  <div class="col-span-3 text-white">
    <div class="">
      <div class="w-full border-b border-b-white/40 py-2">
        <div class="flex justify-between items-center">
          <span class="text-[32px] leading-loose break-keep">GTQ</span>
          <span class="opacity-50 text-[clamp(1rem,2vw,1.2rem)]">2010</span>
        </div>
      </div>
      <div class="w-full border-b border-b-white/40 py-2">
        <div class="flex justify-between items-center">
          <span class="text-[32px] leading-loose break-keep">ITQ</span>
          <span class="opacity-50 text-[clamp(1rem,2vw,1.2rem)]">2010</span>
        </div>
      </div>
      <div class="w-full border-b border-b-white/40 py-2">
        <div class="flex justify-between items-center">
          <span class="text-[32px] leading-loose break-keep">워드프로세서</span>
          <span class="opacity-50 text-[clamp(1rem,2vw,1.2rem)]">2020</span>
        </div>
        </div>
      <div class="w-full border-b border-b-white/40 py-2">
        <div class="flex justify-between items-center">
          <span class="text-[32px] leading-loose break-keep">SMAT 3급</span>
          <span class="opacity-50 text-[clamp(1rem,2vw,1.2rem)]">2023</span>
        </div>
        </div>
      <div class="w-full border-b border-b-white/40 py-2">
        <div class="flex justify-between items-center">
          <span class="text-[32px] leading-loose break-keep">ACP PHOTOSHOP</span>
          <span class="opacity-50 text-[clamp(1rem,2vw,1.2rem)]">2024</span>
        </div>
        </div>
      <div class="w-full border-b border-b-white/40 py-2">
        <div class="flex justify-between items-center">
          <span class="text-[32px] leading-loose break-keep">ACP ILLUSTRATION</span>
          <span class="opacity-50 text-[clamp(1rem,2vw,1.2rem)]">2024</span>
        </div>
        </div>
      <div class="w-full border-b border-b-white/40 py-2">
        <div class="flex justify-between items-center">
          <span class="text-[32px] leading-loose break-keep">SQLD</span>
          <span class="opacity-50 text-[clamp(1rem,2vw,1.2rem)]">2025</span>
        </div>
        </div>
      <div class="w-full pt-2">
        <div class="flex justify-between items-center">
          <span class="text-[32px] leading-loose break-keep">웹디자인개발 기능사</span>
          <span class="opacity-50 text-[clamp(1rem,2vw,1.2rem)]">2025</span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

  </motion.div>

  {/* TITLE 섹션 */}
  <div className='relative top-[-20px]'>
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
      <div className='col-span-3 flex items-start -translate-y-8'>
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
  <div className='relative top-[-40px]'>
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
      <div className='col-span-3 flex items-start -translate-y-8'>
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

        <div className='relative top-[-60px]'>
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
      <div className='col-span-3 flex items-start -translate-y-8'>
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
          <div key={i} className='w-full border-b border-b-white/40 py-2'>
            <div className='flex justify-between items-center'>
              <span className='text-[32px] leading-loose break-keep'>{skill}</span>
            </div>
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



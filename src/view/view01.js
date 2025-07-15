import React, { useEffect, useState ,useRef} from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import '../App.css'; 

const View01 = () => {
        const [time, setTime] = useState(new Date());
        const targetRef = useRef(null);
        const { scrollYProgress } = useScroll({
          target: targetRef,
          offset: ["start end", "end start"], 
        });
const opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 1, 0]);

const lineopacity = useTransform(scrollYProgress, [0,0.5,0.6],[1,0,1])



const yF = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [-40, 0, 40]);
const yA = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [30, 0, -30]);
const yI = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [-20, 0, 20]);
const yL = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [25, 0, -25]);
const ySpace = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [10, 0, -10]);
const yF2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [-30, 0, 30]);
const yA2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [20, 0, -20]);
const yS = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [-15, 0, 15]);
const yT = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [35, 0, -35]);

const yL2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [-30, 0, 30]);
const yE = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [20, 0, -20]);
const yA3 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [-25, 0, 25]);
const yR2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [15, 0, -15]);
const yN2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [-20, 0, 20]);
const ySpace2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [10, 0, -10]);
const yF3 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [-35, 0, 35]);
const yA4 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [25, 0, -25]);
const yS2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [-15, 0, 15]);
const yT2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [20, 0, -20]);
const yE2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [-30, 0, 30]);
const yR3 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [10, 0, -10]);


const opacityDev = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [0, 1, 0]);

// FRONT
const yFrontF = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [-40, 0, 40]);
const yFrontR = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [30, 0, -30]);
const yFrontO = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [-20, 0, 20]);
const yFrontN = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [25, 0, -25]);
const yFrontT = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [10, 0, -10]);
const yFrontSpace = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [5, 0, -5]);

// END
const yEndE = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [-30, 0, 30]);
const yEndN = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [20, 0, -20]);
const yEndD = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [-15, 0, 15]);
const yEndSpace = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [5, 0, -5]);

// DEVELOPER
const yDevD = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [35, 0, -35]);
const yDevE = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [-25, 0, 25]);
const yDevV = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [15, 0, -15]);
const yDevE2 = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [-20, 0, 20]);
const yDevL = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [10, 0, -10]);
const yDevO = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [-30, 0, 30]);
const yDevP = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [20, 0, -20]);
const yDevE3 = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [-15, 0, 15]);
const yDevR = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [5, 0, -5]);






      
        useEffect(() => {
          const timer = setInterval(() => {
            setTime(new Date());
          }, 1000);
      
          return () => clearInterval(timer);
        }, []);
      
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        const seconds = time.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
    

  return (
    <section ref={targetRef} className='bg-black w-full h-[3000vh] relative '>
      {/* local time & 좌표 */}
        <div>
            <div  className='text-[#f5f5f5] text-opacity-50 '>
                <div className='fixed  top-10 left-10 inline-block text-[16px]'>ANYANG    37°23′42.7″N    126°56′44.3″E</div>
                <div className="fixed top-10 right-10 text-xl font-light text-center inline-block">
                 Local Time : {hours}:{minutes}:{seconds}({hours}:{minutes}{ampm})
                </div>           
            </div>

      {/* line & 메뉴 바 */}
<motion.div style={{opacity: lineopacity}} className="fixed inset-0  z-50">
  <div className="top absolute top-0 left-0 w-full flex items-start">

    <div className="top-left-plus relative w-4 h-4 ml-2 mt-2">
      <div className="top-left-ver absolute left-1/2 top-0 h-4 w-[1px] bg-white opacity-50 -translate-x-1/2"></div>
      <div className="top-left-col absolute top-1/2 left-0 w-4 h-[1px] bg-white opacity-50 -translate-y-1/2"></div>
    </div>

    <div className="relative w-full h-20 top-4">

    <svg className="absolute top-0 left-0 w-full h-auto" viewBox="0 0 300 100">
    <path 
      d="M1,0 L100,0 L105,7 L195,7 L200,0 L299,0 " 
      stroke="white" 
      opacity="0.3"
      strokeWidth="0.4"
      fill="none"
    />
  </svg>

<div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 flex gap-6 justify-center items-center text-white text-opacity-50 font-bold px-6">
  <ul className="flex gap-6">
    <li><a href="#" className="hover:text-white">HOME</a></li>
    <li><a href="#" className="hover:text-white">PORTFOLIO</a></li>
    <li><a href="#" className="hover:text-white">CERTIFICATION</a></li>
    <li><a href="#" className="hover:text-white">ACADEMICS</a></li>
    <li><a href="#" className="hover:text-white">CONTACT</a></li>
  </ul>
</div>

</div>

    <div className="top-right-plus relative w-4 h-4 mr-2 mt-2 ">
      <div className="top-right-ver absolute left-1/2 top-0 h-4 w-[1px] bg-white opacity-50 -translate-x-1/2"></div>
      <div className="top-right-col absolute top-1/2 left-0 w-4 h-[1px] bg-white opacity-50 -translate-y-1/2"></div>
    </div>

  </div>

<div className="mid absolute top-0 left-0 w-full h-full flex justify-between pointer-events-none z-0">
  <div className="left absolute top-8 bottom-8 left-4 w-[1px] bg-white opacity-50"></div>
  <div className="right absolute top-8 bottom-8 right-4 w-[1px] bg-white opacity-50"></div>
</div>

  <div className="bottom absolute bottom-0 left-0 w-full flex items-end">

    <div className="bot-left-plus relative w-4 h-4 ml-2 mb-2">
      <div className="bot-left-ver absolute left-1/2 top-0 h-4 w-[1px] bg-white opacity-50 -translate-x-1/2"></div>
      <div className="bot-left-col absolute top-1/2 left-0 w-4 h-[1px] bg-white opacity-50 -translate-y-1/2"></div>
    </div>

    <div className="bot-center h-[1px] bg-white opacity-50 mx-2 flex-grow mb-4"></div>

    <div className="bot-right-plus relative w-4 h-4 mr-2 mb-2">
      <div className="bot-right-ver absolute left-1/2 top-0 h-4 w-[1px] bg-white opacity-50 -translate-x-1/2"></div>
      <div className="bot-right-col absolute top-1/2 left-0 w-4 h-[1px] bg-white opacity-50 -translate-y-1/2"></div>
    </div>

  </div>
  
  {/* CONTACT */}
  <div 
  className="
    group z-[5000] absolute bottom-6 right-6 w-40 h-40 rounded-full 
    flex items-center justify-center 
    text-white text-lg border border-white/30
    transition-all duration-500
    bg-black
  "
  style={{
    boxShadow: "inset 0 0 35px rgba(255,255,255,1), 0 0 20px rgba(255,255,255,0.2)"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = "none";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = "inset 0 0 35px rgba(255,255,255,1), 0 0 20px rgba(255,255,255,0.2)";
  }}
>
  <span className="transition-transform duration-500 group-hover:scale-[1.0]">
    CONTACT
  </span>
</div>



</motion.div>




{/* NAME */}      
<h1 className="absolute font-tektur top-[250px] left-1/2 -translate-x-1/2 flex gap-[0.5vw] z-10 pointer-events-none">
  <div className="font-bold font-tektur text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    S
  </div>
  <div className="font-bold font-tektur text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    O
  </div>
  <div className="font-bold font-tektur text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    U
  </div>
  <div className="font-bold font-tektur text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    N
  </div>
  <div className="font-bold font-tektur text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    G
  </div>
  <div className="font-bold font-tektur text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    &nbsp;
  </div>
  <div className="font-bold font-tektur text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    M
  </div>
  <div className="font-bold font-tektur text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    Y
  </div>
  <div className="font-bold font-tektur text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    E
  </div>
  <div className="font-bold font-tektur text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    O
  </div>
  <div className="font-bold font-tektur text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    N
  </div>
  <div className="font-bold font-tektur text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    G
  </div>
  <div className="font-bold font-tektur text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    &nbsp;
  </div>
  <div className="font-bold font-tektur text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    C
  </div>
  <div className="font-bold font-tektur text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    H
  </div>
  <div className="font-bold font-tektur text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    U
  </div>
  <div className="font-bold font-tektur text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    L
  </div>
</h1>


      {/* 글자 1 */}
        <div className='text-white fixed top-[60%] left-20 text-opacity-70 w-[150px]'>
            <div className=''>since</div>
            <div className='ml-5'>1999<span className='opacity-0'>사라지는</span>&lt;</div>
        </div>

        <div className='text-white fixed top-[60%] right-20 text-opacity-70 w-[120px]'>
            <div className='text-right'>SIMPLIFY</div>
            <div className='text-right'>MOTION</div>
            <div className='text-leftt'>CREATIONS</div>
        </div>
        
      {/* front end developer */}
        <div 
  style={{ fontSize: 'clamp(1.625rem, 2.1vw, 2.125rem)' }} 
  className='text-white fixed top-[85%] left-12 text-[24px] leading-9'
>
  <div>
    F<span className="font-gridular">R</span>ONT
  </div>
  <div>
    EN<span className="font-gridular">D</span>
  </div>
  <div>
    DE<span className="font-gridular">V</span>EOPER <span className="font-gridular"></span>
  </div>
</div>

        </div>
      {/* 코딩관련 좌우명 */}
<div className='fixed top-[20%] left-[10%]'>
        <div className="flex gap-1 text-5xl font-bold text-white">
        <motion.span style={{ y: yF, opacity }}>F</motion.span>
        <motion.span style={{ y: yA, opacity }}>a</motion.span>
        <motion.span style={{ y: yI, opacity }}>i</motion.span>
        <motion.span style={{ y: yL, opacity }}>l</motion.span>
        <motion.span style={{ y: ySpace, opacity }}>&nbsp;</motion.span>
        <motion.span style={{ y: yF2, opacity }}>f</motion.span>
        <motion.span style={{ y: yA2, opacity }}>a</motion.span>
        <motion.span style={{ y: yS, opacity }}>s</motion.span>
        <motion.span style={{ y: yT, opacity }}>t</motion.span>
      </div>
      <div className="flex gap-1 text-5xl font-bold text-white">
        <motion.span style={{ y: yL2, opacity }}>l</motion.span>
        <motion.span style={{ y: yE, opacity }}>e</motion.span>
        <motion.span style={{ y: yA3, opacity }}>a</motion.span>
        <motion.span style={{ y: yR2, opacity }}>r</motion.span>
        <motion.span style={{ y: yN2, opacity }}>n</motion.span>
        <motion.span style={{ y: ySpace2, opacity }}>&nbsp;</motion.span>
        <motion.span style={{ y: yF3, opacity }}>f</motion.span>
        <motion.span style={{ y: yA4, opacity }}>a</motion.span>
        <motion.span style={{ y: yS2, opacity }}>s</motion.span>
        <motion.span style={{ y: yT2, opacity }}>t</motion.span>
        <motion.span style={{ y: yE2, opacity }}>e</motion.span>
        <motion.span style={{ y: yR3, opacity }}>r</motion.span>
      </div>
      </div>


      {/* 프런트앤드 개발자 */}
<div className='fixed bottom-[10%] left-1/2 -translate-x-1/2'>
  <div className="flex gap-1 text-5xl font-bold text-white">
    <motion.span style={{ y: yFrontF, opacity: opacityDev }}>F</motion.span>
    <motion.span style={{ y: yFrontR, opacity: opacityDev }}>R</motion.span>
    <motion.span style={{ y: yFrontO, opacity: opacityDev }}>O</motion.span>
    <motion.span style={{ y: yFrontN, opacity: opacityDev }}>N</motion.span>
    <motion.span style={{ y: yFrontT, opacity: opacityDev }}>T</motion.span>
    <motion.span style={{ y: yFrontSpace, opacity: opacityDev }}>&nbsp;</motion.span>
    <motion.span style={{ y: yEndE, opacity: opacityDev }}>E</motion.span>
    <motion.span style={{ y: yEndN, opacity: opacityDev }}>N</motion.span>
    <motion.span style={{ y: yEndD, opacity: opacityDev }}>D</motion.span>
  </div>
  <div className="flex gap-1 text-5xl font-bold text-white">
    <motion.span style={{ y: yDevD, opacity: opacityDev }}>D</motion.span>
    <motion.span style={{ y: yDevE, opacity: opacityDev }}>E</motion.span>
    <motion.span style={{ y: yDevV, opacity: opacityDev }}>V</motion.span>
    <motion.span style={{ y: yDevE2, opacity: opacityDev }}>E</motion.span>
    <motion.span style={{ y: yDevL, opacity: opacityDev }}>L</motion.span>
    <motion.span style={{ y: yDevO, opacity: opacityDev }}>O</motion.span>
    <motion.span style={{ y: yDevP, opacity: opacityDev }}>P</motion.span>
    <motion.span style={{ y: yDevE3, opacity: opacityDev }}>E</motion.span>
    <motion.span style={{ y: yDevR, opacity: opacityDev }}>R</motion.span>
  </div>
</div>




      {/* SECTION2 */}
<div className="relative w-full top-[50%] ">
  <svg className="absolute top-0 left-0 w-full h-auto" viewBox="0 0 300 100">
    <path 
      d="M3,50 L20,50 L40,60 L297,60" 
      stroke="white" 
      opacity="0.3"
      strokeWidth="0.2"
      fill="none"
    />
  </svg>

  <div className="clipper absolute left-[5%] mt-[19%] ">
    <div className="wheel">
      <svg viewBox="0 0 200 200" width="32" height="32">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <circle cx="100" cy="100" r="10" fill="white" filter="url(#glow)" />
        <circle cx="100" cy="100" r="95" stroke="gray" strokeWidth="4" fill="none" />
        <line x1="100" y1="100" x2="100" y2="5" stroke="gray" strokeWidth="2" />
        <line x1="100" y1="100" x2="170" y2="30" stroke="gray" strokeWidth="2" />
        <line x1="100" y1="100" x2="195" y2="100" stroke="gray" strokeWidth="2" />
        <line x1="100" y1="100" x2="170" y2="170" stroke="gray" strokeWidth="2" />
        <line x1="100" y1="100" x2="100" y2="195" stroke="gray" strokeWidth="2" />
        <line x1="100" y1="100" x2="30"  y2="170" stroke="gray" strokeWidth="2" />
        <line x1="100" y1="100" x2="5"   y2="100" stroke="gray" strokeWidth="2" />
        <line x1="100" y1="100" x2="30"  y2="30"  stroke="gray" strokeWidth="2" />
      </svg>
    </div>
  </div>
  <div className='text-white w-full absolute mt-[22%] flex justify-between items-between'>
  <div className='absolute top-0 left-20'>
  Game, Entertainment, Medical <br/>
  다양한 분야를 설계하고 움직였습니다.<br/>
  Netmarble Games, SM Entertainment, 그리고 Trauma Center까지.<br/>
  차이를 만드는 경험을 디자인합니다.
  </div>
<div className='absolute top-0 right-20 flex items-start gap-4'>
  <div class="text-base">MY</div>
  <h2 class='text-gray-400 text-8xl font-bold leading-none -translate-y-5'>PORTFOLIO</h2>
</div>
  </div>
  <div>
  <svg className="absolute top-60 left-0 w-full h-auto" viewBox="0 0 300 100">
    <path 
      d="M10,60  L290,60" 
      stroke="white" 
      opacity="0.3"
      strokeWidth="0.2"
      fill="none"
    />
  </svg>
  </div>
</div>
{/* -----------------------<section3>----------------------- */}

<div className='absolute top-[52%] w-full h-[500vh]'>
  <div className='flex gap-4 text-white absolute left-20 mt-20'>
  <div>3+</div>
  <div>SUCCESSFULLPROJECTS</div>
  <div>2024-2025</div>
  </div>
  <div>
  <div className='text-white absolute left-20 mt-80'>
    <div>Start project = </div>
    <div className='ml-32'>3</div>
  </div>
  <div className='w-full h-auto'>
  <img 
      src={`${process.env.PUBLIC_URL}/netmable.png`} 
      alt="logo" 
      className="w-128 h-auto absolute top-[10%] left-[20%]"
    />
  </div>
  </div>
</div>

{/* SECTION04 - AWARDS */}
<section className='w-full h-[600vh] relative top-[60%]'>
<div className="waveform">
  <div className="waveform-container">
    <canvas 
      width="1004" 
      height="31"
      style={{
        width: "100%",
        height: "100%",
        color: 'red',
        transformOrigin: "0px 0px 0px",
        contentVisibility: "visible"
      }}
    ></canvas>
  </div>
</div>
<div className='text-white text-8xl ml-20' >
  <h2>AWA<span>RD</span></h2>
  <div className='absolute right-20 flex gap-2'>
  <svg 
  width={"1.5rem"} 
  viewBox={"0 0 33 32"} 
  fill={"none"}
>
  <path 
    d="M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z" 
    fill="white"
  />
</svg>
  <svg 
  width={"1.5rem"} 
  viewBox={"0 0 33 32"} 
  fill={"none"}
>
  <path 
    d="M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z" 
    fill="white"
  />
</svg>

  </div>
</div>
<div className='list'>
  <div className='awards'>
<svg className="absolute top-0 left-0 w-full h-auto" viewBox="0 0 300 100">
    <path 
      d="M3,50 L150,50 L170,60 L297,60" 
      stroke="white" 
      opacity="0.3"
      strokeWidth="0.2"
      fill="none"
    />
  </svg>
  <div className='awardsName'>
      <div>
      <svg 
  width={"1.5rem"} 
  viewBox={"0 0 33 32"} 
  fill={"none"}
>
  <path 
    d="M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z" 
    fill="white"
  />
</svg>
<div className='text-white' >AWWWARDS</div>
    </div>
  </div>
  <div className='awardsList'>
      <div>

      </div>
  </div>
  </div>
<svg className="absolute top-4 left-0 w-full h-auto" viewBox="0 0 300 100">
    <path 
      d="M3,50 L150,50 L170,60 L297,60" 
      stroke="white" 
      opacity="0.3"
      strokeWidth="0.2"
      fill="none"
    />
  </svg>
<svg className="absolute top-8 left-0 w-full h-auto" viewBox="0 0 300 100">
    <path 
      d="M3,50 L150,50 L170,60 L297,60" 
      stroke="white" 
      opacity="0.3"
      strokeWidth="0.2"
      fill="none"
    />
  </svg>
<svg className="absolute top-12 left-0 w-full h-auto" viewBox="0 0 300 100">
    <path 
      d="M3,50 L150,50 L170,60 L297,60" 
      stroke="white" 
      opacity="0.3"
      strokeWidth="0.2"
      fill="none"
    />
  </svg>
</div>
</section>



    </section>
  )
}

export default View01
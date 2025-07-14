import React, { useEffect, useState ,useRef} from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import '../App.css'; 

const View01 = () => {
        const [time, setTime] = useState(new Date());
        const targetRef = useRef(null);
        const { scrollYProgress } = useScroll({
          target: targetRef,
          offset: ["start end", "end start"], // 스크롤 위치 기준
        });
        const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  // Fail fast
  const yF = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [-40, 0, -40]);
  const yA = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [30, 0, 30]);
  const yI = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [-20, 0, -20]);
  const yL = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [25, 0, 25]);
  const ySpace = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [10, 0, 10]);
  const yF2 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [-30, 0, -30]);
  const yA2 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [20, 0, 20]);
  const yS = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [-15, 0, -15]);
  const yT = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [35, 0, 35]);

  // learn faster
  const yL2 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [-30, 0, -30]);
  const yE = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [20, 0, 20]);
  const yA3 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [-25, 0, -25]);
  const yR2 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [15, 0, 15]);
  const yN2 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [-20, 0, -20]);
  const ySpace2 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [10, 0, 10]);
  const yF3 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [-35, 0, -35]);
  const yA4 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [25, 0, 25]);
  const yS2 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [-15, 0, -15]);
  const yT2 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [20, 0, 20]);
  const yE2 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [-30, 0, -30]);
  const yR3 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [10, 0, 10]);


      
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
        <div>
            <div className='text-[#f5f5f5] text-opacity-50 '>
                <div className='fixed  top-10 left-10 inline-block text-[16px]'>ANYANG    37°23′42.7″N    126°56′44.3″E</div>
                <div className="fixed top-10 right-10 text-xl font-light text-center inline-block">
                 Local Time : {hours}:{minutes}:{seconds}({hours}:{minutes}{ampm})
                </div>           
            </div>


<div className="fixed inset-0  z-50">
  <div className="top absolute top-0 left-0 w-full flex items-start">

    <div className="top-left-plus relative w-4 h-4 ml-2 mt-2">
      <div className="top-left-ver absolute left-1/2 top-0 h-4 w-[1px] bg-white opacity-50 -translate-x-1/2"></div>
      <div className="top-left-col absolute top-1/2 left-0 w-4 h-[1px] bg-white opacity-50 -translate-y-1/2"></div>
    </div>

    <div className="relative w-full h-20 top-4">

<div className="absolute top-0 left-1 w-[30%] border-t border-white opacity-50"></div>
<div className="absolute top-0 left-[30%] w-12 border-t border-l border-white opacity-50 rotate-45 origin-top-left"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 flex gap-6 justify-center items-center text-white text-opacity-50 font-bold px-6">
  <ul className="flex gap-6">
    <li><a href="#" className="hover:text-white">HOME</a></li>
    <li><a href="#" className="hover:text-white">PORTFOLIO</a></li>
    <li><a href="#" className="hover:text-white">CERTIFICATION</a></li>
    <li><a href="#" className="hover:text-white">ACADEMICS</a></li>
    <li><a href="#" className="hover:text-white">CONTACT</a></li>
  </ul>
</div>

<div className="absolute top-[35px] left-[32%] w-[36%] border-t opacity-50 border-white"></div>

<div className="absolute top-0 right-[30%] w-12 border-t border-r border-white -rotate-45 opacity-50 origin-top-right"></div>
<div className="absolute top-0 right-1 w-[30%] border-t border-white opacity-50"></div>
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



</div>




            
<h1 className="absolute font-tektur top-[250px] left-1/2 -translate-x-1/2 flex gap-[0.5vw] z-10 pointer-events-none">
  <div className="font-bold text-[8vw] text-white inline-block leading-none align-top"
    style={{ fontFamily: 'Tektur', transform: 'scaleY(4)', transformOrigin: 'center' }}>
    S
  </div>
  <div className="font-bold text-[8vw] text-white inline-block leading-none align-top"
    style={{ fontFamily: 'Tektur', transform: 'scaleY(4)', transformOrigin: 'center' }}>
    O
  </div>
  <div className="font-bold text-[8vw] text-white inline-block leading-none align-top"
    style={{ fontFamily: 'Tektur', transform: 'scaleY(4)', transformOrigin: 'center' }}>
    U
  </div>
  <div className="font-bold text-[8vw] text-white inline-block leading-none align-top"
    style={{ fontFamily: 'Tektur', transform: 'scaleY(4)', transformOrigin: 'center' }}>
    N
  </div>
  <div className="font-bold text-[8vw] text-white inline-block leading-none align-top"
    style={{ fontFamily: 'Tektur', transform: 'scaleY(4)', transformOrigin: 'center' }}>
    G
  </div>
  <div className="font-bold text-[8vw] text-white inline-block leading-none align-top"
    style={{ fontFamily: 'Tektur, sans-serif', transform: 'scaleY(4)', transformOrigin: 'center' }}>
    &nbsp;
  </div>
  <div className="font-bold text-[8vw] text-white inline-block leading-none align-top"
    style={{ fontFamily: 'Tektur, sans-serif', transform: 'scaleY(4)', transformOrigin: 'center' }}>
    M
  </div>
  <div className="font-bold text-[8vw] text-white inline-block leading-none align-top"
    style={{ fontFamily: 'Tektur, sans-serif', transform: 'scaleY(4)', transformOrigin: 'center' }}>
    Y
  </div>
  <div className="font-bold text-[8vw] text-white inline-block leading-none align-top"
    style={{ fontFamily: 'Tektur, sans-serif', transform: 'scaleY(4)', transformOrigin: 'center' }}>
    E
  </div>
  <div className="font-bold text-[8vw] text-white inline-block leading-none align-top"
    style={{ fontFamily: 'Tektur, sans-serif', transform: 'scaleY(4)', transformOrigin: 'center' }}>
    O
  </div>
  <div className="font-bold text-[8vw] text-white inline-block leading-none align-top"
    style={{ fontFamily: 'Tektur, sans-serif', transform: 'scaleY(4)', transformOrigin: 'center' }}>
    N
  </div>
  <div className="font-bold text-[8vw] text-white inline-block leading-none align-top"
    style={{ fontFamily: 'Tektur, sans-serif', transform: 'scaleY(4)', transformOrigin: 'center' }}>
    G
  </div>
  <div className="font-bold text-[8vw] text-white inline-block leading-none align-top"
    style={{ fontFamily: 'Tektur, sans-serif', transform: 'scaleY(4)', transformOrigin: 'center' }}>
    &nbsp;
  </div>
  <div className="font-bold text-[8vw] text-white inline-block leading-none align-top"
    style={{ fontFamily: 'Tektur, sans-serif', transform: 'scaleY(4)', transformOrigin: 'center' }}>
    C
  </div>
  <div className="font-bold text-[8vw] text-white inline-block leading-none align-top"
    style={{ fontFamily: 'Tektur, sans-serif', transform: 'scaleY(4)', transformOrigin: 'center' }}>
    H
  </div>
  <div className="font-bold text-[8vw] text-white inline-block leading-none align-top"
    style={{ fontFamily: 'Tektur, sans-serif', transform: 'scaleY(4)', transformOrigin: 'center' }}>
    U
  </div>
  <div className="font-bold text-[8vw] text-white inline-block leading-none align-top"
    style={{ fontFamily: 'Tektur, sans-serif', transform: 'scaleY(4)', transformOrigin: 'center' }}>
    L
  </div>
</h1>


        <div className='text-white fixed top-[60%] left-20 text-opacity-70 w-[60px]'>
            <div className='text-left'>since</div>
            <div className='text-right'>1999</div>
        </div>

        <div className='text-white fixed top-[60%] right-20 text-opacity-70 w-[120px]'>
            <div className='text-right'>SIMPLIFY</div>
            <div className='text-right'>MOTION</div>
            <div className='text-leftt'>CREATIONS</div>
        </div>
        

      <div  style={{ fontSize: 'clamp(1.625rem, 2.1vw, 2.125rem)' }} className='text-white fixed top-[85%] left-12 text-[24px] leading-9'>
        <div>F<span style={{ fontFamily: 'Gridular, sans-serif' }}>R</span>ONT</div>
        <div>EN<span style={{ fontFamily: 'Gridular, sans-serif' }}>D</span></div>
        <div>DE<span style={{ fontFamily: 'Gridular, sans-serif' }}>V</span>EOPER <span style={{ fontFamily: 'Gridular, sans-serif' }}>S</span>TUDIO</div>
      </div>
        </div>

<div className='fixed top-1/2 left-1/2'>
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

    </section>
  )
}

export default View01
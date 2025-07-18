import React, { useEffect, useState ,useRef} from 'react'
import { motion, useScroll, useTransform, useAnimation, useInView } from "framer-motion";
import '../App.css'; 

const View01 = () => {
  const [time, setTime] = useState(new Date());

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
          target: targetRef,
          offset: ["start end", "end start"], 
        });

const lineopacity = useTransform(scrollYProgress, [0,0.5,0.6],[1,0,1])


const full1 = "since";
const full2 = "1999";
const full3 = "SIMPLIFY";
const full4 = "MOTION";
const full5 = "CREATIONS";

const [line1, setLine1] = useState(full1);
const [line2, setLine2] = useState(full2);
const [line3, setLine3] = useState(full3);
const [line4, setLine4] = useState(full4);
const [line5, setLine5] = useState(full5);
const [isErased, setIsErased] = useState(false);

const divY = useTransform(scrollYProgress, [0.3, 0.33], [0, -100]);
const divY2 = useTransform(scrollYProgress, [0.4, 0.44], [0, -150]);

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

const opacityF   = useTransform(scrollYProgress, [0.10, 0.3, 0.42], [0, 1, 0]);
const opacityA   = useTransform(scrollYProgress, [0.12, 0.3, 0.425], [0, 1, 0]);
const opacityI   = useTransform(scrollYProgress, [0.14, 0.3, 0.43], [0, 1, 0]);
const opacityL   = useTransform(scrollYProgress, [0.16, 0.3, 0.435], [0, 1, 0]);
const opacitySp1 = useTransform(scrollYProgress, [0.18, 0.3, 0.437], [0, 1, 0]);
const opacityF2  = useTransform(scrollYProgress, [0.20, 0.3, 0.438], [0, 1, 0]);
const opacityA2  = useTransform(scrollYProgress, [0.21, 0.3, 0.439], [0, 1, 0]);
const opacityS   = useTransform(scrollYProgress, [0.22, 0.3, 0.441], [0, 1, 0]);
const opacityT   = useTransform(scrollYProgress, [0.23, 0.3, 0.443], [0, 1, 0]);

const opacityL2  = useTransform(scrollYProgress, [0.24, 0.3, 0.444], [0, 1, 0]);
const opacityE   = useTransform(scrollYProgress, [0.245, 0.3, 0.445], [0, 1, 0]);
const opacityA3  = useTransform(scrollYProgress, [0.25, 0.3, 0.446], [0, 1, 0]);
const opacityR2  = useTransform(scrollYProgress, [0.255, 0.3, 0.447], [0, 1, 0]);
const opacityN2  = useTransform(scrollYProgress, [0.26, 0.3, 0.448], [0, 1, 0]);
const opacitySp2 = useTransform(scrollYProgress, [0.265, 0.3, 0.449], [0, 1, 0]);
const opacityF3  = useTransform(scrollYProgress, [0.27, 0.3, 0.450], [0, 1, 0]);
const opacityA4  = useTransform(scrollYProgress, [0.275, 0.3, 0.451], [0, 1, 0]);
const opacityS2  = useTransform(scrollYProgress, [0.28, 0.3, 0.452], [0, 1, 0]);
const opacityT2  = useTransform(scrollYProgress, [0.285, 0.3, 0.453], [0, 1, 0]);
const opacityE2  = useTransform(scrollYProgress, [0.29, 0.3, 0.454], [0, 1, 0]);
const opacityR3  = useTransform(scrollYProgress, [0.295, 0.3, 0.455], [0, 1, 0]);

const opacityFrontF = useTransform(scrollYProgress, [0.1, 0.4, 0.5], [0, 1, 0]);
const opacityFrontR = useTransform(scrollYProgress, [0.11, 0.4, 0.51], [0, 1, 0]);
const opacityFrontO = useTransform(scrollYProgress, [0.12, 0.4, 0.52], [0, 1, 0]);
const opacityFrontN = useTransform(scrollYProgress, [0.13, 0.4, 0.53], [0, 1, 0]);
const opacityFrontT = useTransform(scrollYProgress, [0.14, 0.4, 0.54], [0, 1, 0]);
const opacityFrontSpace = useTransform(scrollYProgress, [0.15, 0.4, 0.45], [0, 1, 0]);

const opacityEndE = useTransform(scrollYProgress, [0.16, 0.4, 0.46], [0, 1, 0]);
const opacityEndN = useTransform(scrollYProgress, [0.17, 0.4, 0.47], [0, 1, 0]);
const opacityEndD = useTransform(scrollYProgress, [0.18, 0.4, 0.48], [0, 1, 0]);

const opacityDevD = useTransform(scrollYProgress, [0.19, 0.4, 0.49], [0, 1, 0]);
const opacityDevE = useTransform(scrollYProgress, [0.20, 0.4, 0.50], [0, 1, 0]);
const opacityDevV = useTransform(scrollYProgress, [0.21, 0.4, 0.51], [0, 1, 0]);
const opacityDevE2 = useTransform(scrollYProgress, [0.22, 0.4, 0.52], [0, 1, 0]);
const opacityDevL = useTransform(scrollYProgress, [0.23, 0.4, 0.53], [0, 1, 0]);
const opacityDevO = useTransform(scrollYProgress, [0.24, 0.4, 0.54], [0, 1, 0]);
const opacityDevP = useTransform(scrollYProgress, [0.25, 0.4, 0.55], [0, 1, 0]);
const opacityDevE3 = useTransform(scrollYProgress, [0.26, 0.4, 0.56], [0, 1, 0]);
const opacityDevR = useTransform(scrollYProgress, [0.27, 0.4, 0.57], [0, 1, 0]);



useEffect(() => {
  const unsubscribe = scrollYProgress.on("change", (v) => {
    if (v > 0.2 && !isErased) {
      setIsErased(true);
      eraseText();
    }
    if (v < 0.2 && isErased) {
      setIsErased(false);
      restoreText();
    }
  });

  return () => unsubscribe();
}, [scrollYProgress, isErased]);


const eraseText = () => {
  let i = full2.length;
  let j = full1.length;
  let k = full3.length;
  let l = full4.length;
  let m = full5.length;

  const interval = setInterval(() => {
    if (m > 0) {
      m--;
      setLine5(full5.slice(0, m));
    } else if (l > 0) {
      l--;
      setLine4(full4.slice(0, l));
    } else if (k > 0) {
      k--;
      setLine3(full3.slice(0, k));
    } else if (i > 0) {
      i--;
      setLine2(full2.slice(0, i));
    } else if (j > 0) {
      j--;
      setLine1(full1.slice(0, j));
    } else {
      clearInterval(interval);
    }
  }, 80);
};

const restoreText = () => {
  let j = 0, i = 0, k = 0, l = 0, m = 0;

  const interval = setInterval(() => {
    if (j <= full1.length) {
      setLine1(full1.slice(0, j));
      j++;
    } else if (i <= full2.length) {
      setLine2(full2.slice(0, i));
      i++;
    } else if (k <= full3.length) {
      setLine3(full3.slice(0, k));
      k++;
    } else if (l <= full4.length) {
      setLine4(full4.slice(0, l));
      l++;
    } else if (m <= full5.length) {
      setLine5(full5.slice(0, m));
      m++;
    } else {
      clearInterval(interval);
    }
  }, 80);
};

      
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

        const titleRef = useRef(null);
        const isInView = useInView(titleRef, { once: false });
        const controls = useAnimation();

        useEffect(() => {
          if (isInView) {
            controls.start((i) => ({
              rotateX: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut",
              },
            }));
          } else {
            controls.set((i) => ({
              rotateX: 90,
              opacity: 0,
            }));
          }
        }, [isInView]);

        const textRef = useRef(null);
        const isInView2 = useInView(textRef, { once: false, threshold: 0.1, });
        const controls2 = useAnimation();
      
        useEffect(() => {
          if (isInView2) {
            controls2.start((i) => ({
              opacity: 1,
              y: 0,
              transition: {
                delay: i * 0.3,
                duration: 0.5,
                ease: "easeOut",
              },
            }));
          } else {
            controls2.set((i) => ({
              opacity: 0,
              y: 20,
            }));
          }
        }, [isInView]);

      const sectionRef = useRef(null);

      const { scrollYProgress: zoomProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
      });

      const scale1 = useTransform(zoomProgress, [0, 0.1, 0.2], [1, 4, 6]);
      const opacity1 = useTransform(zoomProgress, [0.15, 0.25], [1, 0]);

      const scale2 = useTransform(zoomProgress, [0, 0.1,0.3], [0.4, 1,6]);
      const opacity2 = useTransform(zoomProgress, [0.1, 0.2], [0.6, 1]);

      const scale3 = useTransform(zoomProgress, [0, 0.1,0.4], [0.6, 1,6]);
      const opacity3 = useTransform(zoomProgress, [0.2, 0.3], [0.6, 1]);

      const scale4 = useTransform(zoomProgress, [0, 0.1,0.6], [0.8, 1,6]);
      const opacity4 = useTransform(zoomProgress, [0.3, 0.4], [0.6, 1]);

    

  return (
    <section ref={targetRef} className='bg-black w-full h-[10000vh] relative '>
      {/* local time & 좌표 */}
        <div>
            <div  className='text-[#f5f5f5] text-opacity-50 flex gap-4'>
                <div className='fixed top-10 left-[50px] inline-block text-[16px]'>ANYANG</div>
                <div className='fixed top-10 left-[160px]  text-[16px]'>37°23′42.7″N</div>
                <div className='fixed top-10 left-[300px]  text-[16px]'>126°56′44.3″E</div>
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

  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 flex gap-6 justify-center items-center text-white text-opacity-50  px-6">
  <ul className="flex gap-6">
  {/* HOME (항상 흰색) */}
  <li>
    <a href="#" className="relative group inline-block h-[1em] leading-none">
      <div className="flex gap-[0.05em]">
        {"HOME".split("").map((char, i) => (
          <span key={i} className="text-white">{char}</span>
        ))}
      </div>
    </a>
  </li>

  {/* PORTFOLIO */}
  <li>
    <a href="#" className="relative group inline-block h-[1em] leading-none">
      <div className="flex gap-[0.05em]">
        {"PORTFOLIO".split("").map((char, i) => (
          <span key={i} className="text-white text-opacity-50 group-hover:opacity-0 transition-opacity duration-300">
            {char}
          </span>
        ))}
      </div>
      <div className="flex gap-[0.05em] absolute top-0 left-0">
        {["P", "Ø", "R", "T", "F", "Ø", "L", "I", "Ø"].map((char, i) => (
          <span
            key={i}
            className="opacity-0 group-hover:opacity-100 text-white transition-opacity duration-100"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {char}
          </span>
        ))}
      </div>
    </a>
  </li>

  {/* CERTIFICATION */}
  <li>
    <a href="#" className="relative group inline-block h-[1em] leading-none">
      <div className="flex gap-[0.05em]">
        {"CERTIFICATION".split("").map((char, i) => (
          <span key={i} className="text-white text-opacity-50 group-hover:opacity-0 transition-opacity duration-300">
            {char}
          </span>
        ))}
      </div>
      <div className="flex gap-[0.05em] absolute top-0 left-0">
        {["C", "E", "R", "T", "I", "F", "I", "C", "A", "T", "I", "O", "N"].map((char, i) => (
          <span
            key={i}
            className={`opacity-0 group-hover:opacity-100 text-white transition-opacity duration-100 ${
              char === "" ? "invisible" : ""
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {char || "_"}
          </span>
        ))}
      </div>
    </a>
  </li>

  {/* ACADEMICS */}
  <li>
    <a href="#" className="relative group inline-block h-[1em] leading-none">
      <div className="flex gap-[0.05em]">
        {"ACADEMICS".split("").map((char, i) => (
          <span key={i} className="text-white text-opacity-50 group-hover:opacity-0 transition-opacity duration-300">
            {char}
          </span>
        ))}
      </div>
      <div className="flex gap-[0.05em] absolute top-0 left-0">
        {["A", "C", "A", "D", "E", "M", "I", "C", "S"].map((char, i) => (
          <span
            key={i}
            className={`opacity-0 group-hover:opacity-100 text-white transition-opacity duration-100 ${
              char === "" ? "invisible" : ""
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {char || "_"}
          </span>
        ))}
      </div>
    </a>
  </li>

  {/* CONTACT */}
  <li>
    <a href="#" className="relative group inline-block h-[1em] leading-none">
      <div className="flex gap-[0.05em]">
        {"CONTACT".split("").map((char, i) => (
          <span key={i} className="text-white text-opacity-50 group-hover:opacity-0 transition-opacity duration-300">
            {char}
          </span>
        ))}
      </div>
      <div className="flex gap-[0.05em] absolute top-0 left-0">
        {["C", "O", "N", "T", "A", "C", "T"].map((char, i) => (
          <span
            key={i}
            className={`opacity-0 group-hover:opacity-100 text-white transition-opacity duration-100 ${
              char === "" ? "invisible" : ""
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {char || "_"}
          </span>
        ))}
      </div>
    </a>
  </li>
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
    <div className="fixed top-[60%] left-20 w-[80px] text-[#f5f5f5] font-pptelegraf  text-xl z-[999] leading-snug whitespace-nowrap">
      <div className='text-left'>{line1}</div>
      <div className='text-right'>{line2}</div>
    </div>

        <div className='text-[#f5f5f5] fixed top-[60%] font-pptelegraf right-20  w-[120px]'>
          <div className="text-right">{line3}</div>
          <div className="text-right">{line4}</div>
          <div className="text-left">{line5}</div>
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
<motion.div className='fixed top-[20%] left-[10%] ' style={{ y: divY }}>
  <div className="flex gap-1 text-left text-7xl font-bold text-white text-opacity-50">
    <motion.span className="font-gridular" style={{ y: yF, opacity: opacityF }}>F</motion.span>
    <motion.span style={{ y: yA, opacity: opacityA }}>a</motion.span>
    <motion.span style={{ y: yI, opacity: opacityI }}>i</motion.span>
    <motion.span style={{ y: yL, opacity: opacityL }}>l</motion.span>
    <motion.span style={{ y: ySpace, opacity: opacitySp1 }}>&nbsp;</motion.span>
    <motion.span className="font-gridular" style={{ y: yF2, opacity: opacityF2 }}>f</motion.span>
    <motion.span style={{ y: yA2, opacity: opacityA2 }}>a</motion.span>
    <motion.span style={{ y: yS, opacity: opacityS }}>s</motion.span>
    <motion.span style={{ y: yT, opacity: opacityT }}>t</motion.span>
  </div>
  <div className="flex gap-1 text-7xl font-bold text-white">
    <motion.span style={{ y: yL2, opacity: opacityL2 }}>l</motion.span>
    <motion.span style={{ y: yE, opacity: opacityE }}>e</motion.span>
    <motion.span className="font-gridular" style={{ y: yA3, opacity: opacityA3 }}>a</motion.span>
    <motion.span style={{ y: yR2, opacity: opacityR2 }}>r</motion.span>
    <motion.span style={{ y: yN2, opacity: opacityN2 }}>n</motion.span>
    <motion.span style={{ y: ySpace2, opacity: opacitySp2 }}>&nbsp;</motion.span>
    <motion.span style={{ y: yF3, opacity: opacityF3 }}>f</motion.span>
    <motion.span className="font-gridular" style={{ y: yA4, opacity: opacityA4 }}>a</motion.span>
    <motion.span style={{ y: yS2, opacity: opacityS2 }}>s</motion.span>
    <motion.span style={{ y: yT2, opacity: opacityT2 }}>t</motion.span>
    <motion.span style={{ y: yE2, opacity: opacityE2 }}>e</motion.span>
    <motion.span style={{ y: yR3, opacity: opacityR3 }}>r</motion.span>
  </div>
</motion.div>



      {/* 프런트앤드 개발자 */}
<motion.div className='fixed bottom-[10%] left-1/2 -translate-x-1/2' style={{ y: divY2 }}>
<div className="flex gap-1 text-7xl text-opacity-50 font-bold text-white">
  <motion.span style={{ y: yFrontF, opacity: opacityFrontF }}>F</motion.span>
  <motion.span style={{ y: yFrontR, opacity: opacityFrontR }}>R</motion.span>
  <motion.span style={{ y: yFrontO, opacity: opacityFrontO }}>O</motion.span>
  <motion.span className="font-gridular" style={{ y: yFrontN, opacity: opacityFrontN }}>N</motion.span>
  <motion.span style={{ y: yFrontT, opacity: opacityFrontT }}>T</motion.span>
  <motion.span style={{ y: yFrontSpace, opacity: opacityFrontSpace }}>&nbsp;</motion.span>
  <motion.span className="font-gridular" style={{ y: yEndE, opacity: opacityEndE }}>E</motion.span>
  <motion.span style={{ y: yEndN, opacity: opacityEndN }}>N</motion.span>
  <motion.span style={{ y: yEndD, opacity: opacityEndD }}>D</motion.span>
</div>
<div className="flex gap-1 text-7xl font-bold text-white">
  <motion.span style={{ y: yDevD, opacity: opacityDevD }}>D</motion.span>
  <motion.span style={{ y: yDevE, opacity: opacityDevE }}>E</motion.span>
  <motion.span className="font-gridular" style={{ y: yDevV, opacity: opacityDevV }}>V</motion.span>
  <motion.span style={{ y: yDevE2, opacity: opacityDevE2 }}>E</motion.span>
  <motion.span style={{ y: yDevL, opacity: opacityDevL }}>L</motion.span>
  <motion.span style={{ y: yDevO, opacity: opacityDevO }}>O</motion.span>
  <motion.span className="font-gridular" style={{ y: yDevP, opacity: opacityDevP }}>P</motion.span>
  <motion.span style={{ y: yDevE3, opacity: opacityDevE3 }}>E</motion.span>
  <motion.span style={{ y: yDevR, opacity: opacityDevR }}>R</motion.span>
</div>
</motion.div>




      {/* SECTION2 */}
<section className="relative w-full top-[50%] ">
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
  <div className="absolute top-0 left-20" ref={textRef}>
      <motion.p custom={0} initial={{ opacity: 0, y: 20 }} animate={controls2}>
        Game, Entertainment, Medical
      </motion.p>
      <motion.p custom={1} initial={{ opacity: 0, y: 20 }} animate={controls2}>
        다양한 분야를 설계하고 움직였습니다.
      </motion.p>
      <motion.p custom={2} initial={{ opacity: 0, y: 20 }} animate={controls2}>
        Netmarble Games, SM Entertainment, 그리고 Trauma Center까지.
      </motion.p>
      <motion.p custom={3} initial={{ opacity: 0, y: 20 }} animate={controls2}>
        차이를 만드는 경험을 디자인합니다.
      </motion.p>
    </div>
<div className='absolute top-0 right-20 flex items-start gap-8'>
  <div class="text-[30px] leading-none">MY</div>
  <h2
      ref={titleRef}
      className="text-9xl font-bold leading-none -translate-y-5 flex text-opacity-50 perspective-[1000px]"
    >
      <motion.span custom={0} initial={{ rotateX: 90, opacity: 0 }} animate={controls}>
        P
      </motion.span>
      <motion.span custom={1} initial={{ rotateX: 90, opacity: 0 }} animate={controls}>
        O
      </motion.span>
      <motion.span custom={2} initial={{ rotateX: 90, opacity: 0 }} animate={controls}>
        R
      </motion.span>
      <motion.span
        custom={3}
        initial={{ rotateX: 90, opacity: 0 }}
        animate={controls}
        className="font-gridular relative top-[10px]"
      >
        T
      </motion.span>
      <motion.span custom={4} initial={{ rotateX: 90, opacity: 0 }} animate={controls}>
        F
      </motion.span>
      <motion.span custom={5} initial={{ rotateX: 90, opacity: 0 }} animate={controls}>
        O
      </motion.span>
      <motion.span custom={6} initial={{ rotateX: 90, opacity: 0 }} animate={controls}>
        L
      </motion.span>
      <motion.span custom={7} initial={{ rotateX: 90, opacity: 0 }} animate={controls}>
        I
      </motion.span>
      <motion.span
        custom={8}
        initial={{ rotateX: 90, opacity: 0 }}
        animate={controls}
        className="font-gridular relative top-[10px]"
      >
        O
      </motion.span>
    </h2>
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
</section>
{/* -----------------------<section3>----------------------- */}

    <section ref={sectionRef} className="absolute top-[52%] w-full h-[1500vh] ">
      {/* 텍스트는 고정 */}
      <div className="absolute top-20 left-20 z-20 text-white flex gap-6">
        <div>3+</div>
        <div>SUCCESSFULLPROJECTS</div>
        <div>2024-2025</div>
      </div>

      <div className="absolute top-80 left-20 z-20 text-white">
        <div>Start project =</div>
        <div className="ml-32">3</div>
      </div>

      {/* 이미지 영역 */}
      <div className="sticky top-20 h-screen w-full flex items-center justify-center">
        <motion.img
          src={`${process.env.PUBLIC_URL}/netmable.png`}
          style={{ scale: scale1, opacity: opacity1 }}
          className="absolute top-[40%] left-[18%] w-[280px] z-10 	origin-bottom-right"
        />
        <motion.img
          src={`${process.env.PUBLIC_URL}/netmable.png`}
          style={{ scale: scale2, opacity: opacity2 }}
          className="absolute top-[65%] left-[60%] w-[260px] z-20 origin-top-left"
        />
        <motion.img
          src={`${process.env.PUBLIC_URL}/netmable.png`}
          style={{ scale: scale3, opacity: opacity3 }}
          className="absolute top-[75%] left-[25%] w-[240px] z-30 origin-bottom-right"
        />
        <motion.img
          src={`${process.env.PUBLIC_URL}/netmable.png`}
          style={{ scale: scale4, opacity: opacity4 }}
          className="absolute top-[70%] left-[40%] w-[220px] z-40 origin-top-left"
        />
      </div>
    </section>

{/* SECTION04 - AWARDS */}
<section className='w-full h-[600vh] absolute top-[70%]'>
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
<div className='list relative h-[100vh]'>
  {/* svg 선 */}
  <div className='list1'>
    <svg className="absolute top-0 left-0 w-full h-auto" viewBox="0 0 300 100">
      <path 
        d="M10,50 L140,50 L160,60 L290,60" 
        stroke="white" 
        opacity="0.3"
        strokeWidth="0.3"
        fill="none"
      />
    </svg>
  </div>

  {/* 어워즈 타이틀 */}
  <div className='awwwwards absolute top-[35%] left-20 flex items-center'>
    <div className='inline-block mr-4'>
      <svg width={"1.5rem"} viewBox={"0 0 33 32"} fill={"none"}>
        <path 
          d="M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z" 
          fill="white"
        />
      </svg>
    </div>
    <div className='text-white leading-none text-3xl'>AWWWWARDS</div>
  </div>

  {/* 어워드 리스트 */}
  <div className='awardList absolute top-[32%] left-[60rem] mt-20 flex flex-col gap-6 w-[700px] ml-20'>
<div class="w-full mb-2">
  <div class="flex justify-between items-center text-white">
    <span class="text-5xl">GTQ</span>
    <span class="opacity-50">2010</span>
  </div>
  <div class="w-full h-[1px] bg-white/30 mt-5"></div>
</div>
<div class="w-full mb-2">
  <div class="flex justify-between items-center text-white">
    <span class="text-5xl">ITQ</span>
    <span class="opacity-50">2010</span>
  </div>
  <div class="w-full h-[1px] bg-white/30 mt-5"></div>
</div>
<div class="w-full mb-2">
  <div class="flex justify-between items-center text-white">
    <span class="text-5xl">워드프로세서</span>
    <span class="opacity-50">2020</span>
  </div>
  <div class="w-full h-[1px] bg-white/30 mt-5"></div>
</div>
<div class="w-full mb-2">
  <div class="flex justify-between items-center text-white">
    <span class="text-5xl">SMAT 3급</span>
    <span class="opacity-50">2023</span>
  </div>
  <div class="w-full h-[1px] bg-white/30 mt-5"></div>
</div>
<div class="w-full mb-2">
  <div class="flex justify-between items-center text-white">
    <span class="text-5xl">ACP PHOTOSHOP</span>
    <span class="opacity-50">2024</span>
  </div>
  <div class="w-full h-[1px] bg-white/30 mt-5"></div>
</div>
<div class="w-full mb-2">
  <div class="flex justify-between items-center text-white">
    <span class="text-5xl">ACP ILLUSTRATION</span>
    <span class="opacity-50">2024</span>
  </div>
  <div class="w-full h-[1px] bg-white/30 mt-5"></div>
</div>
<div class="w-full mb-2">
  <div class="flex justify-between items-center text-white">
    <span class="text-5xl">SQLD</span>
    <span class="opacity-50">2025</span>
  </div>
  <div class="w-full h-[1px] bg-white/30 mt-5"></div>
</div>
<div class="w-full mb-2">
  <div class="flex justify-between items-center text-white">
    <span class="text-5xl">웹디자인 기능사</span>
    <span class="opacity-50">2025</span>
  </div>
</div>
  </div>
</div>
 <div className='list2'>
    <svg className="absolute top-[17%] left-0 w-full h-auto" viewBox="0 0 300 100">
      <path 
        d="M10,50 L140,50 L160,60 L290,60" 
        stroke="white" 
        opacity="0.3"
        strokeWidth="0.2"
        fill="none"
      />
    </svg>
  </div>

  <div className='awwwwards absolute top-[23%] left-20 flex items-center'>
    <div className='inline-block mr-4'>
      <svg width={"1.5rem"} viewBox={"0 0 33 32"} fill={"none"}>
        <path 
          d="M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z" 
          fill="white"
        />
      </svg>
    </div>
    <div className='text-white leading-none text-3xl'>TITLE</div>
  </div>

  <div className='awardList absolute top-[23%] left-[60rem] mt-20 flex flex-col gap-6 w-[700px] ml-20'>
<div class="w-full mb-2">
  <div class="flex justify-between items-center text-white">
    <span class="text-5xl">운전면허 1종 보통</span>
    <span class="opacity-50">2019</span>
  </div>
</div>
  </div>

   <div className='list3'>
    <svg className="absolute top-[20%] left-0 w-full h-auto" viewBox="0 0 300 100">
      <path 
        d="M10,50 L140,50 L160,60 L290,60" 
        stroke="white" 
        opacity="0.3"
        strokeWidth="0.2"
        fill="none"
      />
    </svg>
  </div>

  <div className='awwwwards absolute top-[26%] left-20 flex items-center'>
    <div className='inline-block mr-4'>
      <svg width={"1.5rem"} viewBox={"0 0 33 32"} fill={"none"}>
        <path 
          d="M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z" 
          fill="white"
        />
      </svg>
    </div>
    <div className='text-white leading-none text-3xl'>TRAINING</div>
  </div>

  <div className='awardList absolute top-[26%] left-[60rem] mt-20 flex flex-col gap-6 w-[700px] ml-20'>
<div class="w-full mb-2">
  <div class="flex justify-between items-center text-white">
    <span class="text-5xl">SBS 컴퓨터 아카데미</span>
    <span class="opacity-50">2024~</span>
  </div>
  <div class="w-full h-[1px] bg-white/30 mt-5"></div>
</div>
  </div>
</section>



    </section>
  )
}

export default View01
import React, { useEffect, useState ,useRef,Suspense, useMemo} from 'react'
import { motion, useScroll, useTransform, useAnimation, useInView, useMotionTemplate } from "framer-motion";
import '../App.css'; 
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import Planet from '../component/Planet.jsx'

const View01 = () => {
  const [time, setTime] = useState(new Date());

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
          target: targetRef,
          offset: ["start end", "end start"], 
        });

const lineopacity = useTransform(scrollYProgress, [0,0.5,0.6],[1,0,0.5])

const timeopacity = useTransform(scrollYProgress, [0,0.5,0.6],[1,0,0])


const full1 = "since";
const full2 = "1999";
const full3 = "SCRIPT";
const full4 = "MEDIA QUERY";
const full5 = "COMPONENT";

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

const opacityF    = useTransform(scrollYProgress, [0.200, 0.250, 0.4, 0.6], [0, 1, 1, 0]);
const opacityA    = useTransform(scrollYProgress, [0.205, 0.255, 0.4, 0.6], [0, 1, 1, 0]);
const opacityI    = useTransform(scrollYProgress, [0.210, 0.260, 0.4, 0.6], [0, 1, 1, 0]);
const opacityL    = useTransform(scrollYProgress, [0.215, 0.265, 0.4, 0.6], [0, 1, 1, 0]);
const opacitySp1  = useTransform(scrollYProgress, [0.220, 0.270, 0.4, 0.6], [0, 1, 1, 0]);
const opacityF2   = useTransform(scrollYProgress, [0.225, 0.275, 0.4, 0.6], [0, 1, 1, 0]);
const opacityA2   = useTransform(scrollYProgress, [0.230, 0.280, 0.4, 0.6], [0, 1, 1, 0]);
const opacityS    = useTransform(scrollYProgress, [0.235, 0.285, 0.4, 0.6], [0, 1, 1, 0]);
const opacityT    = useTransform(scrollYProgress, [0.240, 0.290, 0.4, 0.6], [0, 1, 1, 0]);

const opacityL2   = useTransform(scrollYProgress, [0.245, 0.295, 0.4, 0.6], [0, 1, 1, 0]);
const opacityE    = useTransform(scrollYProgress, [0.250, 0.300, 0.4, 0.6], [0, 1, 1, 0]);
const opacityA3   = useTransform(scrollYProgress, [0.255, 0.305, 0.4, 0.6], [0, 1, 1, 0]);
const opacityR2   = useTransform(scrollYProgress, [0.260, 0.310, 0.4, 0.6], [0, 1, 1, 0]);
const opacityN2   = useTransform(scrollYProgress, [0.265, 0.315, 0.4, 0.6], [0, 1, 1, 0]);
const opacitySp2  = useTransform(scrollYProgress, [0.270, 0.320, 0.4, 0.6], [0, 1, 1, 0]);
const opacityF3   = useTransform(scrollYProgress, [0.275, 0.325, 0.4, 0.6], [0, 1, 1, 0]);
const opacityA4   = useTransform(scrollYProgress, [0.280, 0.330, 0.4, 0.6], [0, 1, 1, 0]);
const opacityS2   = useTransform(scrollYProgress, [0.285, 0.335, 0.4, 0.6], [0, 1, 1, 0]);
const opacityT2   = useTransform(scrollYProgress, [0.290, 0.340, 0.4, 0.6], [0, 1, 1, 0]);
const opacityE2   = useTransform(scrollYProgress, [0.295, 0.345, 0.4, 0.6], [0, 1, 1, 0]);
const opacityR3   = useTransform(scrollYProgress, [0.300, 0.350, 0.4, 0.6], [0, 1, 1, 0]);

const opacityFrontF      = useTransform(scrollYProgress, [0.305, 0.355, 0.4, 0.6], [0, 1, 1, 0]);
const opacityFrontR      = useTransform(scrollYProgress, [0.310, 0.360, 0.4, 0.6], [0, 1, 1, 0]);
const opacityFrontO      = useTransform(scrollYProgress, [0.315, 0.365, 0.4, 0.6], [0, 1, 1, 0]);
const opacityFrontN      = useTransform(scrollYProgress, [0.320, 0.370, 0.4, 0.6], [0, 1, 1, 0]);
const opacityFrontT      = useTransform(scrollYProgress, [0.325, 0.375, 0.4, 0.6], [0, 1, 1, 0]);
const opacityFrontSpace  = useTransform(scrollYProgress, [0.330, 0.380, 0.4, 0.6], [0, 1, 1, 0]);

const opacityEndE        = useTransform(scrollYProgress, [0.335, 0.385, 0.4, 0.6], [0, 1, 1, 0]);
const opacityEndN        = useTransform(scrollYProgress, [0.340, 0.390, 0.4, 0.6], [0, 1, 1, 0]);
const opacityEndD        = useTransform(scrollYProgress, [0.345, 0.395, 0.4, 0.6], [0, 1, 1, 0]);

const opacityDevD        = useTransform(scrollYProgress, [0.350, 0.400, 0.45, 0.6], [0, 1, 1, 0]);
const opacityDevE        = useTransform(scrollYProgress, [0.355, 0.405, 0.45, 0.6], [0, 1, 1, 0]);
const opacityDevV        = useTransform(scrollYProgress, [0.360, 0.410, 0.45, 0.6], [0, 1, 1, 0]);
const opacityDevE2   = useTransform(scrollYProgress, [0.365, 0.415, 0.45, 0.6], [0, 1, 1, 0]);
const opacityDevL   = useTransform(scrollYProgress, [0.370, 0.420, 0.45, 0.6], [0, 1, 1, 0]);
const opacityDevO   = useTransform(scrollYProgress, [0.375, 0.425, 0.45, 0.6], [0, 1, 1, 0]);
const opacityDevP    = useTransform(scrollYProgress, [0.380, 0.430, 0.45, 0.6], [0, 1, 1, 0]);
const opacityDevE3   = useTransform(scrollYProgress, [0.385, 0.435, 0.45, 0.6], [0, 1, 1, 0]);
const opacityDevR   = useTransform(scrollYProgress, [0.390, 0.440, 0.45, 0.6], [0, 1, 1, 0]);




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


const scrollYVal = useScrollY(); 
const isFixed = scrollYVal < 1300; 

function useScrollY() {
  const [scrollYVal, setScrollYVal] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollYVal(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return scrollYVal;
}
      
  function SalsaModel({ scrollYVal }) {
  const { scene } = useGLTF('/models/planet.glb');
  const modelRef = useRef();

  useEffect(() => {
    scene.position.set(0, 0, 0);
    scene.traverse((child) => {
      if (child.isMesh) child.geometry.center();
    });
  }, [scene]);

  useFrame(() => {
    if (!modelRef.current) return;

    modelRef.current.rotation.y = scrollYVal * 0.005;

    const scale = 2 + Math.min(scrollYVal, 500) * 0.0005;
    modelRef.current.scale.setScalar(scale);

    const z = scrollYVal > 800 ? (scrollYVal - 800) * 0.01 : 0;
    modelRef.current.position.z = z;

    const opacity = scrollYVal > 800 ? Math.max(1 - (scrollYVal - 800) / 200, 0) : 1;
    modelRef.current.visible = opacity > 0.01;
  });
      
        return (
          <primitive
            ref={modelRef}
            object={scene}
            scale={1}
            position={[1, -6, -3]}
            rotation={[0, 0, 0]}
          />
        );
      }

      const ballRef = useRef(null);
      const [isActive, setIsActive] = useState(false);
      const [isHovered, setIsHovered] = useState(false);
      const ballSize = 140;
      const velocity = useRef({ x: 2, y: 2 });
      const position = useRef({
        x: window.innerWidth - ballSize , 
        y: window.innerHeight - ballSize  
      });
      
      useEffect(() => {
        const handleScroll = () => {
          const section = document.getElementById("pinball");
          if (section) {
            const rect = section.getBoundingClientRect();
            setIsActive(rect.top < window.innerHeight && rect.bottom > 0);
          }
        };
      
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
      
     useEffect(() => {
  let raf;

  const moveBall = () => {
    const ball = ballRef.current;
    if (!ball) { raf = requestAnimationFrame(moveBall); return; }

    const maxX = window.innerWidth - ballSize;
    const maxY = window.innerHeight - ballSize;

    if (isActive && !isHovered) {
      position.current.x += velocity.current.x;
      position.current.y += velocity.current.y;

      if (position.current.x <= 0) {
        position.current.x = 0;
        velocity.current.x = Math.abs(velocity.current.x);
      } else if (position.current.x >= maxX) {
        position.current.x = maxX;
        velocity.current.x = -Math.abs(velocity.current.x);
      }

      if (position.current.y <= 0) {
        position.current.y = 0;
        velocity.current.y = Math.abs(velocity.current.y);
      } else if (position.current.y >= maxY) {
        position.current.y = maxY;
        velocity.current.y = -Math.abs(velocity.current.y);
      }
    } else if (!isActive) {
      position.current.x = maxX;
      position.current.y = maxY;
    }

    ball.style.position = "fixed";
    ball.style.left = "0px";
    ball.style.top = "0px";
    ball.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
    ball.style.willChange = "transform";

    raf = requestAnimationFrame(moveBall);
  };

  raf = requestAnimationFrame(moveBall);
  return () => cancelAnimationFrame(raf);
}, [isActive, isHovered, ballSize]);



     const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function ScrambleText({ text }) {
  const [view, setView] = useState(text);
  const timer = useRef(null);

  const run = () => {
    clearInterval(timer.current);
    let i = 0;
    timer.current = setInterval(() => {
      const chars = text.split("").map((char, idx) =>
        idx <= i ? char : CHARS[Math.floor(Math.random() * CHARS.length)]
      );
      setView(chars.join(""));
      if (i >= text.length) {
        clearInterval(timer.current);
      }
      i++;
    }, 50); 
  };

  useEffect(() => {
    return () => clearInterval(timer.current);
  }, []);

  return (
    <span 
      className="relative inline-block align-top leading-none cursor-pointer"
      onMouseEnter={run}
      onMouseLeave={() => setView(text)}
    >
      <span className="invisible block">{text}</span>

      <span className="absolute inset-0 text-[#f5f5f5]">
        {view}
      </span>
    </span>
  );
}

  return (
    <section ref={targetRef} className='bg-black w-full h-[500vh] relative'>
      <div  className='w-full'>
      {/* local time & 좌표 */}
        <div>
            <motion.div style={{opacity: timeopacity}}  className='text-[#f5f5f5] text-opacity-50 flex gap-4'>
                <div className='fixed top-10 left-[50px] inline-block text-[16px]'>ANYANG</div>
                <div className='fixed top-10 left-[160px]  text-[16px]'>37°23′42.7″N</div>
                <div className='fixed top-10 left-[300px]  text-[16px]'>126°56′44.3″E</div>
                <div className="fixed top-10 right-10 text-xl font-light text-center inline-block">
                 Local Time : {hours}:{minutes}:{seconds}({hours}:{minutes}{ampm})
                </div>           
            </motion.div>

      {/* line & 메뉴 바 */}
      <motion.div style={{opacity: lineopacity}} className="fixed w-full h-auto text-[#f5f5f5] inset-0  pointer-events-none z-[150]">
        <div className="top absolute top-0 left-0 w-full flex items-start">

          <div className="top-left-plus relative w-4 h-4 ml-2 mt-2 pointer-events-none">
            <div className="top-left-ver absolute left-1/2 top-0 h-4 w-[1px] bg-white opacity-50 -translate-x-1/2"></div>
            <div className="top-left-col absolute top-1/2 left-0 w-4 h-[1px] bg-white opacity-50 -translate-y-1/2"></div>
          </div>

      <div className='frame-top-bot cc-top relative w-full h-20 top-4'>
        <div className='frame-top-bot_flex'>
          <div className='frame-line is--hor'></div>
          <div className='frame-line is--angle-left'></div>
        </div>
        <div className='frame-top-bot_middle'>
    <div className="menu_wrapper relative z-[300] pointer-events-auto">
      <ul className="flex gap-2 xl:gap-4 2xl:gap-6">
        {["HOME", "PORTFOLIO", "CERTIFICATION", "EDUCATION", "CONTACT"].map((label) => (
          <li key={label}>
            <a href="#" className="relative inline-block h-[1em] leading-none">
              <ScrambleText text={label} />
            </a>
          </li>
        ))}
      </ul>
    </div>
          <div className='frame-line is--mid'></div>
        </div>
        <div className='frame-top-bot_flex'>
        <div className='frame-line is--angle-right'></div>
        <div className='frame-line is--hor'></div>
        </div>
      </div>

    <div className="top-right-plus relative w-4 h-4 mr-2 mt-2 ">
      <div className="top-right-ver absolute left-1/2 top-0 h-4 w-[1px] bg-white opacity-50 -translate-x-1/2"></div>
      <div className="top-right-col absolute top-1/2 left-0 w-4 h-[1px] bg-white opacity-50 -translate-y-1/2"></div>
    </div>

  </div>

<div className="mid absolute top-0 left-0 w-full h-screen flex justify-between pointer-events-none z-0">
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
  ref={ballRef}
  className={`fixed w-[8rem] h-[8rem] rounded-full flex items-center justify-center 
             text-white text-sm pointer-events-auto z-[99999]
             transition-transform duration-300 ease-out`}
  style={{
    bottom: "40px",
    right: "40px",
    position: "fixed",
    background: "black",
    boxShadow: "inset 0 0 35px rgba(255,255,255,1), 0 0 20px rgba(255,255,255,0.2)",
  }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
<span
  className={`transition-opacity duration-300 ${isHovered ? "opacity-100 scale-110" : "opacity-80"}`}
  style={{ textShadow: "0 0 10px rgba(255,255,255,0.8)" }}
>
  {isActive ? "RESUME" : "CONTACT"}
</span>
</div>


</motion.div>


<div
  id="canvas-wrapper"
  className={`${isFixed ? 'fixed top-0' : 'relative top-0'}
              left-0 w-full h-screen z-[50] pointer-events-none transition-all duration-500 ease-in-out`}
>
<Canvas
  camera={{ position: [0, 2, 5], fov: 50 }}
  className="pointer-events-none"
  style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
  gl={{ alpha: true }}
  onCreated={({ gl }) => {
    gl.setClearColor('#000000', 0);
    gl.domElement.style.pointerEvents = 'none';
  }}
>
  <ambientLight intensity={0.5} />
  <directionalLight position={[2, 2, 2]} />
<Suspense fallback={null}>
  <Planet scrollYVal={scrollYVal} />
</Suspense>
</Canvas>
</div>



{/* NAME */}      
<h1 className="absolute font-Teko top-[250px] left-1/2 -translate-x-1/2 flex gap-2 z-10 pointer-events-none">
  <div className="font-bold font-Teko text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)' , transformOrigin: 'center' }}>
    S
  </div>
  <div className="font-bold font-Teko text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    O
  </div>
  <div className="font-bold font-Teko text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    U
  </div>
  <div className="font-bold font-Teko text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    N
  </div>
  <div className="font-bold font-Teko text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    G
  </div>
  <div className="font-bold font-Teko text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    &nbsp;
  </div>
  <div className="font-bold font-Teko text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    M
  </div>
  <div className="font-bold font-Teko text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    Y
  </div>
  <div className="font-bold font-Teko text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    E
  </div>
  <div className="font-bold font-Teko text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    O
  </div>
  <div className="font-bold font-Teko text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    N
  </div>
  <div className="font-bold font-Teko text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    G
  </div>
  <div className="font-bold font-Teko text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    &nbsp;
  </div>
  <div className="font-bold font-Teko text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    C
  </div>
  <div className="font-bold font-Teko text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    H
  </div>
  <div className="font-bold font-Teko text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    U
  </div>
  <div className="font-bold font-Teko text-[8vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    L
  </div>
</h1>


      {/* 글자 1 */}
    <div className="fixed top-[65%] left-20 w-[80px] text-[#f5f5f5] font-pptelegraf  text-xl z-[999] leading-snug whitespace-nowrap">
      <div className='text-left'>{line1}</div>
      <div className='text-right'>{line2}</div>
    </div>

        <div className='text-[#f5f5f5] fixed top-[65%] font-pptelegraf right-20  w-[120px]'>
          <div className="text-right">{line3}</div>
          <div className="text-right">{line4}</div>
          <div className="text-left">{line5}</div>
        </div>
        
      {/* front end developer */}
        <motion.div 
      style={{ opacity: timeopacity, fontSize: 'clamp(1.625rem, 2.1vw, 2.125rem)' }} 
      className='text-white fixed top-[85%] left-12 text-[24px] leading-9'
    >
      <div className=''>
        F<span className="font-gridular text-[1.02em] ">R</span>ONT
      </div>
      <div>
        EN<span className="font-gridular text-[1.02em] ">D</span>
      </div>
      <div>
        DE<span className="font-gridular text-[1.02em] ">V</span>EOPER
      </div>
    </motion.div>

        </div>
      {/* 코딩관련 좌우명 */}
<motion.div className='fixed top-[20%] left-[10%] ' style={{ y: divY }}>
  <div className="flex gap-1 text-left text-7xl font-bold text-white text-opacity-50">
    <motion.span className="font-gridular -mr-2" style={{ y: yF, opacity: opacityF }}>F</motion.span>
    <motion.span style={{ y: yA, opacity: opacityA }}>A</motion.span>
    <motion.span style={{ y: yI, opacity: opacityI }}>I</motion.span>
    <motion.span style={{ y: yL, opacity: opacityL }}>L</motion.span>
    <motion.span style={{ y: ySpace, opacity: opacitySp1 }}>&nbsp;</motion.span>
    <motion.span className="font-gridular -mr-2" style={{ y: yF2, opacity: opacityF2 }}>F</motion.span>
    <motion.span style={{ y: yA2, opacity: opacityA2 }}>A</motion.span>
    <motion.span style={{ y: yS, opacity: opacityS }}>S</motion.span>
    <motion.span style={{ y: yT, opacity: opacityT }}>T</motion.span>
  </div>
  <div className="flex gap-1 text-7xl font-bold text-white">
    <motion.span style={{ y: yL2, opacity: opacityL2 }}>L</motion.span>
    <motion.span style={{ y: yE, opacity: opacityE }}>E</motion.span>
    <motion.span className="font-gridular" style={{ y: yA3, opacity: opacityA3 }}>A</motion.span>
    <motion.span style={{ y: yR2, opacity: opacityR2 }}>R</motion.span>
    <motion.span style={{ y: yN2, opacity: opacityN2 }}>N</motion.span>
    <motion.span style={{ y: ySpace2, opacity: opacitySp2 }}>&nbsp;</motion.span>
    <motion.span style={{ y: yF3, opacity: opacityF3 }}>F</motion.span>
    <motion.span className="font-gridular" style={{ y: yA4, opacity: opacityA4 }}>A</motion.span>
    <motion.span style={{ y: yS2, opacity: opacityS2 }}>S</motion.span>
    <motion.span style={{ y: yT2, opacity: opacityT2 }}>T</motion.span>
    <motion.span style={{ y: yE2, opacity: opacityE2 }}>E</motion.span>
    <motion.span style={{ y: yR3, opacity: opacityR3 }}>R</motion.span>
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
</div>
    </section>
  )
}

export default View01
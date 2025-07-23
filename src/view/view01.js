import React, { useEffect, useState ,useRef,Suspense} from 'react'
import { motion, useScroll, useTransform, useAnimation, useInView, useMotionTemplate } from "framer-motion";
import '../App.css'; 
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

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

      const scales = [
        useTransform(zoomProgress, [0, 1], [0.8, 1.2]),
        useTransform(zoomProgress, [0, 1], [0.7, 1.3]),
        useTransform(zoomProgress, [0, 1], [0.6, 1.4]),
        useTransform(zoomProgress, [0, 1], [0.9, 1.1]),
        useTransform(zoomProgress, [0, 1], [0.85, 1.25]),
      ];

      const wrapperRef = useRef(null);
      const [scrollY, setScrollY] = useState(0);
    
      useEffect(() => {
        const handleScroll = () => {
          if (!wrapperRef.current) return;
    
          const rect = wrapperRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
    
          if (rect.top < windowHeight && rect.bottom > 0) {
            const progress = 1 - rect.top / windowHeight;
            setScrollY(progress);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
      const rotateX = 20; 
      const translateY = -scrollY * 700; 




      const fullTop1 = "3+";
      const fullTop2 = "SUCCESSFULLPROJECTS";
      const fullTop3 = "2024-2025";

      const [lineTop1, setLineTop1] = useState("");
      const [lineTop2, setLineTop2] = useState("");
      const [lineTop3, setLineTop3] = useState("");
      const [isTopErased, setIsTopErased] = useState(true);
      const [brand1, setBrand1] = useState("");
      const [brand2, setBrand2] = useState("");
      const [ux1, setUx1] = useState("");
      const [ux2, setUx2] = useState("");

      const topTextRef = useRef(null);

      const { scrollYProgress: topTextProgress } = useScroll({
        target: topTextRef,
        offset: ["start end", "end start"], 
        
      });
      const [isTyped, setIsTyped] = useState(false);

      useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (v) => {
          if (v > 0.2 && !isTyped) {
            setIsTyped(true);
            showTyping(fullTop1, setLineTop1, 40);
            showTyping(fullTop2, setLineTop2, 40, fullTop1.length * 40);
            showTyping(fullTop3, setLineTop3, 40, (fullTop1.length + fullTop2.length) * 40);
            showTyping("BRAND", setBrand1, 50, 500);
            showTyping("IDENTIY", setBrand2, 50, 900);
            showTyping("UX/UI", setUx1, 50, 1300);
            showTyping("WEB", setUx2, 50, 1800);
          }
    
          if (v < 0.15 && isTyped) {
            setIsTyped(false); 
            setLineTop1("");
            setLineTop2("");
            setLineTop3("");
            setBrand1("");
            setBrand2("");
            setUx1("");
            setUx2("");
          }
        });
    
        return () => unsubscribe();
      }, [scrollYProgress, isTyped]);
    
      const showTyping = (text, setter, speed = 50, delay = 0) => {
        let i = 0;
        setTimeout(() => {
          const interval = setInterval(() => {
            setter(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(interval);
          }, speed);
        }, delay);
      };

      const imageRef = useRef(null);
      const { scrollYProgress: zoomProgress2 } = useScroll({
        target: imageRef,
        offset: ['start end', 'end start'],
      });
    
      const transforms = [
        {
          z: useTransform(zoomProgress, [0, 1], [-2000, 800]),
          y: useTransform(zoomProgress, [0, 1], [0, -100]),
          scale: useTransform(zoomProgress, [0, 1], [0.3, 2]),
          opacity: useTransform(zoomProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]),
          x: '10%',
          yInit: '10%',
          size: 'w-[220px]',
        },
        {
          z: useTransform(zoomProgress, [0.1, 1], [-2500, 1000]),
          y: useTransform(zoomProgress, [0.1, 1], [50, -200]),
          scale: useTransform(zoomProgress, [0.1, 1], [0.2, 1.8]),
          opacity: useTransform(zoomProgress, [0.1, 0.2, 0.9, 1], [0, 1, 1, 0]),
          x: '60%',
          yInit: '20%',
          size: 'w-[180px]',
        },
        {
          z: useTransform(zoomProgress, [0.2, 1], [-3000, 1200]),
          y: useTransform(zoomProgress, [0.2, 1], [100, -300]),
          scale: useTransform(zoomProgress, [0.2, 1], [0.15, 1.5]),
          opacity: useTransform(zoomProgress, [0.2, 0.3, 0.9, 1], [0, 1, 1, 0]),
          x: '30%',
          yInit: '60%',
          size: 'w-[200px]',
        },
        // 추가 이미지 필요 시 여기에 더 추가
      ];

      function useScrollY() {
        const [scrollYVal, setScrollYVal] = useState(0);
        useEffect(() => {
          const handleScroll = () => setScrollYVal(window.scrollY);
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);
        return scrollYVal;
      }
      
      function SalsaModel() {
        const { scene } = useGLTF('/models/planet.glb');
        const modelRef = useRef();
        const scrollYVal = useScrollY();
      
        useEffect(() => {
          scene.position.set(0, 0, 0);
          scene.traverse((child) => {
            if (child.isMesh) {
              child.geometry.center();
            }
          });
        }, [scene]);
      
        useFrame(() => {
          if (!modelRef.current) return;
        
          modelRef.current.rotation.y = scrollYVal * 0.005;
        
          const scale = 1 + Math.min(scrollYVal, 500) * 0.0005;
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
    

  return (
    <section  className='bg-black w-full h-[2000vh] relative'>
      <div ref={targetRef} className='w-full h-[500vh]  absolute top-0 left-0'>
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
      <motion.div style={{opacity: lineopacity}} className="fixed w-full h-auto inset-0 z-50">
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

  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 flex gap-6 justify-center items-center text-white text-opacity-50  px-6">
  <ul className="flex gap-6">
  <li>
    <a href="#" className="relative group inline-block h-[1em] leading-none">
      <div className="flex gap-[0.05em]">
        {"HOME".split("").map((char, i) => (
          <span key={i} className="text-white">{char}</span>
        ))}
      </div>
    </a>
  </li>

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

  <li>
    <a href="#" className="relative group inline-block h-[1em] leading-none">
      <div className="flex gap-[0.05em]">
        {"EDUCATION".split("").map((char, i) => (
          <span key={i} className="text-white text-opacity-50 group-hover:opacity-0 transition-opacity duration-300">
            {char}
          </span>
        ))}
      </div>
      <div className="flex gap-[0.05em] absolute top-0 left-0">
        {["E", "D", "U", "C", "A", "T", "I", "O", "N"].map((char, i) => (
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


<div id="canvas-wrapper" className="fixed top-[20%] left-0 w-full h-screen z-[999] pointer-events-none">
  <Canvas
    camera={{ position: [0, 2, 5], fov: 50 }}
    style={{ width: '100%', height: '100%' }}
    gl={{ alpha: true }}
    onCreated={({ gl }) => {
      gl.setClearColor('#000000', 0); 
    }}
  >
    <ambientLight intensity={0.5} />
    <directionalLight position={[2, 2, 2]} />
    <Suspense fallback={null}>
      <SalsaModel />
    </Suspense>
    <OrbitControls />
  </Canvas>
</div>



{/* NAME */}      
<h1 className="absolute font-Teko top-[300px] left-1/2 -translate-x-1/2 flex gap-[1vw] z-10 pointer-events-none">
  <div className="font-bold font-Teko text-[10vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)' , transformOrigin: 'center' }}>
    S
  </div>
  <div className="font-bold font-Teko text-[10vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    O
  </div>
  <div className="font-bold font-Teko text-[10vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    U
  </div>
  <div className="font-bold font-Teko text-[10vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    N
  </div>
  <div className="font-bold font-Teko text-[10vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    G
  </div>
  <div className="font-bold font-Teko text-[10vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    &nbsp;
  </div>
  <div className="font-bold font-Teko text-[10vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    M
  </div>
  <div className="font-bold font-Teko text-[10vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    Y
  </div>
  <div className="font-bold font-Teko text-[10vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    E
  </div>
  <div className="font-bold font-Teko text-[10vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    O
  </div>
  <div className="font-bold font-Teko text-[10vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    N
  </div>
  <div className="font-bold font-Teko text-[10vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    G
  </div>
  <div className="font-bold font-Teko text-[10vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    &nbsp;
  </div>
  <div className="font-bold font-Teko text-[10vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    C
  </div>
  <div className="font-bold font-Teko text-[10vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    H
  </div>
  <div className="font-bold font-Teko text-[10vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
    U
  </div>
  <div className="font-bold font-Teko text-[10vw] text-white inline-block leading-none align-top" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>
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
    <motion.span style={{ y: yA, opacity: opacityA }}>A</motion.span>
    <motion.span style={{ y: yI, opacity: opacityI }}>I</motion.span>
    <motion.span style={{ y: yL, opacity: opacityL }}>L</motion.span>
    <motion.span style={{ y: ySpace, opacity: opacitySp1 }}>&nbsp;</motion.span>
    <motion.span className="font-gridular" style={{ y: yF2, opacity: opacityF2 }}>F</motion.span>
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




      {/* SECTION2 */}
<section className="absolute w-full h-[500vh]  top-[20%] ">
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
  <section ref={sectionRef} className="absolute top-[15%]  w-full h-[500vh] ">
      {/* 텍스트는 고정 */}
      <div ref={topTextRef} className="absolute top-0 left-20 z-20 opacity-50 text-white flex gap-6 text-16px">
      <div>{lineTop1}</div>
      <div>{lineTop2}</div>
      <div>{lineTop3}</div>
      </div>

      <div className="absolute top-40 left-20 z-20 text-white opacity-50">
        <div>Start project =</div>
        <div className="ml-32">3</div>
      </div>

      <div className="absolute top-10 left-[40%] z-20 text-white opacity-50">
      <div>{brand1}</div>
      <div>{brand2}</div>
    </div>

    <div className="absolute top-0 right-40 z-20 text-white opacity-50">
      <div>{ux1}</div>
      <div>{ux2}</div>
    </div>

      {/* 이미지 영역 */}
      <section ref={imageRef} className="relative">
      <div
        className="fixed top-0 h-screen w-full overflow-hidden"
        style={{ perspective: "1200px" }}
      >
        <div className="relative h-full w-full">
          {transforms.map((data, idx) => (
            <motion.img
              key={idx}
              src={`${process.env.PUBLIC_URL}/netmable.png`}
              className={`absolute ${data.size}`}
              style={{
                transform: useMotionTemplate`translate3d(0, ${data.y}px, ${data.z}px)`,
                left: data.x,
                top: data.yInit,
                scale: data.scale,
                opacity: data.opacity,
              }}
            />
          ))}
        </div>
      </div>
    </section>

      <div className='w-full  absolute top-[70%] px-[3vw]'>
      <div className="wave-line flex items-end gap-[5px] w-full h-[10px]">
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
      <h2><span className='font-gridular'>C</span>ER<span className='font-gridular'>T</span>I<span className='font-gridular'>F</span>IC<span className='font-gridular'>A</span>TION</h2>
      <div className='absolute right-0 top-0 flex gap-2'>
        {[...Array(2)].map((_, i) => (
          <svg key={i} width='1.5rem' viewBox='0 0 33 32' fill='none'>
            <path d='M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z' fill='white' />
          </svg>
        ))}
      </div>
    </div>

    <div className='line mt-4'>
  <svg viewBox='0 0 300 30' className='w-full h-auto'>
    <path d='M0,10 L120,10 L130,25 L300,25' stroke='white' opacity='0.3' strokeWidth='0.5' fill='none' />
  </svg>
</div>

    <div className='grid grid-cols-9 '>
      <div className='col-span-4 flex items-start'>
        <svg width='1.5rem' viewBox='0 0 33 32' fill='none' className='mr-4'>
          <path d='M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z' fill='white' />
        </svg>
        <div className='text-white text-[clamp(1.25rem,2vw,2rem)] leading-none'>AWWWWARDS</div>
      </div>
      <div className='col-span-5 text-white'>
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
            {i !== arr.length - 1 && <div className='w-full h-[1px] bg-white/30 mt-5'></div>}
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* TITLE 섹션 */}
  <div className='relative'>
  <div className='line'>
  <svg viewBox='0 0 300 10' className='w-full h-auto'>
    <path d='M0,0 L100,0 L130,8 L300,8' stroke='white' opacity='0.3' strokeWidth='0.5' fill='none' />
  </svg>
</div>
    <div className='grid grid-cols-9'>
      <div className='col-span-4 flex items-start'>
        <svg width='1.5rem' viewBox='0 0 33 32' fill='none' className='mr-4'>
          <path d='M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z' fill='white' />
        </svg>
        <div className='text-white text-[clamp(1.25rem,2vw,2rem)] leading-none'>TITLE</div>
      </div>
      <div className='col-span-5 text-white'>
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
  <div className='line'>
  <svg viewBox='0 0 300 10' className='w-full h-auto'>
    <path d='M0,0 L100,0 L130,8 L300,8' stroke='white' opacity='0.3' strokeWidth='0.5' fill='none' />
  </svg>
</div>
    <div className='grid grid-cols-9'>
      <div className='col-span-4 flex items-start'>
        <svg width='1.5rem' viewBox='0 0 33 32' fill='none' className='mr-4'>
          <path d='M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z' fill='white' />
        </svg>
        <div className='text-white text-[clamp(1.25rem,2vw,2rem)] leading-none'>TRAINING</div>
      </div>
      <div className='col-span-5 text-white'>
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
  <div className='line'>
  <svg viewBox='0 0 300 10' className='w-full h-auto'>
    <path d='M0,0 L100,0 L130,8 L300,8' stroke='white' opacity='0.3' strokeWidth='0.5' fill='none' />
  </svg>
</div>
        <div className='grid grid-cols-9 '>
      <div className='col-span-4 flex items-start'>
        <svg width='1.5rem' viewBox='0 0 33 32' fill='none' className='mr-4'>
          <path d='M16.5039 0L18.2236 14.2803L32.5039 16L18.2236 17.7197L16.5039 32L14.7842 17.7197L0.503906 16L14.7842 14.2803L16.5039 0Z' fill='white' />
        </svg>
        <div className='text-white text-[clamp(1.25rem,2vw,2rem)] leading-none'>SKILL</div>
      </div>
      <div className='col-span-5 text-white'>
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
            {i !== arr.length - 1 && <div className='w-full h-[1px] bg-white/30 mt-5'></div>}
          </div>
        ))}
      </div>
    </div>
</div>
</div>
    </section>
</section>
{/* -----------------------<section3>----------------------- */}


{/*section5 학력사항 */}
<section
      ref={wrapperRef}
      className="absolute top-[60%]  left-1/2 -translate-x-1/2 text-white w-full h-[300vh] z-40 "
      style={{
        perspective: "800px",
        transformStyle: "preserve-3d"
      }}
    >
      <div
        className="max-w-[90rem] mx-auto px-6"
        style={{
          transform: `rotateX(${rotateX}deg) translate3d(0, ${translateY}px, 0)`,
          transition: "transform 0.1s linear"
        }}
      >
        <div className="text-center">
          <h2 className="text-7xl font-bold text-white/50 inline-block mb-20">
            ED<span className="font-gridular">U</span>CAT<span className="font-gridular">I</span>ON
          </h2>
          <h2 className="text-7xl font-bold inline-block relative top-20">
            HI<span className="font-gridular">S</span>T<span className="font-gridular">O</span>RY
          </h2>
        </div>

        <div className="space-y-10 mt-20">
          {[
            ["Graduated from Buan Middle School, Anyang", "Jan 2015"],
            ["Graduated from Buhung High School, Anyang", "Jan 2018"],
            ["Completed Military Service (Army Sergeant)", "Feb 2022"],
            ["Graduated from Eulji University", "Jan 2024"]
          ].map(([title, date], i) => (
            <div
              key={i}
              className="grid grid-cols-12 items-center border-b border-white/20 pt-[56px] pb-[56px] gap-4"
            >
              <div className="col-span-7 text-[56px] font-semibold">{title}</div>
              <div className="col-span-3 flex justify-center">
                <img
                  src={`${process.env.PUBLIC_URL}/star.svg`}
                  alt="Certificate"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="col-span-2 text-[50px] text-right">{date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>




    </section>
  )
}

export default View01
import { useScroll } from "framer-motion"
import { useAnimation, useInView,motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'


const View02 = () => {
    const textRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: textRef,
        offset: ["start end", "end start"], 
      });

    const isInView2 = useInView(textRef, { once: false, threshold: 0.1, });
    const controls2 = useAnimation();

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
    }, [isInView2]);

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
          eraseTyping(setLineTop1, 40);
          eraseTyping(setLineTop2, 40, 200);
          eraseTyping(setLineTop3, 40, 400);
          eraseTyping(setBrand1, 50, 600);
          eraseTyping(setBrand2, 50, 800);
          eraseTyping(setUx1, 50, 1000);
          eraseTyping(setUx2, 50, 1200);
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
      
      const eraseTyping = (setter, speed = 50, delay = 0) => {
        setTimeout(() => {
          let text = "";
          setter((prev) => {
            text = prev;
            return prev;
          });
          let i = text.length;
          const interval = setInterval(() => {
            setter(text.slice(0, i));
            i--;
            if (i < 0) clearInterval(interval);
          }, speed);
        }, delay);
      };
  return (
    <>
    <section id="portfolio" className="relative w-full h-[100vh] mb-[50vh]">
  <svg className="absolute top-0 left-0 w-full h-auto" viewBox="0 0 300 70">
    <path 
      d="M3,50 L20,50 L40,60 L297,60" 
      stroke="white" 
      opacity="0.3"
      strokeWidth="0.2"
      fill="none"
    />
  </svg>

  <div className="clipper absolute top-0 left-[5%] mt-[19%] ">
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
      className="text-[clamp(6rem,4vw,8rem)] font-bold leading-none -translate-y-5 flex text-opacity-50 perspective-[1000px]"
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
        className="font-gridular relative top-[2px]"
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
        className="font-gridular relative top-[2px]"
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
  <div  className="absolute top-[70%]  w-full  ">
      {/* 텍스트는 고정 */}
      <div className="absolute top-0 left-20 z-20 opacity-50 text-white flex gap-6 text-16px">
      <div>{lineTop1}</div>
      <div>{lineTop2}</div>
      <div>{lineTop3}</div>
      </div>

      <div className="absolute top-40 left-20 z-20 text-white opacity-50">
        <div>FrontEnd Project = 3</div>
        <div className="ml-32"></div>
      </div>

      <div className="absolute top-10 left-[40%] z-20 text-white opacity-50">
      <div>{brand1}</div>
      <div>{brand2}</div>
    </div>

    <div className="absolute top-0 right-40 z-20 text-white opacity-50">
      <div>{ux1}</div>
      <div>{ux2}</div>
    </div>
  
    </div>
</section>
    </>
  )
}

export default View02
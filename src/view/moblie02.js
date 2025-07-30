import { useScroll } from "framer-motion"
import { useAnimation, useInView,motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'

const Moblie02 = () => {
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
    const [isTyped, setIsTyped] = useState(false);

    useEffect(() => {
      const unsubscribe = scrollYProgress.on("change", (v) => {
        if (v > 0.2 && !isTyped) {
          setIsTyped(true);
          showTyping(fullTop1, setLineTop1, 40);
          showTyping(fullTop2, setLineTop2, 40, fullTop1.length * 40);
          showTyping(fullTop3, setLineTop3, 40, (fullTop1.length + fullTop2.length) * 40);
        }
  
        if (v < 0.15 && isTyped) {
          setIsTyped(false);
          eraseTyping(setLineTop1, 40);
          eraseTyping(setLineTop2, 40, 200);
          eraseTyping(setLineTop3, 40, 400);
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
    <section className='relative w-full h-[500vh] overflow-hidden '>
    <svg className="absolute top-0 left-0 w-full h-auto" viewBox="0 0 300 100">
    <path 
      d="M3,50 L30,50 L50,70 L297,70" 
      stroke="white" 
      opacity="1"
      strokeWidth="0.4"
      fill="none"
    />
  </svg>

  <div className="clipper absolute top-0 left-[3%] mt-[20%] ">
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
  <div className="absolute  top-4 left-4 text-[13px]" ref={textRef}>
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
    <div className="absolute top-40 left-2 flex justify-between items-start w-full items-start mt-20">
  <div className="text-[15px] leading-none">MY</div>
  <h2
    ref={titleRef}
    className="flex text-5xl font-bold leading-none -translate-x-3 -translate-y-1 text-opacity-50 perspective-[1000px]"
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
  <svg className="absolute top-[9%] left-0 w-full h-auto" viewBox="0 0 300 100">
    <path 
      d="M10,60  L290,60" 
      stroke="white" 
      opacity="1"
      strokeWidth="0.5"
      fill="none"
    />
  </svg>
  </div>
  <div  className="absolute top-[13%]  w-full  ">
      <div className="absolute w-full top-0 left-0 px-2 z-20 opacity-50 text-white flex justify-between text-[14px]">
      <div>{lineTop1}</div>
      <div>{lineTop2}</div>
      <div>{lineTop3}</div>
      </div>
    </div>
    <div className="absolute top-[15%]">
    <div>
    <div className="relative w-full h-[350px] overflow-hidden px-2">
    <motion.img
  src={`${process.env.PUBLIC_URL}/netmable.png`}
  alt="netmarble"
  className="w-full h-full object-contain blur-[1.5px] contrast-110"
  initial={{ scaleY: 0.9, opacity: 0 }}
  animate={{
    scaleY: [1, 1.08, 1], 
    opacity: 1,
  }}
  transition={{
    duration: 1,
    ease: [0.25, 1, 0.5, 1], 
  }}
/>
  <div className="absolute inset-0 pointer-events-none bg-noise mix-blend-overlay opacity-30"></div>
  </div>
  <div className="flex flex-col px-4 text-white">
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-bold">NETMARBLEGAMES</h3>
      <span className="text-sm opacity-70">2025</span>
    </div>
    <p className="text-xs opacity-60 mt-1">
      넷마블게임즈
    </p>
  </div>
  </div>
  <div>
      <div className="relative w-full h-[350px] overflow-hidden px-2">
      <motion.img
  src={`${process.env.PUBLIC_URL}/netmable.png`}
  alt="netmarble"
  className="w-full h-full object-contain blur-[1.5px] contrast-110"
  initial={{ scaleY: 0.9, opacity: 0 }}
  animate={{
    scaleY: [1, 1.08, 1], // Y축만 늘어나고 다시 원래 크기로
    opacity: 1,
  }}
  transition={{
    duration: 1,
    ease: [0.25, 1, 0.5, 1], // 자연스러운 튕김
  }}
/>
        <div className="absolute inset-0 pointer-events-none bg-noise mix-blend-overlay opacity-30"></div>
      </div>

      <div className="flex flex-col px-4 text-white">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">NETMARBLEGAMES</h3>
          <span className="text-sm opacity-70">2025</span>
        </div>
        <p className="text-xs opacity-60 mt-1">넷마블게임즈2</p>
      </div>
    </div>
    <div>
      <div className="relative w-full h-[350px] overflow-hidden px-2">
      <motion.img
  src={`${process.env.PUBLIC_URL}/netmable.png`}
  alt="netmarble"
  className="w-full h-full object-contain blur-[1.5px] contrast-110"
  initial={{ scaleY: 0.9, opacity: 0 }}
  animate={{
    scaleY: [1, 1.08, 1], // Y축만 늘어나고 다시 원래 크기로
    opacity: 1,
  }}
  transition={{
    duration: 1,
    ease: [0.25, 1, 0.5, 1], // 자연스러운 튕김
  }}
/>
        <div className="absolute inset-0 pointer-events-none bg-noise mix-blend-overlay opacity-30"></div>
      </div>

      <div className="flex flex-col px-4 text-white">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">NETMARBLEGAMES</h3>
          <span className="text-sm opacity-70">2025</span>
        </div>
        <p className="text-xs opacity-60 mt-1">넷마블게임즈3</p>
      </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Moblie02
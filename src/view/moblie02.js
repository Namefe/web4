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
            delay: i * 0.5,
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
    <section id="mportfolio" className='relative w-full h-[250vh] '>
  <div className="line-wrapper">
    <div className="line-wrapper-left">
      <div className="line-divider"></div>
      <div className="spin-icon_wr opacity-75">
        <div className="spin-icon ">
          <svg xmlns="http://www.w3.org/2000/svg" width='100%' viewBox="0 0 30 31" fill="none" className="spin-icon_spinner">
          <path d="M15 15.5L15 -6.55671e-07M15 15.5L30 15.5M15 15.5L25.7143 4.42857M15 15.5L25.7143 26.5714M15 15.5L15 31M15 15.5L-6.77527e-07 15.5M15 15.5L4.28571 4.42859M15 15.5L4.28571 26.5714" stroke='white'></path>
          </svg>
          <svg  xmlns="http://www.w3.org/2000/svg" width='100%' viewBox="0 0 33 17" fill='none'>
          <path d="M16.5 1C7.93959 1 1 7.93959 1 16.5H32C32 7.93959 25.0604 1 16.5 1Z" stroke='white'></path>
          </svg>
        </div>
      </div>
    </div>
    <div className="line-divider cc--slanted"></div>
    <div className="line-divider"></div>
        <div className="text-column flex flex-col">
      <div className="absolute text-white top-12 left-4 text-[13px]" ref={textRef}>
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
    </div>
  </div>
<div className="we-do_container container w-full">
  <div className="flex justify-between items-start text-white">
    <div className="text-[15px] leading-none font-thin pl-3">
      MY
    </div>

    <h2
      ref={titleRef}
      className="flex pr-3 text-5xl font-bold leading-none text-opacity-50"
    >
      <motion.span custom={0} initial={{ rotateX: 90, opacity: 0 }} animate={controls}>P</motion.span>
      <motion.span className="font-gridular" custom={1} initial={{ rotateX: 90, opacity: 0 }} animate={controls}>O</motion.span>
      <motion.span custom={2} initial={{ rotateX: 90, opacity: 0 }} animate={controls}>R</motion.span>
      <motion.span custom={3} initial={{ rotateX: 90, opacity: 0 }} animate={controls}>T</motion.span>
      <motion.span custom={4} initial={{ rotateX: 90, opacity: 0 }} animate={controls}>F</motion.span>
      <motion.span className="font-gridular" custom={5} initial={{ rotateX: 90, opacity: 0 }} animate={controls}>O</motion.span>
      <motion.span custom={6} initial={{ rotateX: 90, opacity: 0 }} animate={controls}>L</motion.span>
      <motion.span custom={7} initial={{ rotateX: 90, opacity: 0 }} animate={controls}>I</motion.span>
      <motion.span className="font-gridular" custom={8} initial={{ rotateX: 90, opacity: 0 }} animate={controls}>O</motion.span>
    </h2>
  </div>
  <div className="line-divider"></div>
</div>
  <div  className="absolute top-[12%]  w-full ">
      <div className="absolute font-pptelegraf w-full top-0 left-0 px-2 z-20 opacity-50 text-white flex justify-between text-[13px]">
      <div>{lineTop1}</div>
      <div>{lineTop2}</div>
      <div>{lineTop3}</div>
      </div>
    </div>



<div className="absolute top-[15%] w-full flex flex-col items-center gap-10">

  {/* 1번째 이미지 */}
  <div className="w-full max-w-[700px] flex flex-col items-center text-white px-2">
    <div className="relative w-full overflow-hidden">
      <motion.img
        src={`${process.env.PUBLIC_URL}/netmable.png`}
        alt="netmarble"
        className="w-full h-[350px] object-contain blur-[1.5px] contrast-110"
        initial={{ scaleY: 0.9, y: 20 }}
        whileInView={{ scaleY: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 12 }}
        viewport={{ once: false, amount: 0.6 }}
      />
      <div className="absolute inset-0 pointer-events-none bg-noise mix-blend-overlay opacity-30"></div>
    </div>
    <div className="w-full  px-2">
        <h3 className="text-[28px] ">Netmarble games</h3>
      <div className="flex justify-between items-center">
      <p className="text-[14px] opacity-60 mt-1">HTML + CSS + Java</p>
      <span className="text-xs opacity-70">2025</span>
      </div>
    </div>
  </div>

  {/* 2번째 이미지 */}
  <div className="w-full max-w-[700px] flex flex-col items-center text-white px-2">
    <div className="relative w-full overflow-hidden">
      <motion.img
        src={`${process.env.PUBLIC_URL}/SM.jpg`}
        alt="netmarble"
        className="w-full h-[350px] object-contain blur-[0.8px] contrast-110"
        initial={{ scaleY: 0.9, y: 20 }}
        whileInView={{ scaleY: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 12 }}
        viewport={{ once: false, amount: 0.6 }}
      />
      <div className="absolute inset-0 pointer-events-none bg-noise mix-blend-overlay opacity-30"></div>
    </div>
    <div className="w-full  px-2">
        <h3 className="text-[28px]">SM ENTERTAINMENT</h3>
      <div className="flex justify-between items-center">
      <p className="text-[14px] opacity-60 mt-1">REACT</p>
      <span className="text-xs opacity-70">2025</span>
      </div>
    </div>
  </div>

  {/* 3번째 이미지 */}
  <div className="w-full max-w-[700px] flex flex-col items-center text-white px-2">
    <div className="relative w-full overflow-hidden">
      <motion.img
        src={`${process.env.PUBLIC_URL}/trumacenter.png`}
        alt="netmarble"
        className="w-full object-contain blur-[0.8px] contrast-110"
        initial={{ scaleY: 0.9, y: 20 }}
        whileInView={{ scaleY: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 12 }}
        viewport={{ once: false, amount: 0.6 }}
      />
      <div className="absolute inset-0 pointer-events-none bg-noise mix-blend-overlay opacity-30"></div>
    </div>
    <div className="w-full mt-2 px-2">
        <h3 className="text-[28px]">중증외상센터</h3>
      <div className="flex justify-between items-center">
      <p className="text-[14px] opacity-60 mt-1">REACT</p>
      <span className="text-xs opacity-70">2025</span>
      </div>
    </div>
  </div>

</div>
    </section>
    </>
  )
}

export default Moblie02
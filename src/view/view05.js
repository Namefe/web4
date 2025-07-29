import React from 'react'
import { motion, useInView } from "framer-motion";


const View05 = () => {



 
  return ( 
    <>
    <section id="view05" className="relative h-screen w-full  overflow-hidden text-white">
      <div className='absolute top-10 left-10 text-2xl text-white'>
        <div>LET'S GET DOWN</div>
        <div>TO BUSINESS-</div>
      </div>
      <svg
        viewBox="0 -10 1000 1000"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-screen h-[800px] z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
  <defs>
    <path
      id="text-arc"
      d="M -403,1000 A 905,905 0 0,1 1404,1000"
      fill="none"
    />
  </defs>

  <text
    fill="#777"
    fontSize="150"
    fontFamily="monospace"
    letterSpacing="10"
  >
    <textPath className='font-Teko hover:tewt-white' href="#text-arc" startOffset="50%" textAnchor="middle">
      S<tspan className="font-gridular">M</tspan>C91<tspan className="font-gridular" >0</tspan>2@N<tspan className="font-gridular">A</tspan>VER.C<tspan className="font-gridular">O</tspan>M
    </textPath>
  </text>

        {Array.from({ length: 360 }).map((_, i) => {
        const angle = i * 1.5; 
        const r = 380;       
        const tickLength = 8;

        const x1 = 500 + Math.cos((angle * Math.PI) / 180) * r;
        const y1 = 1000 + Math.sin((angle * Math.PI) / 180) * r;
        const x2 = 500 + Math.cos((angle * Math.PI) / 180) * (r + tickLength);
        const y2 = 1000 + Math.sin((angle * Math.PI) / 180) * (r + tickLength);

        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#555"
            strokeWidth="0.8"
          />
        );
      })}

     <motion.g
  animate={{ rotate: -360 }} 
  transition={{
    repeat: Infinity,
    duration: 120, 
    ease: "linear",
  }}
  style={{ transformOrigin: "500px 1000px" }} 
>
  {Array.from({ length: 360 }).map((_, i) => {
    const angle = i * 1;
    const r = 810;
    const tickLength = 15;

    const x1 = 500 + Math.cos((angle * Math.PI) / 180) * r;
    const y1 = 1000 + Math.sin((angle * Math.PI) / 180) * r;
    const x2 = 500 + Math.cos((angle * Math.PI) / 180) * (r + tickLength);
    const y2 = 1000 + Math.sin((angle * Math.PI) / 180) * (r + tickLength);

    return (
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#555"
        strokeWidth="0.8"
      />
    );
  })}
</motion.g>

<motion.g
  animate={{ rotate: 360 }}
  transition={{
    repeat: Infinity,
    duration: 120,
    ease: "linear"
  }}
  style={{ transformOrigin: "500px 1000px" }} 
>
  {Array.from({ length: 360 }).map((_, i) => {
    const angle = i * 1;
    const r = 1000;
    const tickLength = 15;

    const x1 = 500 + Math.cos((angle * Math.PI) / 180) * r;
    const y1 = 1000 + Math.sin((angle * Math.PI) / 180) * r;
    const x2 = 500 + Math.cos((angle * Math.PI) / 180) * (r + tickLength);
    const y2 = 1000 + Math.sin((angle * Math.PI) / 180) * (r + tickLength);

    return (
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#555"
        strokeWidth="0.8"
      />
    );
  })}
</motion.g>

    {[200, 400, 600, 800].map((r) => (
    <circle
      key={r}
      cx="500"
      cy="1000"
      r={r}
      fill="none"
      stroke="#333"
      strokeWidth="1"
    />
  ))}



{Array.from({ length: 24 }).map((_, i) => {
  const angle = (i * 360) / 24;
  const cx = 500;
  const cy = 1000;
  const rStart = 0;
  const rEnd = 350;

  const x1 = cx + Math.cos((angle * Math.PI) / 180) * rStart;
  const y1 = cy + Math.sin((angle * Math.PI) / 180) * rStart;
  const x2 = cx + Math.cos((angle * Math.PI) / 180) * rEnd;
  const y2 = cy + Math.sin((angle * Math.PI) / 180) * rEnd;

  return <line key={`inner-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#444" strokeWidth="1" />;
})}

{Array.from({ length: 24 }).map((_, i) => {
  const angle = (i * 360) / 24;
  const cx = 500;
  const cy = 1000;

 
  const rStart = 410;
  const rEnd = i % 2 === 0 ? 700 : 600; 

  const x1 = cx + Math.cos((angle * Math.PI) / 180) * rStart;
  const y1 = cy + Math.sin((angle * Math.PI) / 180) * rStart;
  const x2 = cx + Math.cos((angle * Math.PI) / 180) * rEnd;
  const y2 = cy + Math.sin((angle * Math.PI) / 180) * rEnd;

  return (
    <line
      key={`outer-${i}`}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="#444"
      strokeWidth="1"
    />
  );
})}



      </svg>

<div
  className="absolute text-2xl"
  style={{
    left: "600px",
    top: "600px",
    transform: "translate(-50%, -50%) rotate(320deg)",
    transformOrigin: "center",
  }}
>
  NAME
</div>

<div
  className="absolute text-2xl"
  style={{
    left: "820px",
    top: "450px",
    transform: "translate(-50%, -50%) rotate(350deg)",
    transformOrigin: "center",

  }}
>
  PHONE NUMBER
</div>

<div
  className="absolute text-2xl "
  style={{
    left: "1050px",
    top: "500px",
    transform: "translate(-50%, -50%) rotate(15deg)",
    transformOrigin: "center",
  }}
>
  GITHUB
</div>

<div
  className="absolute text-2xl group p-4"
  style={{
    left: "1300px",
    top: "600px",
    transform: "translate(-50%, -50%) rotate(40deg)",
    transformOrigin: "center",
  }}
>
  <span className="block group-hover:hidden">MBTI</span>
  <span className="hidden group-hover:block">ISTJ</span>
</div>




      <div className="absolute bottom-6 left-8 text-[15px] text-white/40">
        Privacy & Cookies Policy
      </div>

      <div className="absolute bottom-6 right-8 text-[15px] text-white/40">
        SEONG MYEONG CHUL © 2025
      </div>
    </section>

    </>
  )
}

export default View05
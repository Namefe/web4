import React from 'react'
import { motion, useInView } from "framer-motion";


const View05 = () => {



 
  return ( 
    <>
    <section id="view05" className="relative h-screen w-full  overflow-hidden text-white">
    <div className='absolute top-5 left-8 w-full h-[150px] text-2xl text-white'>
        <div className='text-white opacity-50 text-[40px] '>LE<span className='font-gridular'>T</span>'S GET DO<span className='font-gridular'>W</span>N</div>
        <div className='flex items-center gap-2'>
            <h2 className='text-white leading-none text-[40px] '><span className='font-gridular'>T</span>O BU<span className='font-gridular'>S</span>INE<span className='font-gridular'>SS</span></h2>
            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height='24'  fill="none">
                <path d="M19.7247 16.9837C19.7211 16.7786 19.8001 16.5725 19.9617 16.4109L21.275 15.0976C21.5912 14.7814 21.5912 14.295 21.275 13.9788L20.5233 13.1775L20.0127 12.6713C19.868 12.5278 19.7865 12.3324 19.7865 12.1286L19.786 1.33091C19.786 0.908794 20.1282 0.566582 20.5503 0.566558L23.1069 0.56646C23.529 0.566452 23.8712 0.908646 23.8712 1.33077L23.8714 12.1345C23.8714 12.3347 23.7928 12.527 23.6525 12.6699L22.6922 13.6483L22.3937 13.9788C22.0776 14.295 22.0776 14.7814 22.3937 15.0976L23.7142 16.4181C24.0304 16.7342 24.0304 17.2207 23.7142 17.5368L22.4009 18.8501C22.0848 19.1663 22.0848 19.6527 22.4009 19.9689L23.7629 21.3308C24.079 21.647 24.079 22.1334 23.7629 22.4496L22.4496 23.7629C22.1334 24.079 21.647 24.079 21.3309 23.7629L19.9689 22.4009C19.6528 22.0848 19.1663 22.0848 18.8502 22.4009L17.5369 23.7142C17.2207 24.0304 16.7343 24.0304 16.4182 23.7142L15.0977 22.3937C14.7815 22.0776 14.2951 22.0776 13.9789 22.3937L12.6656 23.5796C12.6016 23.6436 12.5306 23.6947 12.4555 23.7328C12.3333 23.8112 12.1902 23.8538 12.0427 23.8538L1.11887 23.854C0.696749 23.854 0.354548 23.5118 0.354548 23.0897V20.5401C0.354548 20.118 0.696751 19.7758 1.11888 19.7758L12.0486 19.776C12.2459 19.776 12.4355 19.8523 12.5778 19.9888L13.2786 20.6612L13.9789 21.275C14.2951 21.5911 14.7815 21.5911 15.0977 21.275L16.411 19.9617C16.5725 19.8001 16.7784 19.7211 16.9834 19.7247C16.9461 19.6307 16.8895 19.5426 16.8135 19.4666L0.223862 2.87683C-0.0746193 2.57834 -0.0746193 2.0944 0.223862 1.79591L1.79589 0.223864C2.09438 -0.0746211 2.57831 -0.0746217 2.87679 0.223864L19.4664 16.8136C19.5425 16.8897 19.6306 16.9464 19.7247 16.9837Z" fill='currentColor'></path>
            </svg>
        </div>
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
 NUMBER
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
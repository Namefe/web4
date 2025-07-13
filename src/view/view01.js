import React, { useEffect, useState } from 'react'
import '../App.css'; 

const View01 = () => {
        const [hover, setHover] = useState(false);
        const [time, setTime] = useState(new Date());
      
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
    <section className='bg-black w-full h-[1000vh] relative'>
        <div>
            <div className='text-white '>
                <div className='absolute top-0 left-6 inline-block'>ANYANG    37°23′42.7″N    126°56′44.3″E</div>
                <div className="absolute top-0 right-4 text-xl font-light text-center inline-block">
                 Local Time : {hours}:{minutes}:{seconds}({hours}:{minutes}{ampm})
                </div>           
            </div>


<div className="fixed inset-0 pointer-events-none z-50">
  <div className="top absolute top-0 left-0 w-full flex items-start">

    <div className="top-left-plus relative w-4 h-4 ml-2 mt-2">
      <div className="top-left-ver absolute left-1/2 top-0 h-4 w-[1px] bg-white -translate-x-1/2"></div>
      <div className="top-left-col absolute top-1/2 left-0 w-4 h-[1px] bg-white -translate-y-1/2"></div>
    </div>

<div className="relative w-full h-8 mt-4">

  {/* 왼쪽 직선 */}
  <div className="absolute top-0 left-4 w-[30%] border-t border-white"></div>

  {/* 왼쪽 사선 */}
  <div className="absolute top-0 left-[31%] w-12 border-t border-l border-white rotate-45 origin-top-left"></div>

  {/* 중앙 직선 */}
  <div className="absolute top-[35px] left-[33%] w-[34%] border-t border-white"></div>

  {/* 오른쪽 사선 */}
  <div className="absolute top-0 right-[31%] w-12 border-t border-r border-white -rotate-45 origin-top-right"></div>

  {/* 오른쪽 직선 */}
  <div className="absolute top-0 right-4 w-[30%] border-t border-white"></div>
</div>

    <div className="top-right-plus relative w-4 h-4 mr-2 mt-2">
      <div className="top-right-ver absolute left-1/2 top-0 h-4 w-[1px] bg-white -translate-x-1/2"></div>
      <div className="top-right-col absolute top-1/2 left-0 w-4 h-[1px] bg-white -translate-y-1/2"></div>
    </div>

  </div>

<div className="mid absolute top-0 left-0 w-full h-full flex justify-between">
  <div className="left absolute top-8 bottom-8 left-4 w-[1px] bg-white"></div>
  <div className="right absolute top-8 bottom-8 right-4 w-[1px] bg-white"></div>
</div>

  <div className="bottom absolute bottom-0 left-0 w-full flex items-end">

    <div className="bot-left-plus relative w-4 h-4 ml-2 mb-2">
      <div className="bot-left-ver absolute left-1/2 top-0 h-4 w-[1px] bg-white -translate-x-1/2"></div>
      <div className="bot-left-col absolute top-1/2 left-0 w-4 h-[1px] bg-white -translate-y-1/2"></div>
    </div>

    <div className="bot-center h-[1px] bg-white mx-2 flex-grow mb-4"></div>

    <div className="bot-right-plus relative w-4 h-4 mr-2 mb-2">
      <div className="bot-right-ver absolute left-1/2 top-0 h-4 w-[1px] bg-white -translate-x-1/2"></div>
      <div className="bot-right-col absolute top-1/2 left-0 w-4 h-[1px] bg-white -translate-y-1/2"></div>
    </div>

  </div>

    <div 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover 
          ? "radial-gradient(circle, black 50%, rgba(255,255,255,1) 90%)"
          : "radial-gradient(circle, black 50%, rgba(255,255,255,0.2) 90%)",
        boxShadow: hover 
          ? "0 0 30px 10px rgba(255,255,255,0.4)"
          : "0 0 20px 5px rgba(255,255,255,0.2)"
      }}
      className="absolute bottom-6 right-6 w-40 h-40 rounded-full flex items-center justify-center
                text-white text-lg 
                border border-white/30
                transition duration-300"
    >
      CONTACT
    </div>
</div>




            
<h1 className="absolute font-tektur top-[150px] left-1/2 -translate-x-1/2 flex gap-[0.5vw] z-10 pointer-events-none">
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


        <div className='text-white absolute top-[6%] left-20 text-opacity-70 w-[60px]'>
            <div className='text-left'>since</div>
            <div className='text-right'>1999</div>
        </div>

        <div className='text-white absolute top-[6%] right-20 text-opacity-70 w-[60px]'>
            <div className='text-left'>SIMPLIFY</div>
            <div className='text-right'>MOTION</div>
            <div className='text-right'>CREATIONS</div>
        </div>
        

      <div className='text-white absolute top-[10%]'>
        <div>F<span style={{ fontFamily: 'Gridular, sans-serif' }}>R</span>ONT</div>
        <div>EN<span style={{ fontFamily: 'Gridular, sans-serif' }}>D</span></div>
        <div>DE<span style={{ fontFamily: 'Gridular, sans-serif' }}>V</span>EOPER <span style={{ fontFamily: 'Gridular, sans-serif' }}>S</span>TUDIO</div>
      </div>
        </div>

    </section>
  )
}

export default View01
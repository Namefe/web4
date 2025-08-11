import React, { useEffect, useRef, useState } from 'react'

const Moblie = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);


const ballRef = useRef(null);
const [isActive, setIsActive] = useState(false);
const [isHovered, setIsHovered] = useState(false);
const ballSize = 140;
const velocity = useRef({ x: 2, y: 2 });
const position = useRef({
  x: window.innerWidth - ballSize - 20, 
  y: window.innerHeight - ballSize - 20 
});

useEffect(() => {
  const handleScroll = () => {
    const section = document.getElementById("view05");
    if (section) {
      const rect = section.getBoundingClientRect();
      setIsActive(rect.top < window.innerHeight && rect.bottom > 0);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

useEffect(() => {
  let animationFrame;

  const moveBall = () => {
    const ball = ballRef.current;
    if (!ball) return;

    if (isActive) {
      if (!isHovered) {
        position.current.x += velocity.current.x;
        position.current.y += velocity.current.y;

        if (position.current.x <= 0 || position.current.x + ballSize >= window.innerWidth) {
          velocity.current.x *= -1;
        }
        if (position.current.y <= 0 || position.current.y + ballSize >= window.innerHeight) {
          velocity.current.y *= -1;
        }
      }

      ball.style.left = `${position.current.x}px`;
      ball.style.top = `${position.current.y}px`;
      ball.style.bottom = "";
      ball.style.right = "";
    } 
    else {
      position.current.x = window.innerWidth - ballSize ;
      position.current.y = window.innerHeight - ballSize ;
    
      ball.style.left = `${position.current.x}px`;
      ball.style.top = `${position.current.y}px`;
    }

    animationFrame = requestAnimationFrame(moveBall);
  };

  animationFrame = requestAnimationFrame(moveBall);
  return () => cancelAnimationFrame(animationFrame);
}, [isActive, isHovered]);
  return (
    <>
    <section className='relative w-full h-[100vh] text-white'>
      <div className=''>
      {/*라인 윗줄*/}
      <div className="fixed w-full h-auto inset-0 z-[5000] pointer-events-none">
      <div className="top absolute top-0 left-0 w-full flex items-start justify-between">
    <div className="top-left-plus relative w-4 h-4 top-2 left-2">
    <div className="top-left-ver absolute left-1/2  top-0 h-4 w-[.5px] bg-white opacity-50 -translate-x-1/2"></div>
    <div className="top-left-col absolute top-1/2 left-0 w-4 h-[.5px] bg-white opacity-50 -translate-y-1/2"></div>
    </div>

      <div className="top-right-plus relative w-4 h-4 top-2 right-2  ">
      <div className="top-right-ver absolute left-1/2 top-0 h-4 w-[.5px] bg-white opacity-50 -translate-x-1/2"></div>
      <div className="top-right-col absolute top-1/2 right-0 w-4 h-[.5px] bg-white opacity-50 -translate-y-1/2"></div>
    </div>
</div>
      </div>
      {/*라인 아랫줄*/}
      <div className="fixed w-full h-auto inset-0 z-20">
      <div className="top absolute bottom-0 left-0 w-full flex items-start justify-between">
    <div className="btm-left-plus relative w-4 h-4 bottom-2 left-2 ">
    <div className="btm-left-ver absolute left-1/2 top-0 h-4 w-[.5px] bg-white opacity-50 -translate-x-1/2"></div>
    <div className="btm-left-col absolute top-1/2 left-0 w-4 h-[.5px] bg-white opacity-50 -translate-y-1/2"></div>
    </div>
    
<div className='frame-top-bot cc--bot '>
<div className='frame-top-bot_flex'>
  <div className='frame-line is--hor'></div>
  <div className='frame-line is--angle-left_bot'></div>
</div>
<div className="relative menu-button">
<div className='frame-top-bot_middle'>
    <div className='frame-line is--menu'></div>
  </div>
      {/* 메뉴 버튼 */}
      <div
        className=" flex items-center gap-2 cursor-pointer z-[10000] pointer-events-auto"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="relative flex flex-col justify-center items-center w-[18px] h-[18px]">
          <div
            className={`absolute w-[18px] h-[1px] bg-white transition-transform duration-300 ${
              isMenuOpen ? "rotate-45" : "translate-y-[-4px]"
            }`}
          ></div>

          <div
            className={`absolute w-[18px] h-[1px] bg-white transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45" : "translate-y-[4px]"
            }`}
          ></div>
        </div>

        <span className="text-white text-sm transition-all duration-300">
          {isMenuOpen ? "CLOSE" : "MENU"}
        </span>
      </div>

      <div
        className={`fixed inset-0 bg-black  text-white transition-transform duration-500 z-[9998] ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* 오른쪽 상단 설명 텍스트 */}
        <div className="absolute top-8 right-8 text-xs leading-4 text-white opacity-50">
          <p>CREATING</p>
          <p>MEMORABLE</p>
          <p>DIGITAL</p>
          <p className='-translate-x-10'>EXPERIENCES</p>
        </div>

        <div className="flex flex-col items-start pl-4 pt-20 w-full max-w-[600px]">
  <div className="w-full mb-4">
    <h2 className="text-[40px]  hover:opacity-70"><span className='font-gridular'>HO</span>ME</h2>
    <div
    className="w-screen h-[10px] mt-2"
    style={{
      backgroundImage:
        "repeating-linear-gradient(to right, rgba(255, 255, 255, 0.5) 0px, transparent 2px 6px)"
      }}
    ></div>  
    </div>     

  <div className="w-full mb-4">
    <h2 className="text-[40px]  hover:opacity-70"><span className='font-gridular' >W</span>ORK<span className='font-gridular'>S</span></h2>
    <div
    className="w-screen h-[8px] mt-2"
    style={{
      backgroundImage:
        "repeating-linear-gradient(to right, rgba(255, 255, 255, 0.5) 0px, transparent 2px 6px)"
      }}
    ></div> 
      </div>

  <div className="w-full mb-4">
    <h2 className="text-[40px]  hover:opacity-70">PORT<span className='font-gridular'>F</span>OLIO</h2>
    <div
    className="w-screen h-[6px] mt-2"
    style={{
      backgroundImage:
        "repeating-linear-gradient(to right, rgba(255, 255, 255, 0.5) 0px, transparent 2px 6px)"
      }}
    ></div>   
    </div>

  <div className="w-full mb-4">
    <h2 className="text-[40px]  hover:opacity-70">CERTI<span className='font-gridular'>F</span>ICATI<span className='font-gridular'>O</span>N</h2>
    <div
    className="w-screen h-[3px] mt-2"
    style={{
      backgroundImage:
        "repeating-linear-gradient(to right, rgba(255, 255, 255, 0.5) 0px, transparent 2px 4px)"
      }}
    ></div>  
      </div>

  <div className="w-full mb-4">
    <h2 className="text-[40px]  hover:opacity-70">EDUCA<span className='font-gridular'>T</span>IO<span className='font-gridular'>N</span></h2>
    <div
    className="w-screen h-[1px] mt-2"
    style={{
      backgroundImage:
      "repeating-linear-gradient(to right, rgba(255, 255, 255, 0.5) 0px, transparent 1px 1px)"
      }}
    ></div>    
    </div>

  <div className="w-full mb-4">
    <h2 className="text-[40px]  hover:opacity-70">CONT<span className='font-gridular'>A</span>CT</h2>
    <div
    className="w-screen h-[1px] mt-2"
    style={{
      backgroundImage:
      "repeating-linear-gradient(to right, rgba(255, 255, 255, 0.5) 0px, transparent 1px 1px)"
      }}
    ></div>    
    </div>

  </div>
  </div>

    
    </div>
    <div className='frame-top-bot_flex'>
      <div className='frame-line is--angle-right_bot'></div>
      <div className='frame-line is--hor'></div>
    </div>
</div>

      <div className="btm-right-plus relative w-4 h-4 bottom-2 right-1 z-[5000] ">
      <div className="btm-right-ver absolute left-1/2 top-0 h-4 w-[.5px] bg-white opacity-50 -translate-x-1/2"></div>
      <div className="btm-right-col absolute top-1/2 right-0 w-4 h-[.5px] bg-white opacity-50 -translate-y-1/2"></div>
    </div>
</div>
      </div>
    </div>

<div
  ref={ballRef}
  className={`fixed w-[7rem] h-[7rem] rounded-full flex items-center justify-center 
             text-white text-sm pointer-events-auto z-[99999]
             transition-transform duration-300 ease-out`}
  style={{
    bottom: "40px",
    right: "60px",
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


    <div className="relative flex flex-col items-center text-white top-[120px]">
    <h1 className="flex font-teko pointer-events-none">
    <div className="font-bold text-[12vw] leading-none" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>S</div>
    <div className="font-bold text-[12vw] leading-none" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>O</div>
    <div className="font-bold text-[12vw] leading-none" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>U</div>
    <div className="font-bold text-[12vw] leading-none" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>N</div>
    <div className="font-bold text-[12vw] leading-none" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>G</div>
    <div className="font-bold text-[12vw] leading-none" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>&nbsp;</div>
    <div className="font-bold text-[12vw] leading-none" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>M</div>
    <div className="font-bold text-[12vw] leading-none" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>Y</div>
    <div className="font-bold text-[12vw] leading-none" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>E</div>
    <div className="font-bold text-[12vw] leading-none" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>O</div>
    <div className="font-bold text-[12vw] leading-none" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>N</div>
    <div className="font-bold text-[12vw] leading-none" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>G</div>
    <div className="font-bold text-[12vw] leading-none" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>&nbsp;</div>
    <div className="font-bold text-[12vw] leading-none" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>C</div>
    <div className="font-bold text-[12vw] leading-none" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>H</div>
    <div className="font-bold text-[12vw] leading-none" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>U</div>
    <div className="font-bold text-[12vw] leading-none" style={{ transform: 'scaleY(4)', transformOrigin: 'center' }}>L</div>
  </h1>

  <div className="flex gap-[6vw] mt-[7vh] opacity-75">
    <h4 className="text-[4vw]">F<span className='font-gridular'>R</span>ONT END</h4>
    <h4 className="text-[4vw]">UI/U<span className='font-gridular'>X</span></h4>
    <h4 className="text-[4vw]">DE<span className='font-gridular'>V</span>ELOPE</h4>
    <h4 className="text-[4vw]">CR<span className='font-gridular'>E</span>ATIVE</h4>
  </div>
</div>

    </section>
    </>
  )
}

export default Moblie
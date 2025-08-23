import React, { useEffect, useRef, useState } from 'react'

const Moblie = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);


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
          const section = document.getElementById("mcontact");
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
  return (
    <>
    <section id="mhome" className='relative w-full h-[100vh] text-white'>
 <div className="">
      {/* 상단 라인 */}
      <div className="fixed w-full h-auto inset-0 z-[5000] pointer-events-none">
        <div className="top absolute top-0 left-0 w-full flex items-start justify-between">
          <div className="top-left-plus relative w-4 h-4 top-2 left-2">
            <div className="top-left-ver absolute left-1/2  top-0 h-4 w-[.5px] bg-white opacity-50 -translate-x-1/2"></div>
            <div className="top-left-col absolute top-1/2 left-0 w-4 h-[.5px] bg-white opacity-50 -translate-y-1/2"></div>
          </div>
          <div className="top-right-plus relative w-4 h-4 top-2 right-2">
            <div className="top-right-ver absolute left-1/2 top-0 h-4 w-[.5px] bg-white opacity-50 -translate-x-1/2"></div>
            <div className="top-right-col absolute top-1/2 right-0 w-4 h-[.5px] bg-white opacity-50 -translate-y-1/2"></div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black text-white transition-transform duration-500 z-[10000] ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="absolute top-8 right-8 text-xs leading-4 opacity-50">
          <p>CREATING</p>
          <p>MEMORABLE</p>
          <p>DIGITAL</p>
          <p className="-translate-x-10">EXPERIENCES</p>
        </div>

        <div className="flex flex-col items-start pl-4 pt-20 w-full max-w-[600px]">
  <div className="w-full mb-4">
    <a 
      href="#mhome" 
      className="text-[40px] hover:opacity-70 block"
      onClick={() => setIsMenuOpen(false)}
      >
      <span className="font-gridular">HO</span>ME
    </a>
    <div
      className="w-screen h-[10px] mt-2"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, rgba(255,255,255,.5) 0px, transparent 2px 6px)",
      }}
    />
  </div>

  <div className="w-full mb-4">
    <a onClick={() => setIsMenuOpen(false)} href="#mportfolio" className="text-[40px] hover:opacity-70 block">
      PORT<span className="font-gridular">F</span>OLIO
    </a>
    <div
      className="w-screen h-[6px] mt-2"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, rgba(255,255,255,.5) 0px, transparent 2px 6px)",
      }}
    />
  </div>

  <div className="w-full mb-4">
    <a onClick={() => setIsMenuOpen(false)} href="#mcertification" className="text-[40px] hover:opacity-70 block">
      CERTI<span className="font-gridular">F</span>ICATI
      <span className="font-gridular">O</span>N
    </a>
    <div
      className="w-screen h-[3px] mt-2"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, rgba(255,255,255,.5) 0px, transparent 2px 4px)",
      }}
    />
  </div>

  <div className="w-full mb-4">
    <a onClick={() => setIsMenuOpen(false)} href="#meducation" className="text-[40px] hover:opacity-70 block">
      EDUCA<span className="font-gridular">T</span>IO
      <span className="font-gridular">N</span>
    </a>
    <div
      className="w-screen h-[1px] mt-2"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, rgba(255,255,255,.5) 0px, transparent 1px 1px)",
      }}
    />
  </div>

  <div className="w-full mb-4">
    <a onClick={() => setIsMenuOpen(false)} href="#mcontact" className="text-[40px] hover:opacity-70 block">
      CONT<span className="font-gridular">A</span>CT
    </a>
    <div
      className="w-screen h-[1px] mt-2"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, rgba(255,255,255,.5) 0px, transparent 1px 1px)",
      }}
    />
  </div>
</div>

      </div>

      <div className="fixed w-full left-0 bottom-0 z-[11000] pointer-events-none">
        <div className="w-full flex items-start justify-between">
          <div className="btm-left-plus relative w-4 h-4 bottom-2 left-2">
            <div className="btm-left-ver absolute left-1/2 top-0 h-4 w-[.5px] bg-white opacity-50 -translate-x-1/2"></div>
            <div className="btm-left-col absolute top-1/2 left-0 w-4 h-[.5px] bg-white opacity-50 -translate-y-1/2"></div>
          </div>

          <div className="frame-top-bot cc--bot">
            <div className="frame-top-bot_flex">
              <div className="frame-line is--hor"></div>
              <div className="frame-line is--angle-left_bot"></div>
            </div>

            <div className="relative menu-button">
              <div className="frame-top-bot_middle">
                <div className="frame-line is--menu"></div>
              </div>

              <button
                type="button"
                className="pointer-events-auto flex items-center gap-2 select-none"
                onClick={() => setIsMenuOpen((v) => !v)}
              >
                <div className="relative flex flex-col justify-center items-center w-[18px] h-[18px]">
                  <div
                    className={`absolute w-[18px] h-[1px] bg-white transition-transform duration-300 ${
                      isMenuOpen ? "rotate-45" : "translate-y-[-4px]"
                    }`}
                  />
                  <div
                    className={`absolute w-[18px] h-[1px] bg-white transition-transform duration-300 ${
                      isMenuOpen ? "-rotate-45" : "translate-y-[4px]"
                    }`}
                  />
                </div>
                <span className="text-white text-sm transition-opacity duration-200">
                  {isMenuOpen ? "CLOSE" : "MENU"}
                </span>
              </button>
            </div>

            <div className="frame-top-bot_flex">
              <div className="frame-line is--angle-right_bot"></div>
              <div className="frame-line is--hor"></div>
            </div>
          </div>

          <div className="btm-right-plus relative w-4 h-4 bottom-2 right-1">
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


    <div className="relative flex flex-col items-center text-white top-[150px]">
    <h1 
       style={{
     fontFamily: '"Smooch","Pretendard","Malgun Gothic",sans-serif',
      fontWeight: 800,
     }}
    className="flex pointer-events-none">
   
    <div className="text-[22vw] leading-none" style={{  transformOrigin: 'center' }}>M</div>
    <div className="text-[22vw] leading-none" style={{  transformOrigin: 'center' }}>Y</div>
    <div className="text-[22vw] leading-none" style={{  transformOrigin: 'center' }}>E</div>
    <div className="text-[22vw] leading-none" style={{  transformOrigin: 'center' }}>O</div>
    <div className="text-[22vw] leading-none" style={{  transformOrigin: 'center' }}>N</div>
    <div className="text-[22vw] leading-none" style={{  transformOrigin: 'center' }}>G</div>
    <div className="text-[22vw] leading-none" style={{  transformOrigin: 'center' }}>&nbsp;</div>
    <div className="text-[22vw] leading-none" style={{  transformOrigin: 'center' }}>C</div>
    <div className="text-[22vw] leading-none" style={{  transformOrigin: 'center' }}>H</div>
    <div className="text-[22vw] leading-none" style={{  transformOrigin: 'center' }}>U</div>
    <div className="text-[22vw] leading-none" style={{  transformOrigin: 'center' }}>L</div>
  </h1>

  <div className="flex gap-[6vw] mt-0 opacity-75">
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
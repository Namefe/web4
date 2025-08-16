import React, { useEffect, useRef, useState } from 'react'

const Moblie04 = () => {
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
    const translateY = -scrollY * 200; 

  return (
    <>
    <section
      id='meducation'
      ref={wrapperRef}
      className="relative left-1/2 -translate-x-1/2 text-white w-full h-[200vh] z-40 "
      style={{
        perspective: "700px",
        transformStyle: "preserve-3d"
      }}
    >
      <div
        className="max-w-[80rem] mx-auto px-6"
        style={{
          transform: `rotateX(${rotateX}deg) translate3d(0, ${translateY}px, 0)`,
          transition: "transform 0.5s linear"
        }}
      >
        <div className="text-center flex justify-center items-center">
        <h2
            style={{ fontSize: "clamp(2.5rem, 7.5vw, 8.375rem)" }}
            className="font-bold text-white/50 inline-block"
        >
            ED<span className="font-gridular">U</span>CAT<span className="font-gridular">I</span>ON
        </h2>

        <h2
            style={{ fontSize: "clamp(2.5rem, 7.5vw, 8.375rem)" }}
            className="font-bold inline-block -mb-[100px]"
        >
            HI<span className="font-gridular">S</span>T<span className="font-gridular">O</span>RY
        </h2>
        </div>

        <div className="space-y-10 mt-20 p-4">
          {[
            [["안양,", "부안중학교 졸업"], "Jan 2015"],
            [["안양,", "부흥고등학교 졸업"], "Jan 2018"],
            [["육군 병장 ", "만기전역"], "Feb 2022"],
            [["을지대학교", " 장례지도학과 졸업"], "Jan 2024"],
          ].map(([titles, date], i) => (
    <div
      key={i}
      className="grid grid-cols-12 items-center border-b border-white/20 pt-[56px] pb-[56px] gap-4"
    >
      {/* 왼쪽 2줄 */}
      <div className="col-span-7 text-[20px] leading-snug">
        {titles.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>

      {/* 가운데 아이콘 */}
      <div className="col-span-3 flex justify-center">
        <img
          src={`${process.env.PUBLIC_URL}/star.svg`}
          alt="Certificate"
          className="w-8 h-8 object-contain"
        />
      </div>

      {/* 오른쪽 날짜 */}
      <div className="col-span-2 text-[18px] text-right">{date}</div>
    </div>
  ))}
</div>
      </div>
    </section>
    </>
  )
}

export default Moblie04
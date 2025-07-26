import React, { useEffect, useRef, useState } from 'react'

const View04 = () => {

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

  return (
    <>
    <section
      ref={wrapperRef}
      className="relative  left-1/2 -translate-x-1/2 text-white w-full h-[200vh] z-40 "
      style={{
        perspective: "800px",
        transformStyle: "preserve-3d"
      }}
    >
      <div
        className="max-w-[80rem] mx-auto px-6"
        style={{
          transform: `rotateX(${rotateX}deg) translate3d(0, ${translateY}px, 0)`,
          transition: "transform 0.1s linear"
        }}
      >
        <div className="text-center flex justify-center items-center">
        <h2
            style={{ fontSize: "clamp(4.5rem, 7.5vw, 8.375rem)" }}
            className="font-bold text-white/50 inline-block"
        >
            ED<span className="font-gridular">U</span>CAT<span className="font-gridular">I</span>ON
        </h2>

        <h2
            style={{ fontSize: "clamp(4.5rem, 7.5vw, 8.375rem)" }}
            className="font-bold inline-block -mb-[200px]"
        >
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

    </>
  )
}

export default View04
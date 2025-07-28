import React from 'react'

const View05 = () => {


  const hiddenIndices = [1,3,6,8,11]
 
 
  return ( 
    <>
    <section className="relative h-screen w-full bg-black overflow-hidden text-white">
      {/* 반원형 SVG */}
      <svg
        viewBox="0 0 1000 1000"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[1500px] h-[800px] z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="text-arc"
            d="M 100,500 A 400,400 0 0,1 900,500"
            fill="none"
          />
        </defs>

        <text
          fill="#777"
          fontSize="55"
          fontFamily="monospace"
          letterSpacing="10"
        >
          <textPath href="#text-arc" startOffset="50%" textAnchor="middle">
            SMC9102@NAVER.COM
          </textPath>
        </text>

        {Array.from({ length: 180 }).map((_, i) => {
        const angle = i * 2; 
        const r = 390;       
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
        {Array.from({ length: 180 }).map((_, i) => {
        const angle = i * 2; 
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

{Array.from({ length: 180 }).map((_, i) => {
        const angle = i * 2; 
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

              {/* 내부 아크 선들 */}
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



{Array.from({ length: 36 }).map((_, i) => {
  const angle = (i * 360) / 36;
  const cx = 500;
  const cy = 1000;

  const rStart1 = 0;
  const rEnd1 = 350;  // 첫 번째 선의 끝
  const rStart2 = 410;
  const rEnd2 = 700;  // 두 번째 선의 끝

  // 첫 번째 구간 (중심 → 300)
  const x1a = cx + Math.cos((angle * Math.PI) / 180) * rStart1;
  const y1a = cy + Math.sin((angle * Math.PI) / 180) * rStart1;
  const x2a = cx + Math.cos((angle * Math.PI) / 180) * rEnd1;
  const y2a = cy + Math.sin((angle * Math.PI) / 180) * rEnd1;

  // 두 번째 구간 (600 → 800)
  const x1b = cx + Math.cos((angle * Math.PI) / 180) * rStart2;
  const y1b = cy + Math.sin((angle * Math.PI) / 180) * rStart2;
  const x2b = cx + Math.cos((angle * Math.PI) / 180) * rEnd2;
  const y2b = cy + Math.sin((angle * Math.PI) / 180) * rEnd2;

  return (
    <>
      {/* 1. 중심 → 중간까지 */}
      <line
        key={`a-${i}`}
        x1={x1a}
        y1={y1a}
        x2={x2a}
        y2={y2a}
        stroke="#444"
        strokeWidth="1"
      />
      {/* 2. 바깥쪽 → 끝까지 */}
      <line
        key={`b-${i}`}
        x1={x1b}
        y1={y1b}
        x2={x2b}
        y2={y2b}
        stroke="#444"
        strokeWidth="1"
      />
    </>
  );
})}

      </svg>

      {/* 소셜 링크들 - 각도 조절 위치 수동 */}
      <div className="absolute top-[260px] left-1/2 -translate-x-1/2 z-10 w-[600px] h-[300px]">
        <div className="absolute left-[60px] top-[90px] rotate-[-45deg] text-xs tracking-widest">INSTAGRAM</div>
        <div className="absolute left-[200px] top-[40px] rotate-[-15deg] text-xs tracking-widest">BEHANCE</div>
        <div className="absolute right-[200px] top-[40px] rotate-[15deg] text-xs tracking-widest">FACEBOOK</div>
        <div className="absolute right-[60px] top-[90px] rotate-[45deg] text-xs tracking-widest">LINKEDIN</div>
      </div>



      {/* 좌측 하단 Policy */}
      <div className="absolute bottom-4 left-4 text-[10px] text-white/40">
        Privacy & Cookies Policy
      </div>

      {/* 우측 하단 회사명 */}
      <div className="absolute bottom-4 right-4 text-[10px] text-white/40">
        Cosmos Studio © 2025
      </div>
    </section>

    </>
  )
}

export default View05
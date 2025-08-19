import { useEffect, useMemo, useRef, useState } from "react";

export default function LoadingPage({
  title = "LAUNCHING",
  subtitle = "Preparing warp drive",
  showPercent = true,
  duration = 2200,
  fadeOut = 500
}) {
  const [percent, setPercent] = useState(0);
  const [visible, setVisible] = useState(true);
  const start = useRef(null);

  useEffect(() => {
    let raf;
    const step = (t) => {
      if (!start.current) start.current = t;
      const p = Math.min(1, (t - start.current) / duration);
      setPercent(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(step);
      else setTimeout(() => setVisible(false), fadeOut);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [duration, fadeOut]);

  const stars = useMemo(
    () =>
      Array.from({ length: 100 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 3,
        opacity: 0.3 + Math.random() * 0.7
      })),
    []
  );

  return (
    <div
      className={`fixed inset-0 z-[99999] transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* 어두운 우주 배경 */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_30%,#0b0c14_0%,#05060a_60%,#000_100%)]" />

      {/* 은하 구름 효과 (어두운 남보라, 청록 계열) */}
      <div className="absolute inset-0 mix-blend-screen opacity-40 bg-[radial-gradient(60%_40%_at_70%_20%,rgba(55,65,81,0.3),transparent_60%),radial-gradient(50%_35%_at_30%_65%,rgba(30,58,138,0.25),transparent_60%)]" />

      {/* 별 점들 */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
              background:
                "radial-gradient(circle, rgba(200,220,255,0.9) 0%, rgba(255,255,255,0.1) 70%)",
              opacity: s.opacity,
              animation: `twinkle 2.5s ${s.delay}s infinite alternate`
            }}
          />
        ))}
      </div>

      {/* 메인 로딩 UI */}
      <div className="relative z-10 h-full w-full flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-7">
          <div className="relative w-36 h-36">
            <div className="absolute inset-0 rounded-full border-[3px] border-slate-600/40 animate-[spin_16s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border-[2px] border-indigo-500/30 border-t-transparent animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-8 rounded-full border border-cyan-600/30 border-b-transparent animate-[spin_6s_linear_infinite]" />
            <div className="absolute inset-0 rounded-full border-4 border-white/10" />
            <div className="absolute inset-0 rounded-full border-4 border-white/70 border-t-transparent animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center text-xl font-medium tracking-widest">
              {showPercent ? `${percent}%` : ""}
            </div>
          </div>

          <div className="text-center">
            <div className="text-lg tracking-[0.35em] uppercase">{title}</div>
            <div className="text-sm opacity-70 mt-1">{subtitle}</div>
          </div>

          <div className="w-[300px] h-1.5 rounded-full overflow-hidden bg-white/10">
            <div
              className="h-full rounded-full"
              style={{
                width: `${percent}%`,
                background:
                  "linear-gradient(90deg,#1e3a8a,#475569,#0f172a)",
                boxShadow:
                  "0 0 10px rgba(59,130,246,.5), 0 0 20px rgba(30,58,138,.4)"
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0% { transform: scale(0.9); opacity: 0.3; }
          100% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";

export default function LoadingPage({
  title = "LOADING",
  subtitle = "Please wait",
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

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black text-white transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-4 border-white/10" />
          <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center text-xl font-medium">
            {showPercent ? `${percent}%` : ""}
          </div>
        </div>
        <div className="text-center">
          <div className="text-lg tracking-[0.2em]">{title}</div>
          <div className="text-sm opacity-60 mt-1">{subtitle}</div>
        </div>
        <div className="w-[260px] h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-[width] duration-100"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}

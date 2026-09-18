import { useEffect, useState } from "react";

function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A0F14]">
      <div className="text-center">

        {/* AR Logo */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-[#00D084]/30 bg-[#111820] shadow-[0_0_40px_rgba(0,208,132,0.12)]">
          <span className="text-3xl font-black italic">
            <span className="text-[#00D084]">A</span>
            <span className="text-[#D4AF37]">R</span>
          </span>
        </div>

        {/* Name */}
        <h2 className="mt-6 text-xl font-black tracking-wide">
          ABIDUR{" "}
          <span className="text-[#00D084]">
            RAHMAN
          </span>
        </h2>

        <p className="mt-2 text-[10px] font-bold tracking-[4px] text-[#D4AF37]">
          RAFI
        </p>

        {/* Loading Bar */}
        <div className="mx-auto mt-7 h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-[loading_1.2s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-[#00D084] to-[#00A8FF]" />
        </div>

        <p className="mt-4 text-xs text-slate-600">
          Loading Portfolio...
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;
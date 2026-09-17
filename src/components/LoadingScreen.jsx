import { useEffect, useState } from "react";

function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-[#0D1117] flex items-center justify-center">
      <div className="text-center">

        <div className="flex items-center gap-3">

  <div className="relative w-14 h-14 flex items-center justify-center">
    <div className="absolute inset-0 rounded-xl border border-[#00C37A]/40 rotate-45"></div>

    <span className="relative text-xl font-black italic">
      <span className="text-[#00C37A]">A</span>
      <span className="text-[#D4AF37]">R</span>
    </span>
  </div>

  <div>
    <h3 className="text-xl font-extrabold">
      ABIDUR <span className="text-[#00C37A]">RAHMAN</span>
    </h3>

    <p className="text-[#D4AF37] text-[9px] tracking-[4px] mt-1">
      RAFI
    </p>
  </div>

</div>

        <h2 className="text-2xl font-bold mt-5">
          Abidur Rahman <span className="text-[#00C37A]">Rafi</span>
        </h2>

        <p className="text-gray-500 mt-2">
          Loading Portfolio...
        </p>

        <div className="w-48 h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
          <div className="h-full w-1/2 bg-[#00C37A] animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>

      </div>
    </div>
  );
}

export default LoadingScreen;
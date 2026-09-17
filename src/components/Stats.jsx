import { useEffect, useState } from "react";

function Counter({ end, suffix = "+" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;

      if (current >= end) {
        current = end;
        clearInterval(interval);
      }

      setCount(current);
    }, 80);

    return () => clearInterval(interval);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function Stats() {
  const stats = [
    {
      number: 10,
      title: "Projects",
    },
    {
      number: 6,
      title: "Technologies",
    },
    {
      number: 1,
      title: "Years Learning",
    },
    {
      number: 24,
      title: "Learning Mindset",
      suffix: "/7",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-[#111820]/80 backdrop-blur-md border border-white/10 rounded-xl p-5 text-center hover:border-[#00C37A]/50 hover:-translate-y-1 transition duration-300"
        >
          <h3 className="text-3xl font-bold text-[#00C37A]">
            <Counter
              end={stat.number}
              suffix={stat.suffix || "+"}
            />
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Stats;
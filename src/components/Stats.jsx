"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 12,
    text: "Years of Experience",
  },
  {
    num: 26,
    text: "Project Completed",
  },
  {
    num: 8,
    text: "Technoligies Mastered",
  },
  {
    num: 500,
    text: "Code Commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto mt-5 xl:mt-10">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map(({ num, text }, index) => {
            return (
              <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                <CountUp
                  end={num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p className={`${text.length < 15 ? "max-w-24": "max-w-36"} leading-snug text-white/80`}>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

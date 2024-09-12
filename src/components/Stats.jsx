"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: "1",
    sign: "+",
    text: "Years of Experience",
  },
  {
    num: 15,
    text: "Client Projects",
  },
  {
    num: 10,
    text: "Tools Mastered",
  },
  {
    num: "5",
    sign: "+",
    txt: "Lakhs",
    text: "Ads spent",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto mt-5 xl:mt-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map(({ num, text, sign, txt }, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <span className="text-4xl xl:text-6xl font-extrabold">
                  {sign}
                </span>
                <p
                  className={`${
                    text.length < 18 ? "max-w-24" : "max-w-36"
                  } leading-snug text-white/80`}
                >
                  {txt} {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

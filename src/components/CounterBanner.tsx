import React, { useEffect, useState } from "react";

const CounterBanner = () => {
  return (
    <div className="counter-banner flex items-center justify-center">
      <div className="w-3/5 flex items-center justify-between flex-wrap">
        <Counter name="clients" delay={1} />
        <Counter name="projects" delay={3} />
        <Counter name="awards" delay={10} />
        <Counter name="team" delay={5} />
      </div>
    </div>
  );
};
export default CounterBanner;

const Counter = ({ name, delay = 1 }) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCounter((pre) => pre + 1);
    }, delay * 1000);
  }, [counter, delay]);

  return (
    <div className="text-white py-12 text-center sm:w-auto w-full">
      <div className="text-5xl font-bold">{counter}</div>
      <div className="font-medium text-xs uppercase">{name}</div>
    </div>
  );
};

import React from "react";
import "./styles/tailwind.css";
import "./styles/style.css";
import Banner from "./components/Banner";
import ServiceSection from "./components/ServiceSection";
import CounterBanner from "./components/CounterBanner";
import WorkSection from "./components/WorkSection";

function App() {
  return (
    <>
      <Banner />
      <ServiceSection />
      <CounterBanner />
      <WorkSection />
      <div className="text-gray-700 text-center flex items-center justify-center h-24 bg-gray-100">
        <span>
          © 2020
          <span className="font-medium text-gray-900">
            {" </> Developer. "}
          </span>
          All Right Reserve.
        </span>
      </div>
    </>
  );
}

export default App;

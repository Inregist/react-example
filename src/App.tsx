import React from "react";
import "./styles/tailwind.css";
import "./styles/style.css";
import Banner from "./components/Banner";
import ServiceSection from "./components/ServiceSection";
import CounterBanner from "./components/CounterBanner";

function App() {
  return (
    <>
      <Banner />
      <ServiceSection />
      <CounterBanner />
    </>
  );
}

export default App;

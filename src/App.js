import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import { Footer, Header, NavMobile } from "./components";
import { Home, Earn, AboutUS, Account } from "./pages";

const App = () => {
  // mobile nav state
  const [navMobile, setNavMobile] = useState(false);
  // aos init
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 10,
    });
  });

  return (
    <div className="overflow-hidden">
      <Header setNavMobile={setNavMobile} />
      {/* <Hero /> */}
      {/* mobile nav */}
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed z-10 top-0 h-full transition-all duration-100`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      {/* routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

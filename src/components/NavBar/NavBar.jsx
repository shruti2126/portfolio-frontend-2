/** @format */

// NavBar Component
import React, { useState, useEffect } from "react";
import "../../styles/styles.css";
import Brand from "./Brand";
import { Links } from "./Links";
import Ham from "./Hamburger";

const NavBar = () => {
  const mediumScreenBreakpoint = 768; // pixels
  const [isMobileView, setIsMobileView] = useState(
    window.innerWidth < mediumScreenBreakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < mediumScreenBreakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar-container">
      <a href="#home">
        <Brand />
      </a>
      {isMobileView ? <Ham /> : <Links collapsed={false}/>}
    </div>
  );
};

export default NavBar;

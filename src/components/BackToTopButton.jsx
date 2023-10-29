/** @format */

import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { FaChevronCircleUp } from "react-icons/fa";
const BackToTopButton = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    setShowBackToTop(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      className={`back-to-top-button ${showBackToTop ? "visible" : ""}`}
    >
      <FaChevronCircleUp />
      {/* Back to Top */}
    </Button>
  );
};

export default BackToTopButton;

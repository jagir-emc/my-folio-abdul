"use client";

import { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the user scrolls down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-4 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-accent text-white p-3 rounded-full shadow-lg hover:bg-accent-hover focus:outline-none transition duration-300"
          aria-label="Back to Top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default BackToTop;

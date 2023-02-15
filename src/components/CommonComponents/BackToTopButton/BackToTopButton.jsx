import React from "react";
import { useEffect, useState } from "react";
import './BackToTopButton.css'

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1200) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button
        className="btn"
          onClick={scrollUp}
        >
          ᐱ
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
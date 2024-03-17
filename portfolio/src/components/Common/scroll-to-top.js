import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";

export const ScrollToTop = () => {
  const { scrollYProgress } = useScroll();
  const [isScrollFixed, setIsScrollFixed] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 100;

      setIsScrollFixed(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      onClick={handleScrollTop}
      style={{
        pathLength: scrollYProgress,
        position: "fixed",
        bottom: isScrollFixed ? "40px" : "-100px",
        right: "40px",
        transition: "bottom 0.3s ease-in-out",
        border: '1px solid #3B3BFF',
        padding: '20px',
        borderRadius: '40px',
        color: '#27E224',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        overflow: 'hidden',
        zIndex: '50',
        display:"flex"
        
      }}

    >
      <IoArrowUp />
    </motion.div>
  );
};
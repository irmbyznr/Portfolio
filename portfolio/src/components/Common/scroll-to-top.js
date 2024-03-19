import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";
import "./scroll-to-top.scss"

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
      className="scroll-to-top"
      style={{
        pathLength: scrollYProgress,
        bottom: isScrollFixed ? "30px" : "-100px",
       
      }}

    >
      <IoArrowUp />
    </motion.div>
  );
};
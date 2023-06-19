import { useScroll } from "../../hooks/useScroll";
import { scrollUp } from "./utils";
import arrow from "../../assets/svg/arrow-up.svg";
import "./styles.css";
import { motion } from "framer-motion";

export const BackToTop = () => {
  const scrollState = useScroll();
  const handleScroll = () => {
    scrollUp();
  };

  return (
    <motion.div
      className="back-to-top"
      animate={{ y: [0, -4, -4, 0, 4, 4, 0] }}
      transition={{ repeat: Infinity, duration: 1 }}
    >
      {scrollState && (
        <button onClick={handleScroll}>
          <img src={arrow} alt="arrow-up" />
        </button>
      )}
    </motion.div>
  );
};

import { useScroll } from "../../hooks/useScroll";
import { scrollUp } from "./utils";
import arrow from "../../assets/svg/arrow-up.svg";
import "./styles.css";

export const BackToTop = () => {
  const scrollState: boolean = useScroll();
  const handleScroll = (): void => {
    scrollUp();
  };

  return (
    <div className="back-to-top move-arrow">
      {scrollState && (
        <button onClick={handleScroll}>
          <img src={arrow} alt="arrow-up" />
        </button>
      )}
    </div>
  );
};

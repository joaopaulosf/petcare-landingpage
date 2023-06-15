import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollState, setScrollState] = useState(false);

  const changeScrollState = () => {
    if (window.scrollY >= 80) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScrollState);

    return () => {
      window.removeEventListener("scroll", changeScrollState);
    };
  }, []);

  return scrollState;
};

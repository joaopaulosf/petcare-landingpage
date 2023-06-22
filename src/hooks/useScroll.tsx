import { useEffect, useState } from "react";

export const useScroll = (): boolean => {
  const [scrollState, setScrollState] = useState<boolean>(false);

  const changeScrollState = (): void => {
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

import { FC } from "react";
import woman from "../../../assets/images/home-woman.png";

export const HomeImage: FC = () => {
  return (
    <>
      <img className="home-woman" src={woman} alt="" />
    </>
  );
};

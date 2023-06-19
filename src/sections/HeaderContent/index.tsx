import { FC } from "react";
import "./styles.css";
import { HomeImage } from "./components/HomeImage";
import { PressIt } from "../../components/PressIt";
import play from "../../assets/svg/play.svg";

export const HeaderContent: FC = () => {
  return (
    <div className="home-content container" id="home">
      <div className="home-text">
        <h1>
          Established & Trusted Pet <span>Care Service</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
          illo, cum quo unde libero quia porro non at assumenda optio odio,
          ducimus temporibus deserunt. Voluptatibus pariatur quaerat eos quae
          exercitationem.
        </p>
        <PressIt text="Explore More" btnIcon={play} />
      </div>
      <HomeImage />
    </div>
  );
};

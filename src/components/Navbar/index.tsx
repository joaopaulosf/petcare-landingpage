import { FC } from "react";
import { NavLinks } from "./components/Navlinks";
import { PetBrand } from "./components/PetBrand";
import "./styles.css";
import { useScroll } from "../../hooks/useScroll";

export const Navbar: FC = () => {
  const nav = useScroll();

  return (
    <div className={nav ? "navigation-bar active" : "navigation-bar "}>
      <div className="nav-bar container">
        <PetBrand />
        <label id="menu" className="menu" htmlFor="checkBox">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <input type="checkbox" id="checkBox" />
        <NavLinks />
      </div>
    </div>
  );
};

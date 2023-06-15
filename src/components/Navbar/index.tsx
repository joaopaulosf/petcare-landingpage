import { FC } from "react";
import { NavLinks } from "./components/NavLinks";
import { PetBrand } from "./components/PetBrand";
import { UserAuth } from "./components/UserAuth";
import "./styles.css";
import { useScroll } from "../../hooks/useScroll";

export const Navbar: FC = () => {
  const nav = useScroll();

  return (
    <div className={nav ? "navigation-bar active" : "navigation-bar "}>
      <div className="nav-bar container">
        <PetBrand />
        <NavLinks />
        <UserAuth />
      </div>
    </div>
  );
};

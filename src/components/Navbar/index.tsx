import { FC } from "react";
import { NavLinks } from "./components/NavLinks";
import { PetBrand } from "./components/PetBrand";
import { UserAuth } from "./components/UserAuth";
import "./styles.css";

export const Navbar: FC = () => {
  return (
    <div className="nav-bar container">
      <PetBrand />
      <NavLinks />
      <UserAuth />
    </div>
  );
};

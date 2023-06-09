import { FC } from "react";
import brand from "../../../assets/images/pet-brand.png";

export const PetBrand: FC = () => {
  return (
    <div>
      <a href="#">
        <img className="brand-icon" src={brand} alt="brand" />
      </a>
    </div>
  );
};
